import { Module } from '@nestjs/common';
import { Market } from './entities/market.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketController } from './controllers/market.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  controllers: [MarketController],
})
export class MarketModule {}
