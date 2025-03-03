import { IsInt, IsString } from "class-validator";

export class CreateProfileDto {
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsInt()
    age: number;  
}
