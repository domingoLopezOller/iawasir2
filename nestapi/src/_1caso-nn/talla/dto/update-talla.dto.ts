import { PartialType } from '@nestjs/mapped-types';
import { CreateTallaDto } from './create-talla.dto';

export class UpdateTallaDto extends PartialType(CreateTallaDto) {}
