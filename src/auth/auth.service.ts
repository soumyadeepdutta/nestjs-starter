import { BadRequestException, Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Request } from '@nestjs/common/decorators';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * Logs in a user
   * @param email user email
   * @param password user password
   * @returns user details if valid
   */
  async login(email: string, password: string): Promise<Object> {
    const user = await this.userService.getUserByEmail(email, false);
    if (!user || user?.password !== password)
      throw new BadRequestException('Invalid Email or Password!');
    return {
      access_token: await this.jwtService.signAsync(
        { email: user?.email, id: user?.id, firstname: user?.firstname },
      ),
    };
  }
}
