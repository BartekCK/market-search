import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async search(name: string): Promise<{ name: string }[]> {
    return this.productRepository.findSimilar(name);
  }

  async getAll(): Promise<Product[]> {
    return this.productRepository.getAll();
  }
}
