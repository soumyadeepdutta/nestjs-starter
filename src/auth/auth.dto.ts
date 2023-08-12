import { ApiProperty } from '@nestjs/swagger';

/**
 * Login DTO
 */
export class Login {
  @ApiProperty({
    default: 'soumyadeep@yopmail.com',
    description: 'User unique email',
  })
  email: string;
  @ApiProperty({ default: '123456', description: 'User password' })
  password: string;
}
