import { IsNotEmpty } from "class-validator"

export class ProductotallaDto {
 @IsNotEmpty()
 tallaId: number
 @IsNotEmpty()
 precio: number

}
