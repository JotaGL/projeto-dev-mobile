import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module'; // Importando o UsersModule

@Module({
  imports: [UsersModule], // Adicionando o UsersModule
})
export class AppModule {}
