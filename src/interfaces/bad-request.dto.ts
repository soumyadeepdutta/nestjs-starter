import { ApiProperty } from '@nestjs/swagger';

export class BadRequestResponse {
  @ApiProperty({ default: 'The error message' })
  message: string;

  @ApiProperty({ default: 'Error Type' })
  error: string;

  @ApiProperty({ default: 'Error status code' })
  statusCode: number;
}
