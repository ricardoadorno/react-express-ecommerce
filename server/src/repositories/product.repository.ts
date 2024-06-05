import { dataSource } from '../database/data-source';
import { Product } from '../entity/Product';

const product = dataSource.getRepository(Product);

class ProductRepository {
  static async findAll() {
    return await product.find();
  }

  static async findByFilter(filter: Partial<Product>) {
    return await product.find({ where: filter });
  }

  static async findOne(id: number) {
    return await product.findOne({ where: { id } });
  }

  static async create(data: Product) {
    return await product.save(data);
  }

  static async update(id: number, data: Product) {
    return await product.update(id, data);
  }

  static async remove(id: number) {
    return await product.delete(id);
  }
}

export default ProductRepository;
