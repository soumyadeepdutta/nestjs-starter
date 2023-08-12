import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/create-user.dto';
import { ApiResponse, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  @ApiCreatedResponse({
    status: 201,
    description: 'User created successfully.',
    type: User,
  })
  async createUser(@Body() createUserDto: User) {
    return this.userService.createUser(createUserDto);
  }
}
