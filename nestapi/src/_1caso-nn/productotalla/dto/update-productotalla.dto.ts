import { PartialType } from '@nestjs/mapped-types';
import { CreateProductotallaDto } from './create-productotalla.dto';

export class UpdateProductotallaDto extends PartialType(CreateProductotallaDto) {}
