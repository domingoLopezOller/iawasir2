import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreatePiezaDto {
 @IsNotEmpty()
 @IsString()
 nombre: string;

 @IsNotEmpty()
 @IsString()
 color: string;

 @IsNotEmpty()
 @IsNumber()
 @IsPositive()
 precio: number;

 @IsNotEmpty()
 @IsNumber()
 codigoCategoria: number;
}
