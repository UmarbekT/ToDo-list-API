import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: 'config.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      database: 'todolist',
      port: 5432,
      host: 'localhost',
      password: '0809iccs',
      synchronize: true,
      entities: [User],
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
