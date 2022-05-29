import { MarketProduct, MarketSimilarProductInterface } from '../domain/market';
import { ProductDto } from '../../product/dto/product.dto';

export class MarketProductDto {
  id: string;

  name: string;

  lineOne: string;

  lineTwo?: string;

  city: string;

  zipCode: string;

  product: ProductDto | null = null;

  similarProducts: ProductDto[] = [];

  private constructor(details: MarketSimilarProductInterface) {
    this.id = details.id;
    this.name = details.name;
    this.lineOne = details.lineOne;
    this.lineTwo = details.lineTwo;
    this.city = details.city;
    this.zipCode = details.zipCode;
  }

  private addSimilarProduct(product: ProductDto) {
    this.similarProducts.push(product);
  }

  private setProduct(product: ProductDto) {
    this.product = product;
  }

  static create(marketProduct: MarketProduct): MarketProductDto {
    const marketProductDto = new MarketProductDto(marketProduct.getDetails());

    const { product, similarProducts } = marketProduct.getDetails();

    if (product) {
      marketProductDto.setProduct(ProductDto.create(product));
    }

    if (similarProducts.length) {
      similarProducts.forEach((product) => {
        marketProductDto.addSimilarProduct(ProductDto.create(product));
      });
    }

    return marketProductDto;
  }
}
