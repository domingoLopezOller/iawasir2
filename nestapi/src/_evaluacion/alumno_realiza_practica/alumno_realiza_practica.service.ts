import { Injectable } from '@nestjs/common';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno_realiza_practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno_realiza_practica.dto';

@Injectable()
export class AlumnoRealizaPracticaService {
  create(createAlumnoRealizaPracticaDto: CreateAlumnoRealizaPracticaDto) {
    return 'This action adds a new alumnoRealizaPractica';
  }

  findAll() {
    return `This action returns all alumnoRealizaPractica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnoRealizaPractica`;
  }

  update(id: number, updateAlumnoRealizaPracticaDto: UpdateAlumnoRealizaPracticaDto) {
    return `This action updates a #${id} alumnoRealizaPractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnoRealizaPractica`;
  }
}
