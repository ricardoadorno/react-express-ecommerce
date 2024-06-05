import express from 'express';
import 'dotenv/config';
import { dataSource } from './database/data-source';
import router from './routes';

const app = express();
app.use(express.json());

dataSource.initialize().catch((error) => console.log(error));

app.use(router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
