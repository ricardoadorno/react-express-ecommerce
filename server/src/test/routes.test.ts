import request from 'supertest';
import api from '../api';

let server;
beforeEach(() => {
  server = api.listen(4000);
});

afterEach((done) => {
  server.close(done);
});

describe('GET /product', () => {
  it('should return 200', async () => {
    await request(api).get('/teste').expect(200);
  });
});
