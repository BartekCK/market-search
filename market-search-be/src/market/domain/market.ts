import { Product } from '../../product/domain/product';

interface Market {
  id: string;
  name: string;
  lineOne: string;
  lineTwo?: string;
  city: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MarketProductInterface extends Market {
  product: Product | null;
}

export class MarketProduct {
  private readonly id: string;
  private readonly name: string;
  private readonly lineOne: string;
  private readonly lineTwo?: string;
  private readonly city: string;
  private readonly zipCode: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private readonly product: Product | null = null;
  private readonly similarProducts: Product[] = [];

  constructor(marketProduct: MarketProductInterface) {
    this.id = marketProduct.id;
    this.name = marketProduct.name;
    this.lineOne = marketProduct.lineOne;
    this.lineTwo = marketProduct.lineTwo;
    this.city = marketProduct.city;
    this.zipCode = marketProduct.zipCode;
    this.createdAt = marketProduct.createdAt;
    this.updatedAt = marketProduct.updatedAt;
    this.product = marketProduct.product;
  }

  addSimilarProduct(product: Product) {
    this.similarProducts.push(product);
  }

  getId(): string {
    return this.id;
  }

  isProductExist(): boolean {
    return !!this.product;
  }
}
