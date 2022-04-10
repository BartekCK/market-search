import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from '../entities/market.entity';
import { Repository } from 'typeorm';

@Controller('markets')
export class MarketController {
  constructor(
    @InjectRepository(Market) private addressRepository: Repository<Market>,
  ) {}

  @Get('/')
  async getAllMarkets(): Promise<Market[]> {
    return this.addressRepository.find();
  }
}
