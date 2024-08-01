import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dtos/create_user.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return { user: 'user' };
  }

  @Post()
  async createUser(@Body() user: createUserDto) {
    console.log(user);
    return {
      ...user,
      password: undefined,
    };
  }
}
