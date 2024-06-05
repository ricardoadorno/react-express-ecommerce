import { Request, Response } from 'express';
import { Controller } from '../contracts/controller';
import ProductService from '../services/product.service';

export default class ProductController implements Controller {
  static async get(req: Request, res: Response) {
    res.send(await ProductService.getAllOrFilter(req.query));
  }

  static async getOne(req: Request, res: Response) {
    res.send(await ProductService.getOne(+req.params.id));
  }

  static async create(req: Request, res: Response) {
    await ProductService.create(req.body);

    res.status(201).send();
  }

  static async update(req: Request, res: Response) {
    await ProductService.update(+req.params.id, req.body);

    res.status(204).send();
  }

  static async remove(req: Request, res: Response) {
    await ProductService.remove(+req.params.id);

    res.status(204).send();
  }
}
