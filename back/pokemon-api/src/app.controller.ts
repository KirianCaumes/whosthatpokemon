import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './entities/Pokemon';

@Controller('api/pokemon/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAllPokemon() {
    return this.appService.findAll();
  }
  
  @Get(':id')
  async findOnePokemon(@Param() params) {
    return this.appService.findOnePokemon(params.id);
  }
  
  @Post('create')
  async createPokemon(@Body() pokemon : Promise<Pokemon>) {
    console.log(pokemon)
    return this.appService.createPokemon(await pokemon);
  }

  @Post('createALL')
  async createAllPokemon() {
    return this.appService.insertAllPokemon();
  }

  @Put('update/:id')
  async updatePokemon(@Param() params, @Body() pokemon : Pokemon) {
    return this.appService.updatePokemon(params.id,pokemon);
  }

  @Delete('deleteALL')
  async deleteALLPokemon() {
    return this.appService.deleteAllPokemon();
  }
}
