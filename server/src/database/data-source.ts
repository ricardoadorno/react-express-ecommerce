import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from '../entity/Product';
import DatabaseNamingStrategy from './utils/DatabaseNamingStrategy';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'ecommerce_db',
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations: [],
  subscribers: [],
  namingStrategy: new DatabaseNamingStrategy(),
});
