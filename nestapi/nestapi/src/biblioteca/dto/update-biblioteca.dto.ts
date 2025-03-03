import { PartialType } from '@nestjs/mapped-types';
import { CreateBibliotecaDto } from './create-biblioteca.dto';

export class UpdateBibliotecaDto extends PartialType(CreateBibliotecaDto) {}
