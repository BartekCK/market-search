import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfigModule } from './env-config/env-config.module';
import { EnvConfigService } from './env-config/services/env-config.service';
import { MarketModule } from './market/market.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvConfigModule],
      inject: [EnvConfigService],
      useFactory: (envConfigService: EnvConfigService) => {
        return envConfigService.databaseConfig();
      },
    }),
    MarketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
