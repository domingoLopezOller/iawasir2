import { IsNotEmpty, IsString } from "class-validator";

export class CreateProveedorDto {
    @IsNotEmpty()
    @IsString()
    direccion: string;
    @IsNotEmpty()
    @IsString()
    ciudad: string;
    @IsNotEmpty()
    @IsString()
    provincia: string;
   }
