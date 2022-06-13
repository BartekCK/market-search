import { Injectable } from '@nestjs/common';
import { ConfigEnvModel } from '../models/config-env.model';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

@Injectable()
export class EnvConfigService extends ConfigService {
  public getAppConfig(): Pick<ConfigEnvModel, 'APP_PORT' | 'APP_HOST'> {
    return {
      APP_PORT: this.get('APP_PORT'),
      APP_HOST: this.get('APP_HOST'),
    };
  }

  public databaseConfig(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'postgres',
      host: this.get<string>('DB_HOST'),
      port: this.get<number>('DB_PORT'),
      username: this.get<string>('DB_USERNAME'),
      password: this.get<string>('DB_PASSWORD'),
      database: this.get<string>('DB_NAME'),
      entities: ['**/*.entity{ .ts,.js}'],
      migrations: [`${path.join(__dirname, '../../database/migrations/*.ts')}`],
      autoLoadEntities: true,
    };
  }
}
