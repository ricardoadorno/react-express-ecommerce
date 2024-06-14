import { Product } from '../../entity/Product';

describe.skip('Product', () => {
  it('should create the entity', () => {
    const product = {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    expect(new Product(product)).toEqual(expect.objectContaining(product));
  });

  it('should create the view dto', () => {
    const product = new Product({
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const viewDto = Product.toViewDto(product);

    expect(viewDto).toEqual({
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    });
  });
});
