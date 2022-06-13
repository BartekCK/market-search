import { Test } from '@nestjs/testing';
import { ProductController } from '../product.controller';
import { ProductService } from '../../services/product.service';

describe('ProductController', () => {
  let productController: ProductController;

  const productService = {
    search: jest.fn(() => [{ name: 'mąka', lowestPrice: 10 }]),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: ProductService, useValue: productService }],
      controllers: [ProductController],
    }).compile();

    productController = moduleRef.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });

  it('should return products', async () => {
    const products = await productController.searchProducts('mąka');
    expect(products).toEqual([{ name: 'mąka', lowestPrice: 10 }]);
  });
});
