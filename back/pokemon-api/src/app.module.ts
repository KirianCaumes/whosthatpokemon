import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './models/PokemonSchema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://whosthatpokemon:ynov2020@cluster0-orjtp.gcp.mongodb.net/whosthatpokemon?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
