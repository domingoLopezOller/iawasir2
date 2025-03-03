import { PartialType } from '@nestjs/mapped-types';
import { CreatePiezaDto } from './create-pieza.dto';

export class UpdatePiezaDto extends PartialType(CreatePiezaDto) {}
