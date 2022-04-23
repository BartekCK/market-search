import { Controller, Get, Query } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async searchProducts(
    @Query('search') name: string,
  ): Promise<{ name: string }[]> {
    return this.productService.search(name);
  }
}
