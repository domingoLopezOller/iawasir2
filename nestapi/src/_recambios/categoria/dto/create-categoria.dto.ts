import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}
