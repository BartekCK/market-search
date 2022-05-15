import { Controller, Get, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketEntity } from '../database/entities/market.entity';
import { Repository } from 'typeorm';
import { MarketService } from '../services/market.service';

@Controller('markets')
export class MarketController {
  constructor(
    @InjectRepository(MarketEntity)
    private marketRepository: Repository<MarketEntity>,
    private readonly marketService: MarketService,
  ) {}

  @Get('/')
  async getAllMarkets(): Promise<MarketEntity[]> {
    return this.marketRepository.find();
  }

  @Get('/products')
  async getMarketProduct(
    @Query('productName') productName: string,
  ): Promise<any[]> {
    return this.marketService.getMarketProduct(productName);
  }
}
