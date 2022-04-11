import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductController {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  @Get('/')
  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
