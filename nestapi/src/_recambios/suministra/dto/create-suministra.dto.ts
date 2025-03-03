import { IsDateString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateSuministraDto {
    @IsNotEmpty()
    @IsNumber()
    codigoProveedor: number;
    @IsNotEmpty()
    @IsNumber()
    codigoPieza: number;
    @IsNotEmpty()
    @IsDateString()
    fecha: string;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    cantidad: number;
}
