import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private profesorRepository: Repository<Profesor>,
  ) {}

  create(createProfesorDto: CreateProfesorDto) {
    const profesor = this.profesorRepository.create(createProfesorDto);
    return this.profesorRepository.save(profesor);
  }

  findAll() {
    return this.profesorRepository.find();
  }

  findOne(id: number) {
    return this.profesorRepository.findOne({ where: { id } });
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return this.profesorRepository.update(id, updateProfesorDto);
  }

  remove(id: number) {
    return this.profesorRepository.delete(id);
  }
}
