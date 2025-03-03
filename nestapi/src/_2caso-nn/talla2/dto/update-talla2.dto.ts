import { PartialType } from '@nestjs/mapped-types';
import { CreateTalla2Dto } from './create-talla2.dto';

export class UpdateTalla2Dto extends PartialType(CreateTalla2Dto) {}
