import { Module } from '@nestjs/common';
import { EnvConfigService } from './services/env-config.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { configEnvValidator } from './utils/config-env.validator';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validate: configEnvValidator,
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : undefined,
      ignoreEnvFile: process.env.NODE_ENV === 'production' ? true : false,
    }),
  ],
  providers: [EnvConfigService],
  exports: [EnvConfigService],
})
export class EnvConfigModule {}
