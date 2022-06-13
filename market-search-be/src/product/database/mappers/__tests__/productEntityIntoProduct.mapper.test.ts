import { mapProductEntityIntoProduct } from '../productEntityIntoProduct.mapper';

describe('productEntityIntoProduct.mapper', () => {
  it('should map ProductEntity into Product', () => {
    const productEntity = {
      id: '1',
      name: 'mąka',
      marketId: '1',
      price: '1',
      category: 'mąka',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const product = mapProductEntityIntoProduct(productEntity);

    expect(product).toBeDefined();
    expect(product.getDetails()).toEqual({
      ...productEntity,
      price: Number(productEntity.price),
    });
  });
});
