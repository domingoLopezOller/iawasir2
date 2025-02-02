import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario], "base2")],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
