import express from 'express';
import 'dotenv/config';
import { dataSource } from './database/data-source';
import routes from './routes';
import cors from 'cors';

const api = express();

api.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

api.use(express.json());

dataSource.initialize().catch((error) => console.log(error));

api.use('/api', routes);

export default api;
