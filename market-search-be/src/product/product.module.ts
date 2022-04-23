import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers/product.controller';
import { Product } from './entities/product.entity';
import { ProductRepository } from './repositories/product.repository';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
})
export class ProductModule {}
