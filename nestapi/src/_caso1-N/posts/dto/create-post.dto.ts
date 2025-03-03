import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    titulo: string;
    @IsString()
    contenido: string;
    @IsBoolean()
    publicado: boolean;
    @IsNumber()
    autorId: number;
}
