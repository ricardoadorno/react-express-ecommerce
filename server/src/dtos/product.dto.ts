import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Query } from 'typeorm/driver/Query';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;
}

export class GetProductDto {
  id: number;
  name: string;
  description: string;
  price: number;
}

export class QueryProductDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  price?: number;
}
