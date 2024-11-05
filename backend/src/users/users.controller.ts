import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {} // Use 'readonly' for dependency injection

  @Post('register')
  async register(@Body() userData: { name: string; email: string; password: string }) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userData.password, salt, async (err, hash) => {
        userData.password = hash;
        return this.appService.register(userData);
      });
})
  }

  @Post('login')
  async login(@Body() userData: { email: string; password: string }) {
    const user = await this.appService.findByEmail(userData.email); 
    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password); 
    if (!isPasswordValid) {
      throw new HttpException('E-mail ou senha inválidos', HttpStatus.UNAUTHORIZED);
    }

    return { message: 'Login bem-sucedido', userId: user.id };
  }
}
