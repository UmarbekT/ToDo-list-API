import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) private userService: UsersService,
    @Inject(forwardRef(() => JwtService)) private jwtService: JwtService,
  ) {}

  async create(data: any) {
    const user = await this.userService.create(data);
    return user;
  }
  async refresh(token: string): Promise<{ user: any; access: string }> {
    const user: any = await this.userService.refresh(token);
    if (!user) throw new Error('User not found');
    const access = await this.jwtService.signAsync({
      id: user.id,
      role: user.role,
      username: user.username,
    });
    return { user, access };
  }
  async login(
    loginData: LoginAuthDto,
  ): Promise<{ user: any; token: string; refreshToken: string }> {
    console.log(loginData);
    const user: any = await this.userService.validateUser(
      loginData.email,
      loginData.password,
    );
    const token = await this.jwtService.signAsync({
      id: user.id,
      role: user.role,
      email: user.email,
    });
    console.log(await this.jwtService.verifyAsync(token));

    const refreshToken = await this.jwtService.sign(
      {
        id: user.id,
        role: user.role,
        email: user.email,
      },
      { secret: process.env.REFRESH_TOKEN_SECRET, expiresIn: '7d' },
    );
    await this.userService.updateUser(user.id, { refreshToken: refreshToken });

    return { user, token, refreshToken };
  }
}
