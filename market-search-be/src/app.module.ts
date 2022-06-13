import { Module } from '@nestjs/common';
import { MarketModule } from './market/market.module';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './market/database/database.module';

@Module({
  imports: [DatabaseModule, MarketModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
