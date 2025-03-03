import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { Alumno } from 'nestapi/src/alumnos/entities/alumno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Alumno])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
