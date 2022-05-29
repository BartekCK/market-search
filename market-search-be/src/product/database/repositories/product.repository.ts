import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../domain/product';
import { mapProductEntityIntoProduct } from '../mappers/productEntityIntoProduct.mapper';

export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findSimilar(
    name: string,
  ): Promise<{ name: string; lowestPrice: number }[]> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .select('name')
      .addSelect('MIN(product.price)', 'lowestPrice')
      .where('product.name %>> :name', { name })
      .orderBy(`product.name <-> '${name}'`, 'ASC')
      .groupBy('product.name');

    const result = await query.getRawMany<{
      name: string;
      lowestPrice: number;
    }>();

    return result.map((el) => ({ ...el, lowestPrice: Number(el.lowestPrice) }));
  }

  async findSimilarProductsByNameAndMarketsId(
    name: string,
    marketIds: string[],
  ): Promise<Product[]> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .addSelect(`product.name <-> '${name}'`, 'sim')
      .where('product.name % :name', { name })
      .andWhere('product.quantity > 0')
      .andWhere('product.marketId IN (:...strings)', { strings: marketIds })
      .orderBy(`sim`, 'ASC');

    const products = await query.getMany();

    return products.map(mapProductEntityIntoProduct);
  }
}
