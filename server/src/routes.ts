import { Router } from 'express';
import ProductController from './controllers/product.controller';
import { validateRequest } from './middlewares/validateRequest';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto';

const router = Router();

router.get('/product', ProductController.get);
router.get('/product/:id', ProductController.getOne);
router.post(
  '/product',
  validateRequest(CreateProductDto),
  ProductController.create
);
router.put(
  '/product/:id',
  validateRequest(UpdateProductDto),
  ProductController.update
);
router.delete('/product/:id', ProductController.remove);

export default router;
