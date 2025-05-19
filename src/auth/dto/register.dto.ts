import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterAuthDto {
  @ApiProperty({ example: 'kimjon' })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({ example: 'kimjon@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({ example: 'pasWorD123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
