import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoRealizaPracticaDto } from './create-alumno_realiza_practica.dto';

export class UpdateAlumnoRealizaPracticaDto extends PartialType(CreateAlumnoRealizaPracticaDto) {}
