import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonSchema } from './models/PokemonSchema';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserSchema } from './models/UserSchema';

const configuration = require('./config/configuration');

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://whosthatpokemon:ynov2020@cluster0-orjtp.gcp.mongodb.net/'+configuration.database.replace(/\s/g,"")+'?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
