import { Injectable } from '@nestjs/common';
import { MarketRepository } from '../database/repositories/market.repository';
import { ProductRepository } from '../../product/database/repositories/product.repository';
import { MarketProduct } from '../domain/market';

@Injectable()
export class MarketService {
  constructor(
    private readonly marketRepository: MarketRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  async getMarketProduct(name: string): Promise<MarketProduct[]> {
    const marketProducts = await this.marketRepository.findByProductName(name);

    const marketsWithoutProductIds = marketProducts
      .filter((el) => el.isProductExist() === false)
      .map((el) => el.getId());

    if (marketsWithoutProductIds.length) {
      const similarProducts =
        await this.productRepository.findSimilarProductsByNameAndMarketsId(
          name,
          marketsWithoutProductIds,
        );

      similarProducts.forEach((product) => {
        const marketProduct = marketProducts.find(
          (marketProduct) => marketProduct.getId() === product.getMarketId(),
        );

        marketProduct.addSimilarProduct(product);
      });
    }

    return marketProducts;
  }
}
