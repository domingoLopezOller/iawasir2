import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorDiseñaPractica } from './entities/profesor_diseña_practica.entity';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor_diseña_practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor_diseña_practica.dto';

@Injectable()
export class ProfesorDiseñaPracticaService {
  constructor(
    @InjectRepository(ProfesorDiseñaPractica)
    private profesorDisenaPracticaRepository: Repository<ProfesorDiseñaPractica>,
  ) {}

  create(createProfesorDisenaPracticaDto: CreateProfesorDiseñaPracticaDto) {
    const registro = this.profesorDisenaPracticaRepository.create(createProfesorDisenaPracticaDto);
    return this.profesorDisenaPracticaRepository.save(registro);
  }

  findAll() {
    return this.profesorDisenaPracticaRepository.find({ relations: ['profesor', 'practica'] });
  }

  findOne(profesorId: number, practicaId: number) {
    return this.profesorDisenaPracticaRepository.findOne({
      where: { profesorId, practicaId },
      relations: ['profesor', 'practica'],
    });
  }

  update(profesorId: number, practicaId: number, updateProfesorDisenaPracticaDto: UpdateProfesorDiseñaPracticaDto) {
    return this.profesorDisenaPracticaRepository.update({ profesorId, practicaId }, updateProfesorDisenaPracticaDto);
  }

  remove(profesorId: number, practicaId: number) {
    return this.profesorDisenaPracticaRepository.delete({ profesorId, practicaId });
  }
}