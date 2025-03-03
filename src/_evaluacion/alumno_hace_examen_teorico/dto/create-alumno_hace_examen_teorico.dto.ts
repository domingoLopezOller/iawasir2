import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateAlumnoHaceExamenTeoricoDto {
  @IsNotEmpty()
  @IsNumber()
  alumnoId: number;

  @IsNotEmpty()
  @IsNumber()
  examenId: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string; 
}