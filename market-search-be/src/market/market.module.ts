import { Module } from '@nestjs/common';
import { MarketEntity } from './database/entities/market.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketController } from './controllers/market.controller';
import { MarketService } from './services/market.service';
import { MarketRepository } from './database/repositories/market.repository';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([MarketEntity]), ProductModule],
  providers: [MarketService, MarketRepository],
  controllers: [MarketController],
})
export class MarketModule {}
