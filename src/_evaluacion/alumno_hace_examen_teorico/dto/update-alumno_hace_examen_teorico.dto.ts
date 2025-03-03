import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoHaceExamenTeoricoDto } from './create-alumno_hace_examen_teorico.dto';

export class UpdateAlumnoHaceExamenTeoricoDto extends PartialType(CreateAlumnoHaceExamenTeoricoDto) {}
