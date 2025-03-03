import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
 constructor(private readonly usersService: UsersService) {}
 @Post()
 create(@Body() createUserDto: CreateUserDto) {
 return this.usersService.create(createUserDto);
 }
 @Get()
 findAll() {
 return this.usersService.findAll();
 }
 @Get(':id')
 findOne(@Param('id') id: string) {
 return this.usersService.findOne(+id);
 }
 @Put(':id')
 update(@Param('id') id: string, @Body() updateUserDto:
UpdateUserDto) {
 return this.usersService.update(+id, updateUserDto);
 }
 @Delete(':id')
 remove(@Param('id') id: string) {
 return this.usersService.remove(+id);}
}