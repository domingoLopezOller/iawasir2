import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
  @Get('email/:email')
  async findByEmail (@Param('email') email: string): Promise<Usuario>{
   const usuario = await this.usuarioService.findByEmail(email);
   if(!usuario){
    throw new NotFoundException(`Usuario con email ${email} no encontrado`)
   }
   return usuario;
  }
  @Put(':id/activate')
  async activateUser(@Param('id') id: string): Promise<Usuario> {
    return await this.usuarioService.activateUser(+id);
  }
  @Put(':id/deactivate')
  async deactivateUser(@Param('id') id: string): Promise<Usuario> {
    return await this.usuarioService.deactivateUser(+id);
  }
  
}
