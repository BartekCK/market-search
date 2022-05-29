import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async searchProducts(
    @Query('search') name: string,
  ): Promise<{ name: string; lowestPrice: number }[]> {
    return this.productService.search(name);
  }
}
