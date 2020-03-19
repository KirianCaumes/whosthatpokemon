import { Injectable, Body } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { User } from '../entities/User';
const fs = require("fs");

@Injectable()
export class UserService {

constructor(@InjectModel('User') private readonly user : Model<User>, @InjectConnection() private readonly connection: Connection) {}

  async findUser() : Promise<User[]> {
    return this.user.find().sort({score: -1}).limit(10).exec();
  }

  async insertUser(@Body() user : User) : Promise<User> {
    return this.user(user).save();
  }

  async deleteAllUsers(): Promise<User> {
    return this.user.deleteMany();
  }
}
