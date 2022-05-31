import { MarketService } from '../market.service';
import { Test } from '@nestjs/testing';
import { ProductRepository } from '../../../product/database/repositories/product.repository';
import { MarketRepository } from '../../database/repositories/market.repository';

describe('MarketService', () => {
  let marketService: MarketService;

  const marketRepositoryMock = {
    findByProductName: jest.fn(),
  };

  const productRepositoryMock = {
    findSimilar: jest.fn(),
    findSimilarProductsByNameAndMarketsId: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        MarketService,
        {
          provide: MarketRepository,
          useValue: marketRepositoryMock,
        },
        {
          provide: ProductRepository,
          useValue: productRepositoryMock,
        },
      ],
    }).compile();

    marketService = moduleRef.get<MarketService>(MarketService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(marketService).toBeDefined();
  });

  describe('Given product name', () => {
    it('which not exist in database', async () => {
      jest
        .spyOn(marketRepositoryMock, 'findByProductName')
        .mockResolvedValue([]);

      const result = await marketService.getMarketProduct(
        'not existed product',
      );

      expect(result).toEqual([]);
    });
  });
});
