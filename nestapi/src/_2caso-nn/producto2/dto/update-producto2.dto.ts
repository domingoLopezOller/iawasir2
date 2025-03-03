import { PartialType } from '@nestjs/mapped-types';
import { CreateProducto2Dto } from './create-producto2.dto';

export class UpdateProducto2Dto extends PartialType(CreateProducto2Dto) {}
