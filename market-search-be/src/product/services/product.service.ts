import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../database/repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async search(name: string): Promise<{ name: string }[]> {
    return this.productRepository.findSimilar(name);
  }
}
