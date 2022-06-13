import { MarketProduct } from '../../domain/market';
import { Product } from '../../../product/domain/product';
import { MarketProductDto } from '../marketProduct.dto';

describe('MarketProductDto', () => {
  it('should return MarketProductDto', () => {
    const marketProduct = new MarketProduct({
      id: 'marketId',
      name: 'marketName',
      city: 'city',
      lineOne: 'lineOne',
      lineTwo: 'lineTwo',
      zipCode: 'zipCode',
      product: new Product({
        id: 'productId',
        name: 'productName',
        price: 100,
        marketId: 'marketId',
        category: 'productCategory',
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const dtoResult = MarketProductDto.create(marketProduct);
    expect(dtoResult).toBeDefined();
  });
});
