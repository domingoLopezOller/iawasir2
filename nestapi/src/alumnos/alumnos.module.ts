import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Prueba } from './entities/prueba.entities';

@Module({
  imports:[TypeOrmModule.forFeature([Alumno,Prueba])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
