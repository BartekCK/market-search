import { DataSource } from 'typeorm';
import { config } from 'dotenv';

const dataSourceFactory = () => {
  if (process.env.NODE_ENV !== 'production') {
    config({
      path: process.env.NODE_ENV === 'test' ? `./.env.test` : undefined,
    });
  }

  return new DataSource({
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['**/**.entity{.ts,.js}'],
    migrations: ['./src/database/migrations/*.ts'],
    synchronize: true,
    logging: true,
  });
};

export default dataSourceFactory();
