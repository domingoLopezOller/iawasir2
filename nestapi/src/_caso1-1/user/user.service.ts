import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Profile } from "../profile/entities/profile.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
 constructor(
 @InjectRepository(User)
 private readonly userRepository: Repository<User>,
 @InjectRepository(Profile)
 private readonly profileRepository: Repository<Profile>,
 ) {}
 async create(createUserDto: CreateUserDto): Promise<User> {
 const { profile, ...userData } = createUserDto;
 const newProfile = this.profileRepository.create(profile);
 await this.profileRepository.save(newProfile);
 const user = this.userRepository.create({ ...userData, profile: newProfile });
 return this.userRepository.save(user);
 }
 async findAll(): Promise<User[]> {
 return this.userRepository.find({ relations: ['profile'] });
 }
 async findOne(id: number): Promise<User> {
 const user = await this.userRepository.findOne({ where: { id }, relations: ['profile'] });
 if (!user) throw new NotFoundException(`User with id ${id} not found`);
 return user;
 }
 async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
 const user = await this.findOne(id);
 Object.assign(user, updateUserDto);
 return this.userRepository.save(user);
 }
 async remove(id: number): Promise<void> {
 const result = await this.userRepository.delete(id);
 if (result.affected === 0) throw new NotFoundException(`User with id ${id} not found`);
 }
}