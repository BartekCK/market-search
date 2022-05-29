import { Product, ProductInterface } from '../domain/product';

export class ProductDto {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  marketId: string;

  private constructor(details: ProductInterface) {
    this.id = details.id;
    this.name = details.name;
    this.category = details.category;
    this.quantity = details.quantity;
    this.price = details.price;
    this.marketId = details.marketId;
  }

  static create(product: Product): ProductDto {
    const productDto = new ProductDto(product.getDetails());

    return productDto;
  }
}
