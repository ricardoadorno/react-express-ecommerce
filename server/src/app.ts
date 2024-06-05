import express from 'express';
import 'dotenv/config';
import { dataSource } from './database/data-source';
import router from './routes';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use(express.json());

dataSource.initialize().catch((error) => console.log(error));

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
