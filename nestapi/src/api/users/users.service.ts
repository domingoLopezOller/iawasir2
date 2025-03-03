import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository:UserRepository,
    private userRepositor2:Repository<User>,
  ){}

  create(CreateUserDto: CreateUserDto) {
    return this.userRepository.findByUsername
    return 'This action adds a new user'
  }
  findAll(){
    return `This action returns all users`;
  }
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } }); // Find by ID
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`); // Handle not found
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto); // Update the user
    return this.findOne(id); // Return the updated user
  }

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
