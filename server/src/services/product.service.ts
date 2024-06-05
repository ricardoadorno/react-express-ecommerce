import { isEmpty } from 'class-validator';
import {
  CreateProductDto,
  QueryProductDto,
  UpdateProductDto,
} from '../dtos/product.dto';
import { Product } from '../entity/Product';
import ProductRepository from '../repositories/product.repository';

class ProductService {
  static async getAllOrFilter(query?: QueryProductDto) {
    if (isEmpty(query)) return await ProductRepository.findAll();

    return await ProductRepository.findByFilter(new Product(query));
  }

  static async getOne(id: number) {
    return await ProductRepository.findOne(id);
  }

  static async create(data: CreateProductDto) {
    return await ProductRepository.create(new Product(data));
  }

  static async update(id: number, data: UpdateProductDto) {
    return await ProductRepository.update(id, new Product(data));
  }

  static async remove(id: number) {
    return await ProductRepository.remove(id);
  }
}

export default ProductService;
