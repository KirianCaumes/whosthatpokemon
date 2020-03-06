import { Injectable, Req, Param, Body } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Pokemon } from './entities/Pokemon';
const fs = require("fs");

@Injectable()
export class AppService {
  
  constructor(@InjectModel('Pokemon') private readonly pokemon : Model<Pokemon>, @InjectConnection() private readonly connection: Connection) {}

  async findAll() : Promise<Pokemon[]> {
    return this.pokemon.find().exec();
  }

  async findOnePokemon(@Param() id) : Promise<Pokemon> {
    return this.pokemon.findOne({id_pokemon:id});
  }

  async createPokemon(@Body() pokemon : Pokemon) : Promise<Pokemon> {
    return this.pokemon(pokemon).save();
  }

  async insertAllPokemon() {
    let arrayPokemon = JSON.parse(fs.readFileSync(__dirname + "/../src/data/all_data.json", "utf-8"))
    return this.pokemon.insertMany(arrayPokemon);
  }

  async updatePokemon(@Param() id, @Body() pokemon : Pokemon) : Promise<Pokemon> {
    return this.pokemon.findOneAndUpdate( {id_pokemon:id}, {$set: pokemon},  {upsert: false, new: true, useFindAndModify: false})
  }

  async deleteAllPokemon() : Promise<Pokemon> {
    return this.pokemon.deleteMany();
  }
}
