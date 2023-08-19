import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get one user of matching condition
   * @param email user email string
   * @param isSafe if false select the password column
   * @returns User object or null
   */
  async getUserByEmail(
    email: string,
    isSafe: boolean = true,
  ): Promise<User | null> {
    const user = await this.prisma.user.findFirst({ where: { email: email } });
    if (!isSafe) return user;
    delete user.password;
    return user;
  }

  /**
   * Creates a new user with unique email
   * @param data `{ firstname: '', lastname: '', email: '', password: ''}`
   * @returns
   */
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const existingUser = await this.getUserByEmail(data.email);
    if (existingUser)
      throw new BadRequestException('User alerady exists with this email');
    return this.prisma.user.create({ data });
  }
}
