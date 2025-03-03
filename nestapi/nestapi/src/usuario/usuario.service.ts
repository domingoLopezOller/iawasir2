import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioDto } from './dto/usuarioDto';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService{
 constructor(  
 @InjectRepository(Usuario)
 private usuarioRepository: Repository<Usuario>,
 ) {}
 async create(CreateUsuarioDto: CreateUsuarioDto) {
 const usuario = this.usuarioRepository.create(CreateUsuarioDto);
 return this.usuarioRepository.save(usuario);
 }
 async findAll(): Promise<Usuario[]> {
 return this.usuarioRepository.find();
 }
 async findOne(id: number): Promise<Usuario> {
 const usuario = await this.usuarioRepository.findOne({ where: { id } });
 if (!usuario) {
 throw new NotFoundException(`Usuario con ID ${id} no encontrado`);}
 return usuario;
 }

 async update(id: number, usuarioDto: UsuarioDto): Promise<Usuario> {
 const usuario = await this.findOne(id);
 this.usuarioRepository.merge(usuario, usuarioDto);
 return this.usuarioRepository.save(usuario);
 }
 async remove(id: number){
    return `This action removes a #${id} usuario`;
 }
 async findByEmail(email: string): Promise<Usuario | undefined> {
 return this.usuarioRepository.findOne({ where: { email } });
 }
 async activateUser(id: number): Promise<Usuario> {
  const usuario=await this.usuarioRepository.findOne({where:{id}});
  return await this.usuarioRepository.save(usuario);
 }
 async deactivateUser(id: number): Promise<Usuario> {
   const usuario=await this.usuarioRepository.findOne({where:{id}});
  return await this.usuarioRepository.save(usuario);
 }
}
