import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ example: 'Todo title' })
  @IsOptional()
  @IsString()
  title: string;
  @ApiProperty({ example: 'bu todo bir balo bir balo uhun qiliyabman' })
  @IsOptional()
  @IsString()
  description: string;
  @ApiProperty({ example: 'false' })
  @IsOptional()
  @IsString()
  completed: boolean;
  @ApiProperty({ example: '1' })
  @IsOptional()
  @IsString()
  userId: string;
}
