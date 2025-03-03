import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {
  constructor(
  @InjectRepository(Alumno)
  private alumnoRepository: Repository<Alumno>
  ){}
  create(createAlumnoDto: CreateAlumnoDto) {
    const alumno=this.alumnoRepository.create(createAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }

  findAll() {
    return `This action returns all alumnos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
