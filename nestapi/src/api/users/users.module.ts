import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([User,UserRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
