import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findSimilar(name: string): Promise<{ name: string }[]> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .select('name')
      .where('product.name %>> :name', { name })
      .orderBy(`product.name <-> '${name}'`, 'ASC')
      .groupBy('product.name');

    return query.getRawMany<{ name: string }>();
  }

  async getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
