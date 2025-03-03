import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from '../autor/entities/autor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Autor], 'base2')],
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
