import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/login.dto';
import { Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async create(
    @Body() createAuthDto: CreateAuthDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = await this.authService.create(createAuthDto);
      res.status(HttpStatus.CREATED).json({ status: 'Succes', data: user });
    } catch (error) {
      console.log(error);

      if (error.code == 23505)
        res.status(HttpStatus.BAD_REQUEST).json({
          status: 'Failed',
          message: "Username va  email unikal bo'lishi kerak",
        });

      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ status: 'Failed', message: error.message });
    }
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('login')
  async login(
    @Body() updateAuthDto: UpdateAuthDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      // const user = await this.authService.login(updateAuthDto);
      // res.status(HttpStatus.OK).json({ status: 'Succes', data: user });
    } catch (error) {
      console.log(error);

      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ status: 'Failed', message: error.message });
    }
  }
}
