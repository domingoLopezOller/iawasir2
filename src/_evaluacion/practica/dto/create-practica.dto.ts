import { IsNotEmpty, IsString } from "class-validator";
export class CreatePracticaDto {
        @IsNotEmpty()
        @IsString()
        titulo: string;


        @IsNotEmpty()
        @IsString()
        dificultad: string;
}
