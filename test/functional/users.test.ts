import { User } from '@src/models/user';

describe('Users functional test', () => {
  beforeAll(async () => await User.deleteMany({}));
  describe('When creating a new user', () => {
    it('should successfully create a new user', async () => {
      const newUser = {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        password: '1234',
      };

      const response = await global.testRequest.post('/users').send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newUser));
    });
  });
});
