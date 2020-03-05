import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Pretender from 'pretender';
const factory = require('factory-girl').factory;
const Pokemon = require('./models/PokemonSchema');

var reponse =  JSON.stringify([
  {
      "name": {
          "Fr": "Gurtchoin",
          "En": "gurbitch",
          "SP": "gurputa",
          "DE": "gurFURHER"
      },
      "_id": "5e46bbaab71b914c582fa1f8",
      "_id_pokemon": 2,
      "generation": 1,
      "enable": true,
      "__v": 0
  },
  {
      "name": {
          "Fr": "MaxiCoronavirus",
          "En": "MaxiCoronavirusShit",
          "SP": "MaxiCoronavirusDansKinderSurprise",
          "DE": "MaxiCoronavirusFURHER"
      },
      "_id": "5e46bbaab71b914c582fa1f9",
      "_id_pokemon": 1,
      "generation": 1,
      "enable": true,
      "__v": 0
  },
  {
      "name": {
          "Fr": "Antchoin",
          "En": "LA JACK DANS LE GOSIER",
          "SP": "Anthonio Escobar",
          "DE": "Mein kampf"
      },
      "_id": "5e46bbaab71b914c582fa1fa",
      "_id_pokemon": 3,
      "generation": 1,
      "enable": true,
      "__v": 0
  }
]);


const server = new Pretender(function() {
  this.get('/api/pokemon/', request => {
    
    return [200, {"Content-Type": "application/json"}, reponse]
  });

  this.get('/photos/:id', request => {
    return [200, {"Content-Type": "application/json"}, ""]
  });
});

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {

  });
});
