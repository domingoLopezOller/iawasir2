import { PartialType } from '@nestjs/mapped-types';
import { CreateSuministraDto } from './create-suministra.dto';

export class UpdateSuministraDto extends PartialType(CreateSuministraDto) {}
