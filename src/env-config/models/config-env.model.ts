import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class ConfigEnvModel {
  @IsInt()
  @Type(() => Number)
  APP_PORT: number;

  @IsString()
  APP_HOST: string;

  @IsString()
  DB_NAME: string;

  @IsNumber()
  @Type(() => Number)
  DB_PORT: number;

  @IsString()
  DB_HOST: string;

  @IsString()
  DB_USERNAME: string;

  @IsString()
  DB_PASSWORD: string;

}
