import { Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator"
import { ProductotallaDto } from "src/_1caso-nn/productotalla/dto/create-productotalla.dto"

export class CreateProductoDto {
 @IsNotEmpty()
 @IsString()
 nombre: string
 @IsNotEmpty()
 @IsString()
 descripcion: string
 @IsArray()
 @ValidateNested({ each: true })
 @Type(() => ProductotallaDto)
 tallas: ProductotallaDto[]
}
