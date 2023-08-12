import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/create-user.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { BadRequestResponse } from 'src/interfaces/bad-request.dto';

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
  @ApiBadRequestResponse({
    status: 400,
    description: 'Invalid data',
    type: BadRequestResponse,
  })
  async createUser(@Body() createUserDto: User) {
    return this.userService.createUser(createUserDto);
  }
}
