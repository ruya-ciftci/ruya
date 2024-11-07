import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service'; // Kullanıcı servisi

@Controller('users') 
// Bu dekoratör, UserController sınıfını bir HTTP isteklerini işlemek için kontrolör olarak tanımlar ve bu sınıfa /users rotasındaki istekleri yönlendirir.
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
