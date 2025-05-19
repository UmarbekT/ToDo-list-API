import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
