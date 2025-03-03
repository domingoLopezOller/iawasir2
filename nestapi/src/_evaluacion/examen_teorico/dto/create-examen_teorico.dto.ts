import { IsNotEmpty, IsString } from "class-validator";
export class CreateExamenTeoricoDto {
        @IsNotEmpty()
        @IsString()
        titulo: string;


        @IsNotEmpty()
        @IsString()
        dificultad: string;
}

