import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}
  async create(createTodoDto: CreateTodoDto) {
    const dto = {
      ...createTodoDto,
      userId: Number(createTodoDto.userId),
    };
    const todo = this.todoRepository.create(dto);
    return await this.todoRepository.save(todo);
  }
  async findAllByUserId(userId: number) {
    return await this.todoRepository.find({
      where: { userId },
    });
  }
  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: number) {
    return await this.todoRepository.findOneBy({ id });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.todoRepository.update(id, updateTodoDto);
  }

  async remove(id: number) {
    return await this.todoRepository.delete(id);
  }
  async findByUserId(userId: number) {
    return await this.todoRepository.find({
      where: { userId },
    });
  }
}
