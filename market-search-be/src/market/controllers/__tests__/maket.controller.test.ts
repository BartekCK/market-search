import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MarketController } from '../market.controller';
import { MarketEntity } from '../../database/entities/market.entity';
import { MarketService } from '../../services/market.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('MarketController', () => {
  let app: INestApplication;
  let marketController: MarketController;

  const marketService = {
    getMarketProduct: jest.fn(),
  };

  const marketRepository = {
    find: jest.fn(() => []),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: MarketService, useValue: marketService },
        {
          provide: getRepositoryToken(MarketEntity),
          useValue: marketRepository,
        },
      ],
      controllers: [MarketController],
    }).compile();

    marketController = moduleRef.get<MarketController>(MarketController);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(marketController).toBeDefined();
  });

  it('when getAllMarkets', async () => {
    expect(await marketController.getAllMarkets()).toEqual([]);
  });

  it('when getMarketProduct', async () => {
    jest.spyOn(marketService, 'getMarketProduct').mockResolvedValue([]);

    expect(await marketController.getMarketProduct('productName')).toEqual([]);
  });
});
