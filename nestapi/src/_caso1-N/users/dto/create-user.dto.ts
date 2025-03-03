import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    usuario: string;

    @IsString()
    email: string;
}
