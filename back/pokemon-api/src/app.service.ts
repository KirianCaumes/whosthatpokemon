import { Injectable, Req, Param, Body } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Pokemon } from './entities/Pokemon';

@Injectable()
export class AppService {
  
  constructor(@InjectModel('Pokemon') private readonly pokemon : Model<Pokemon>, @InjectConnection() private readonly connection: Connection) {}

  async findAll() : Promise<Pokemon[]> {
    return this.pokemon.find().exec();
  }

  async findOnePokemon(@Param() id) : Promise<Pokemon> {
    console.log(`This action returns a #${id} pokemon`);
    return this.pokemon.findOne({_id_pokemon:id});
  }

  async createPokemon(@Body() pokemon : Pokemon) : Promise<Pokemon> {
    return this.pokemon(pokemon).save();
  }

  async insertAllPokemon() : Promise<Pokemon> {
    let arrayPokemon = [{
      "_id_pokemon": 2,
      "name": {
          "Fr": "Gurtchoin",
          "En": "gurbitch",
          "SP": "gurputa",
          "DE": "gurFURHER"
      },
      "generation": 1,
      "enable": true
  },
  {
      "name": {
          "Fr": "MaxiCoronavirus",
          "En": "MaxiCoronavirusShit",
          "SP": "MaxiCoronavirusDansKinderSurprise",
          "DE": "MaxiCoronavirusFURHER"
      },
      "_id_pokemon": 1,
      "generation": 1,
      "enable": true
  },
  {
    "name": {
        "Fr": "Antchoin",
        "En": "LA JACK DANS LE GOSIER",
        "SP": "Anthonio Escobar",
        "DE": "Mein kampf"
    },
    "_id_pokemon": 3,
    "generation": 1,
    "enable": true,
  }]
    return this.pokemon.insertMany(arrayPokemon);
  }

  async updatePokemon(@Param() id, @Body() pokemon : Pokemon) : Promise<Pokemon> {
    return this.pokemon.findOneAndUpdate( {_id_pokemon:id}, {$set: pokemon},  {upsert: false, new: true, useFindAndModify: false})
  }

  async deleteAllPokemon() : Promise<Pokemon> {
    return this.pokemon.deleteMany();
  }
}
