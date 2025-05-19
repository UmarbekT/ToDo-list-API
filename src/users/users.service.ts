import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async findAll() {
    return await this.userRepo.find();
  }
  async refresh(token: string) {
    const user = await this.userRepo.findOne({
      where: { refreshToken: token },
    });
    return user;
  }

  findOne(id: number) {
    return this.userRepo.findOne({
      where: { id },
      select: ['email', 'password', 'role', 'username', 'id'],
    });
  }
  async validateUser(email: string, password: string) {
    try {
      const user = await this.userRepo.findOne({
        where: { email },
        select: ['email', 'password', 'role', 'username', 'id'],
      });
      if (!user) throw new NotFoundException('User topilmadi');

      console.log(user);

      const checking = await compare(password, user.password);
      console.log(checking);

      if (!checking) throw new BadRequestException('Parol xato');
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async updateUser(id: number, updateData: any) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    Object.assign(user, updateData);
    await this.userRepo.save(user);
    return user;
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
