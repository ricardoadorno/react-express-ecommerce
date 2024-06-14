import { Router } from 'express';
import ProductController from './controllers/product.controller';
import { validateRequest } from './middlewares/validateRequest';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto';

const routes = Router();

routes.get('/product', ProductController.get);
routes.get('/product/:id', ProductController.getOne);
routes.post(
  '/product',
  validateRequest(CreateProductDto),
  ProductController.create
);
routes.put(
  '/product/:id',
  validateRequest(UpdateProductDto),
  ProductController.update
);
routes.delete('/product/:id', ProductController.remove);

export default routes;
