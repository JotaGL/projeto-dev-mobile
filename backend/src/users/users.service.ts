import { ConsoleLogger, Injectable } from '@nestjs/common';
import { User, PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async register(data: Prisma.UserCreateInput): Promise<User> {
    console.log(data);
    return this.prisma.user.create({
      data
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
