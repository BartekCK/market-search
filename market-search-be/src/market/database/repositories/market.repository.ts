import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketEntity } from '../entities/market.entity';
import { ProductEntity } from '../../../product/database/entities/product.entity';
import { MarketProductDbInterface } from '../interfaces/marketProductDb.interface';
import { mapMarketProductDbIntoMarketProduct } from '../mappers/marketProductDbIntoMarketProduct.mapper';
import { MarketProduct } from '../../domain/market';

export class MarketRepository {
  constructor(
    @InjectRepository(MarketEntity)
    private readonly marketRepository: Repository<MarketEntity>,
  ) {}

  async findByProductName(productName: string): Promise<MarketProduct[]> {
    const productsWithCompanyQuery = this.marketRepository
      .createQueryBuilder('m')
      /**
       * Market
       */
      .select('m.id', 'm_id')
      .addSelect('m.name', 'm_name')
      .addSelect('m.line_one', 'm_lineOne')
      .addSelect('m.line_two', 'm_lineTwo')
      .addSelect('m.city', 'm_city')
      .addSelect('m."zipCode"', 'm_zipCode')
      .addSelect('m.created_at', 'm_createdAt')
      .addSelect('m.updated_at', 'm_updatedAt')
      /**
       * Product
       */
      .addSelect('pro.id', 'pro_id')
      .addSelect('pro.name', 'pro_name')
      .addSelect('pro.category', 'pro_category')
      .addSelect('pro.quantity', 'pro_quantity')
      .addSelect('pro.price', 'pro_price')
      .addSelect('pro.market_id', 'pro_marketId')
      .addSelect('pro.created_at', 'pro_createdAt')
      .addSelect('pro.updated_at', 'pro_updatedAt')
      .leftJoin(
        (innerQuery) =>
          innerQuery
            .select('*')
            .from(ProductEntity, 'p')
            .where(`p.name ILIKE '${productName}' AND p.quantity > 0`),
        'pro',
        'pro.market_id = m.id',
      );

    const marketProductDb =
      await productsWithCompanyQuery.getRawMany<MarketProductDbInterface>();

    return marketProductDb.map((record) =>
      mapMarketProductDbIntoMarketProduct(record),
    );
  }
}
