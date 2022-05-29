import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../database/repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async search(name: string): Promise<{ name: string; lowestPrice: number }[]> {
    return this.productRepository.findSimilar(name);
  }
}
