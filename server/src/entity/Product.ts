import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GetProductDto } from '../dtos/product.dto';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }

  static toViewDto(product: Product): GetProductDto {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
    };
  }
}
