import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
 constructor(
 @InjectRepository(User,'base2')
 private userRepository: Repository<User>,
 ) {}
 async create(createUserDto: CreateUserDto): Promise<User> {
 const user = this.userRepository.create(createUserDto);
 return this.userRepository.save(user);
 }
 async findAll(): Promise<User[]> {
 return this.userRepository.find();
 }
 async findOne(id: number): Promise<User> {
 const user = await this.userRepository.findOne({ where: { id }, relations: ['posts'] });
 if (!user) {
 throw new NotFoundException(`User with ID "${id}" not found`);
 }
 return user;
 }
 async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
 const user = await this.findOne(id);
 this.userRepository.merge(user, updateUserDto);
 return this.userRepository.save(user);
 }
 async remove(id: number): Promise<void> {
 const user = await this.findOne(id);
 await this.userRepository.remove(user);
 }
}