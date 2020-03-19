import { Controller, Get, Post, Body , Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/User';

@Controller('api/user/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async searchUser() {
    return this.userService.findUser();
  }

  @Post('insert')
  async createUser(@Body() user : Promise<User>) {
    return this.userService.insertUser(await user);
  }
  @Delete('deleteALL')
  async deleteALLUsers() {
    return this.userService.deleteAllUsers();
  }
}
