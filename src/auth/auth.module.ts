import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  // imports: [UserModule],
  providers: [AuthService, UserService, PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
