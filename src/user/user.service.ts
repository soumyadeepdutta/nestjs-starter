import { Injectable } from '@nestjs/common';
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
  async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({ where: userWhereUniqueInput });
  }
}
