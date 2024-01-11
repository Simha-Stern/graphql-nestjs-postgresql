import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/user.entity';
import { UserType } from './dto/schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly  userRepository: Repository<Users>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<UserType> {
    const newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }
  

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    await this.userRepository.update(id, updateUserInput);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected > 0;
  }
}
