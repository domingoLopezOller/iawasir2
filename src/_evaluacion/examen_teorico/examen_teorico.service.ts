import { Injectable } from '@nestjs/common';
import { UpdateExamenTeoricoDto } from './dto/update-examen_teorico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamenTeorico } from './entities/examen_teorico.entity';
import { Repository } from 'typeorm';
import { CreateExamenTeoricoDto } from './dto/create-examen_teorico.dto';

@Injectable()
export class ExamenTeoricoService {
  constructor(
    @InjectRepository(ExamenTeorico)
    private examenTeoricoRepository: Repository<ExamenTeorico>,
  ) {}

  create(CreateExamenTeoricoDto: CreateExamenTeoricoDto) {
    const examenTeorico = this.examenTeoricoRepository.create(CreateExamenTeoricoDto);
    return this.examenTeoricoRepository.save(examenTeorico);
  }

  findAll() {
    return this.examenTeoricoRepository.find();
  }

  findOne(id: number) {
    return  this.examenTeoricoRepository.findOne({ where: { id }});
  }

  update(id: number, updateExamenTeoricoDto: UpdateExamenTeoricoDto) {
    return this.examenTeoricoRepository.update(id, updateExamenTeoricoDto);
  }

  remove(id: number) {
    return this.examenTeoricoRepository.delete(id);
  }
}
