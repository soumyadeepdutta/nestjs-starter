import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: 'abcd',
    signOptions: {expiresIn: '1d'}
  })],
  providers: [AuthService, {provide: APP_GUARD, useClass: AuthGuard}],
  controllers: [AuthController],
})
export class AuthModule {}
