import 'dotenv/config';
import { DataSource } from 'typeorm';

const devDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.TYPEORM_LOCAL_CLI_DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['**/**.entity{.ts,.js}'],
  migrations: ['./src/database/migrations/*.ts'],
  synchronize: true,
  logging: true,
});

export default devDataSource;
