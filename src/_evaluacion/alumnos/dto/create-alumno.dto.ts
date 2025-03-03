import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAlumnoDto {
  @IsNotEmpty()
  @IsString()
  nif: string;


  @IsNotEmpty()
  @IsString()
  grupo: string;


  @IsNotEmpty()
  @IsString()
  nombre: string;


  @IsNotEmpty()
  @IsString()
  apellido1: string;


  @IsNotEmpty()
  @IsString()
  apellido2: string;


}

