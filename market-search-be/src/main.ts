import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from './env-config/services/env-config.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService = app.get<EnvConfigService>(EnvConfigService);
  const { APP_PORT } = configService.getAppConfig();

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidNonWhitelisted: true }),
  );

  await app.listen(APP_PORT);
}
bootstrap();
