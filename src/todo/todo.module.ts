import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';

@Module({
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: 'TodoRepository',
      useClass: Todo,
    },
  ],
})
export class TodoModule {}
