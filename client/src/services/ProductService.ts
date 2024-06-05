import http from './api/http';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const getAll = async (): Promise<Product[]> => {
  const { data } = await http.get<Product[]>('product');

  return data;
};

const getOne = async (id: number): Promise<Product> => {
  const { data } = await http.get<Product>(`product/${id}`);

  return data;
};

const create = async (product: Product): Promise<Product> => {
  const { data } = await http.post<Product>('product', product);

  return data;
};

const update = async (product: Product): Promise<Product> => {
  const { data } = await http.put<Product>(`product/${product.id}`, product);

  return data;
};

const remove = async (id: number): Promise<void> => {
  await http.delete(`product/${id}`);
};

export const ProductService = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
