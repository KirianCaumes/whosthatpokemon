import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import * as request from 'supertest';

describe('AppController CRUD', () => {
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

    await request(server).delete('/api/pokemon/deleteALL').set('Accept', 'application/json')
  },30000);

  test('GET all pokemons', async () => {
    await request(server).post('/api/pokemon/createALL')
    await request(server).get('/api/pokemon/').expect(({ body }) => body.length === 890);
  },30000);


  test('GET a pokemon', async () => {
    await request(server).post('/api/pokemon/createALL')
    await request(server).get('/api/pokemon/1').expect(({ body }) => body.id_pokemon === 1);
  },30000);

  test('GET a pokemon by gens', async () => {
    const intNames = ['one','two','three','four', 'five','six','seven']
    for (let i = 1; i < 8; i++) {
      await request(server).get(`/api/pokemon/random?${intNames[i-1]}=true&`).expect(({ body }) => body.generation === i);      
    }
      
  },30000);

  test('UPDATE a pokemon', async () => {
    let monPokemon = {
      "id_pokemon": 1,
      "name": {
        "fr": "Bulbizarre",
        "en": "Bulbasaur",
        "de": "Bisasam",
        "ja": "フシギダネ",
        "ko": "이상해씨",
        "ru": "Бульбазавр",
        "zh-hans": "妙蛙种子",
        "zh-hant": "妙蛙種子"
      },
      "generation": 1,
      "enable": true
    };

    await request(server)
      .post('/api/pokemon/create')
      .send(monPokemon)

    monPokemon = {
      "id_pokemon": 1,
      "name": {
        "fr": "BOOOM",
        "en": "BOOOM",
        "de": "BOOMM",
        "ja": "BOOOM",
        "ko": "BOOOM",
        "ru": "BOOOM",
        "zh-hans": "BOOOM",
        "zh-hant": "BOOOM"
      },
      "generation": 1,
      "enable": true
    };
    await request(server)
      .put('/api/pokemon/update/1')
      .send(monPokemon)
      .expect(({ body }) => body.name === monPokemon.name);


  },30000);

  test('CREATE a pokemon', async () => {
    const monPokemon = {
      "id_pokemon": 1,
      "name": {
        "fr": "Bulbizarre",
        "en": "Bulbasaur",
        "de": "Bisasam",
        "ja": "フシギダネ",
        "ko": "이상해씨",
        "ru": "Бульбазавр",
        "zh-hans": "妙蛙种子",
        "zh-hant": "妙蛙種子"
      },
      "generation": 1,
      "enable": true
    };
    await request(server)
      .post('/api/pokemon/create')
      .send(monPokemon)
      .expect(({ body }) => body.name === monPokemon.name);
  },30000);

  test('CREATE pokemons', async () => {
    await request(server).post('/api/pokemon/createALL')
    await request(server).get('/api/pokemon/').expect(({ body }) => body.length === 890);
  },30000);

  test('DELETE a pokemon', async () => {
    const monPokemon = {
      "id_pokemon": 1,
      "name": {
        "fr": "Bulbizarre",
        "en": "Bulbasaur",
        "de": "Bisasam",
        "ja": "フシギダネ",
        "ko": "이상해씨",
        "ru": "Бульбазавр",
        "zh-hans": "妙蛙种子",
        "zh-hant": "妙蛙種子"
      },
      "generation": 1,
      "enable": true
    };
    await request(server)
      .post('/api/pokemon/create')
      .send(monPokemon)
      .expect(({ body }) => body.name === monPokemon.name);

    await request(server).delete('/api/pokemon/delete/1')

    await request(server).get('/api/pokemon/').expect(({ body }) => body.length === 0);
  },30000);

  afterAll(async () => {
    await request(server).delete('/api/pokemon/deleteALL').set('Accept', 'application/json')
    await request(server).post('/api/pokemon/createALL')
  },30000);
});
