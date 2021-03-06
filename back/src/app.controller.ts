import { Controller, Get, Post, Param, Body, Delete, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './entities/Pokemon';

@Controller('api/pokemon/')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async findAllPokemon() {
    return this.appService.findAll();
  }

  @Get('random')
  async findOneRandomPokemon(@Query('one') one: string, @Query('two') two: string, @Query('three') three: string, @Query('four') four: string, @Query('five') five: string, @Query('six') six: string, @Query('seven') seven: string) {
    let gen = []
    if (one && one === "true") gen.push(1)
    if (two && two === "true") gen.push(2)
    if (three && three === "true") gen.push(3)
    if (four && four === "true") gen.push(4)
    if (five && five === "true") gen.push(5)
    if (six && six === "true") gen.push(6)
    if (seven && seven === "true") gen.push(7)
    const pkmn = await this.appService.findAllPokemonByGens(gen);

    return pkmn[Math.round(Math.random() * (pkmn.length - 1))];
  }

  @Get(':id')
  async findOnePokemon(@Param() params) {
    return this.appService.findOnePokemon(params.id);
  }

  @Post('create')
  async createPokemon(@Body() pokemon: Promise<Pokemon>) {
    return this.appService.createPokemon(await pokemon);
  }

  @Post('createALL')
  async createAllPokemon() {
    return this.appService.insertAllPokemon();
  }

  @Put('update/:id')
  async updatePokemon(@Param() params, @Body() pokemon: Pokemon) {
    return this.appService.updatePokemon(params.id, pokemon);
  }

  @Delete('deleteALL')
  async deleteALLPokemon() {
    return this.appService.deleteAllPokemon();
  }
}
