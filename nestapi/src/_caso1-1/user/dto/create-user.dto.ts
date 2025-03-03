import { IsEmail, IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class profileDTO {
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsInt()
    age: number;
    };
   export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsNotEmpty()
   @ValidateNested()
    @Type(() => profileDTO)
    profile: profileDTO;
   }
