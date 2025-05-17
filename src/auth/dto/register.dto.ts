import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'kimjon' })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'kimjon@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'pasWorD123' })
  password: string;
}
