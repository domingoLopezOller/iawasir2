import { PartialType } from '@nestjs/mapped-types';
import { CreatePracticaDto } from './create-practica.dto';

export class UpdatePracticaDto extends PartialType(CreatePracticaDto) {}
