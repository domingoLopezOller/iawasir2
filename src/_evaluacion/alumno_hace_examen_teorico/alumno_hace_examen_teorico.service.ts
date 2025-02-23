import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno_hace_examen_teorico.dto';
import { AlumnoHaceExamenTeorico } from './entities/alumno_hace_examen_teorico.entity';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno_hace_examen_teorico.dto';

@Injectable()
export class AlumnoHaceExamenTeoricoService {
  constructor(
    @InjectRepository(AlumnoHaceExamenTeorico)
    private alumnoHaceExamenTeoricoRepository: Repository<AlumnoHaceExamenTeorico>,
  ) {}

  // Crear un nuevo registro de alumno que hace un examen teórico
  create(createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto) {
    const registro = this.alumnoHaceExamenTeoricoRepository.create(createAlumnoHaceExamenTeoricoDto);
    return this.alumnoHaceExamenTeoricoRepository.save(registro);
  }

  // Obtener todos los registros de alumnos que hacen exámenes teóricos
  findAll() {
    return this.alumnoHaceExamenTeoricoRepository.find({ relations: ['alumno', 'examen'] });
  }

  // Obtener un registro específico por alumnoId y examenId
  findOne(alumnoId: number, examenteoricoId: number) {
    return this.alumnoHaceExamenTeoricoRepository.findOne({
      where: { alumnoId, examenteoricoId },
      relations: ['alumno', 'examen'],
    });
  }

  // Actualizar un registro específico por alumnoId y examenId
  update(alumnoId: number, examenteoricoId: number, updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoRepository.update({ alumnoId, examenteoricoId }, updateAlumnoHaceExamenTeoricoDto);
  }

  // Eliminar un registro específico por alumnoId y examenId
  remove(alumnoId: number, examenteoricoId: number) {
    return this.alumnoHaceExamenTeoricoRepository.delete({ alumnoId, examenteoricoId });
  }
}