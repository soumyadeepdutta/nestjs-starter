import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('/login')
  signIn(@Body() loginDto: Login) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
