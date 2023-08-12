import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  /**
   * Logs in a user
   * @param email user email
   * @param password user password
   * @returns user details if valid
   */
  async login(email: string, password: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email);
    if (!user || user?.password !== password)
      throw new BadRequestException('Invalid Email or Password!');
    return user;
  }
}
