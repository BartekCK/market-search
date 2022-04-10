import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from './env-config/services/env-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<EnvConfigService>(EnvConfigService);
  const { APP_PORT } = configService.getAppConfig();

  await app.listen(APP_PORT);
}
bootstrap();
