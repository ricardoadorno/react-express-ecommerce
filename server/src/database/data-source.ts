import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from '../entity/Product';
import DatabaseNamingStrategy from './utils/DatabaseNamingStrategy';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations: [],
  subscribers: [],
  namingStrategy: new DatabaseNamingStrategy(),
});
