import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import * as request from 'supertest';

describe('User Controller', () => {
  let app;
  let server;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = await module.createNestApplication();

    server = app.getHttpServer();
    app.init();

    jest.setTimeout(30000)

    await request(server).delete('/api/user/deleteALL').set('Accept', 'application/json')
  },30000);

  test('GET users list', async () => {
    await request(server)
      .get('/api/user/list')
      .expect(({ body }) => body.length != 0);
  },30000);

  test('POST a user', async () => {
    const myUser = {
      "score": 5854,
      "date": "12/03/2020",
      "name": "Micka",
      "gens": {
          "one": true,
          "two": true,
          "three": true,
          "four": true,
          "five": true,
          "six": true,
          "seven": true,
        },
      };
    await request(server)
      .post('/api/user/insert')
      .send(myUser)
      .expect(({ body }) => body.name === myUser.name);
  },30000);

});
