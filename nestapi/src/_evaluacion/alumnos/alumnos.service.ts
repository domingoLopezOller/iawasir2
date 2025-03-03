import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ) {}


  create(createAlumnoDto: CreateAlumnoDto) {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    return this.alumnoRepository.save(alumno) ;
  }


  findAll() {
    return this.alumnoRepository.find();
  }


  findOne(id: number) {
    return this.alumnoRepository.findOne({ where: {id} });
  }


  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoRepository.update(id, updateAlumnoDto) ;
  }


  remove(id: number) {
    return this.alumnoRepository.delete(id);
  }
}


