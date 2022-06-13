import { MarketProductDbInterface } from '../../interfaces/marketProductDb.interface';
import { mapMarketProductDbIntoMarketProduct } from '../marketProductDbIntoMarketProduct.mapper';

describe('mapMarketProductDbIntoMarketProduct', () => {
  it('should return MarketProduct', () => {
    const marketProductDb: MarketProductDbInterface = {
      m_id: 'marketId',
      m_name: 'marketName',
      m_lineOne: 'lineOne',
      m_lineTwo: 'lineTwo',
      m_city: 'city',
      m_zipCode: 'zipCode',
      m_createdAt: new Date().toString(),
      m_updatedAt: new Date().toString(),
      pro_id: 'productId',
      pro_name: 'productName',
      pro_category: 'productCategory',
      pro_quantity: 1,
      pro_price: '120',
      pro_marketId: 'productMarketId',
      pro_createdAt: new Date().toString(),
      pro_updatedAt: new Date().toString(),
    };

    const marketProduct = mapMarketProductDbIntoMarketProduct(marketProductDb);
    expect(marketProduct.getDetails()).toEqual({
      id: marketProductDb.m_id,
      name: marketProductDb.m_name,
      lineOne: marketProductDb.m_lineOne,
      lineTwo: marketProductDb.m_lineTwo,
      city: marketProductDb.m_city,
      zipCode: marketProductDb.m_zipCode,
      createdAt: new Date(marketProductDb.m_createdAt),
      updatedAt: new Date(marketProductDb.m_updatedAt),
      product: {
        id: marketProductDb.pro_id,
        name: marketProductDb.pro_name,
        price: Number(marketProductDb.pro_price),
        marketId: marketProductDb.pro_marketId,
        category: marketProductDb.pro_category,
        quantity: marketProductDb.pro_quantity,
        createdAt: new Date(marketProductDb.pro_createdAt),
        updatedAt: new Date(marketProductDb.pro_updatedAt),
      },
      similarProducts: [],
    });
  });
});
