import ProductController from '../../controllers/product.controller';
import ProductService from '../../services/product.service';

describe.skip('Product', () => {
  it('shoud list all products', () => {
    jest.spyOn(ProductService, 'getAllOrFilter').mockResolvedValueOnce([
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
      },
    ]);
  });
});
