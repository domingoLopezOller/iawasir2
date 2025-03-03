import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorDiseñaPracticaDto } from './create-profesor_diseña_practica.dto';

export class UpdateProfesorDiseñaPracticaDto extends PartialType(CreateProfesorDiseñaPracticaDto) {}
