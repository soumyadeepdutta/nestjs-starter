import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get one user of matching condition
   * @param userWhereUniqueInput search condition like { email: 'john@example.com' }
   * @returns User object or null
   */
  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { email: email } });
  }

  /**
   * Creates a new user with unique email
   * @param data `{ firstname: '', lastname: '', email: '', password: ''}`
   * @returns 
   */
  async createUser(data: Prisma.UserCreateInput): Promise<User>{
    const existingUser = await this.getUserByEmail(data.email)
    if(existingUser) throw new BadRequestException('User alerady exists with this email')
    return this.prisma.user.create({data})
  }
}
