import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.usersService.register(name, email, password);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException('E-mail ou senha inválidos', HttpStatus.UNAUTHORIZED);
    }

    return { message: 'Login bem-sucedido', userId: user.id };
  }
}
