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

export interface MarketSimilarProductInterface extends MarketProductInterface {
  similarProducts: Product[];
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

  getDetails(): MarketSimilarProductInterface {
    return {
      id: this.id,
      name: this.name,
      lineOne: this.lineOne,
      lineTwo: this.lineTwo,
      city: this.city,
      zipCode: this.zipCode,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      product: this.product,
      similarProducts: this.similarProducts,
    };
  }
}
