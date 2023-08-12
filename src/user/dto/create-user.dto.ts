import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ default: 'Soumyadeep', description: 'First name of user' })
  firstname: string;

  @ApiProperty({ default: 'Dutta', description: 'Last name of user' })
  lastname: string;

  @ApiProperty({
    default: 'soumyadeep@yopmail.com',
    description: 'Unique email of the user',
  })
  email: string;

  @ApiProperty({
    default: '123456',
    description: 'Secure password',
    minLength: 6,
    maxLength: 16,
  })
  password: string;
}
