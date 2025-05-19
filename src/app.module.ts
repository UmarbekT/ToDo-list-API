import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { GraphqlModule } from './graphql/graphql.module';

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
    TodoModule,
    GraphqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
