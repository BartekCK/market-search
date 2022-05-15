import { Product } from '../../domain/product';
import { ProductEntity } from '../entities/product.entity';

export const mapProductEntityIntoProduct = (
  productEntity: ProductEntity,
): Product => {
  return new Product({
    id: productEntity.id,
    name: productEntity.name,
    marketId: productEntity.marketId,
    price: productEntity.price,
    category: productEntity.category,
    quantity: productEntity.quantity,
    createdAt: productEntity.createdAt,
    updatedAt: productEntity.updatedAt,
  });
};
