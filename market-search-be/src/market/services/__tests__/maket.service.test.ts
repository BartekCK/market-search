import { MarketService } from '../market.service';
import { Test } from '@nestjs/testing';
import { ProductRepository } from '../../../product/database/repositories/product.repository';
import { MarketRepository } from '../../database/repositories/market.repository';
import { MarketModule } from '../../market.module';
import { INestApplication } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';

describe('MarketService', () => {
  let app: INestApplication;
  let marketService: MarketService;
  let marketRepository: MarketRepository;
  let productRepository: ProductRepository;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DatabaseModule, MarketModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    marketService = moduleRef.get<MarketService>(MarketService);
    marketRepository = moduleRef.get<MarketRepository>(MarketRepository);
    productRepository = moduleRef.get<ProductRepository>(ProductRepository);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(marketService).toBeDefined();
  });

  describe('Given product name', () => {
    it('which not exist in database', async () => {
      jest.spyOn(marketRepository, 'findByProductName');

      const result = await marketService.getMarketProduct(
        'not existed product',
      );

      result.forEach((marketProduct) => {
        expect(marketProduct.isProductExist()).toBeFalsy();
      });
    });

    it('which exist in database', async () => {
      jest.spyOn(marketRepository, 'findByProductName');

      const result = await marketService.getMarketProduct('Coca - cola');

      result.forEach((marketProduct) => {
        const { similarProducts, product } = marketProduct.getDetails();

        expect(similarProducts).toEqual([]);
        expect(product).toEqual({
          category: expect.any(String),
          createdAt: expect.any(Date),
          id: expect.any(String),
          marketId: marketProduct.getId(),
          name: 'Coca - cola',
          price: expect.any(Number),
          quantity: expect.any(Number),
          updatedAt: expect.any(Date),
        });
      });
    });

    describe('When market not have given product', () => {
      it('should return similar products', async () => {
        jest.spyOn(productRepository, 'findSimilarProductsByNameAndMarketsId');

        const result = await marketService.getMarketProduct('Mąka pszenna');

        result.forEach((marketProduct) => {
          const { similarProducts, product } = marketProduct.getDetails();

          if (!product) {
            expect(similarProducts.length > 0).toBeTruthy();
            expect(
              productRepository.findSimilarProductsByNameAndMarketsId,
            ).toBeCalledTimes(1);
          } else {
            expect(similarProducts).toEqual([]);
            expect(product).toEqual(
              expect.objectContaining({ name: 'Mąka pszenna' }),
            );
          }
        });
      });
    });
  });
});
