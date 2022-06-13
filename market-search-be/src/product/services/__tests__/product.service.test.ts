import { Test } from '@nestjs/testing';
import { ProductRepository } from '../../../product/database/repositories/product.repository';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../../database/entities/product.entity';
import { ProductService } from '../product.service';
import { DatabaseModule } from '../../../market/database/database.module';

describe('ProductService', () => {
  let app: INestApplication;
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DatabaseModule, TypeOrmModule.forFeature([ProductEntity])],
      providers: [ProductService, ProductRepository],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    productService = moduleRef.get<ProductService>(ProductService);
    productRepository = moduleRef.get<ProductRepository>(ProductRepository);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  it('should return products', async () => {
    const products = await productService.search('mąka');
    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
  });
});
