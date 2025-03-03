import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    ) {}
    async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
    }
    async create(name: string, email: string, password: string): Promise<User> {
    // const hashedPassword = await bcrypt.hash(password, 10); //
    const user = this.userRepository.create({
    name,
    email,
    password,
    });
    return this.userRepository.save(user);
    }
}
