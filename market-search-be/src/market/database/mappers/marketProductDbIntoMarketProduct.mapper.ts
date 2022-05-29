import { MarketProduct } from '../../domain/market';
import { MarketProductDbInterface } from '../interfaces/marketProductDb.interface';
import { mapProductEntityIntoProduct } from '../../../product/database/mappers/productEntityIntoProduct.mapper';

export const mapMarketProductDbIntoMarketProduct = (
  marketProductDb: MarketProductDbInterface,
): MarketProduct => {
  const product = marketProductDb.pro_id
    ? mapProductEntityIntoProduct({
        id: marketProductDb.pro_id,
        name: marketProductDb.pro_name,
        price: marketProductDb.pro_price,
        marketId: marketProductDb.pro_marketId,
        category: marketProductDb.pro_category,
        quantity: marketProductDb.pro_quantity,
        createdAt: new Date(marketProductDb.pro_createdAt),
        updatedAt: new Date(marketProductDb.pro_updatedAt),
      })
    : null;

  const marketProduct = new MarketProduct({
    id: marketProductDb.m_id,
    name: marketProductDb.m_name,
    city: marketProductDb.m_city,
    lineOne: marketProductDb.m_lineOne,
    lineTwo: marketProductDb.m_lineTwo,
    createdAt: new Date(marketProductDb.m_createdAt),
    updatedAt: new Date(marketProductDb.m_updatedAt),
    zipCode: marketProductDb.m_zipCode,
    product,
  });

  return marketProduct;
};
