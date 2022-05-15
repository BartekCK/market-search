interface ProductInterface {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  marketId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Product {
  private readonly id: string;
  private readonly name: string;
  private readonly category: string;
  private readonly quantity: number;
  private readonly price: number;
  private readonly marketId: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  constructor(product: ProductInterface) {
    this.id = product.id;
    this.name = product.name;
    this.category = product.category;
    this.quantity = product.quantity;
    this.price = product.price;
    this.marketId = product.marketId;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;
  }

  getMarketId(): string {
    return this.marketId;
  }
}
