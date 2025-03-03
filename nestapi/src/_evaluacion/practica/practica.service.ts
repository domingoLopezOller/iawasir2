import { Injectable } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private practicaRepository: Repository<Practica>,
  ) {}
  create(createPracticaDto: CreatePracticaDto) {
    const practica = this.practicaRepository.create(createPracticaDto);
    return this.practicaRepository.save(practica);
  }

  findAll() {
    return this.practicaRepository.find();
  }

  findOne(id: number) {
    return this.practicaRepository.findOne({ where: { id } });
  }

  update(id: number, updatePracticaDto: UpdatePracticaDto) {
    return this.practicaRepository.update(id, updatePracticaDto);
  }

  remove(id: number) {
    return this.practicaRepository.delete(id);
  }
}
