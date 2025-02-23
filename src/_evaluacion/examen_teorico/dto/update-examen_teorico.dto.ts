import { PartialType } from '@nestjs/mapped-types';
import { CreateExamenTeoricoDto } from './create-examen_teorico.dto';

export class UpdateExamenTeoricoDto extends PartialType(CreateExamenTeoricoDto) {}
