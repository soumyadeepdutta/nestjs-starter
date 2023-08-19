import { Controller, Post, HttpCode, Body, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './auth.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticatedRequest } from 'src/interfaces/authenticated-request';
import { AuthGuard } from './auth.guard';
import { Public } from './decorators/public.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Public()
  @Post('login')
  signIn(@Body() loginDto: Login) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('access_token')
  @Get('profile')
  getProfile(@Request() req: AuthenticatedRequest) {
    return req?.user;
  }
}
