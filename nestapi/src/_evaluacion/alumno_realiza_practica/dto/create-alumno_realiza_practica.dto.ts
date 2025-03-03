import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateAlumnoRealizaPracticaDto {
  @IsNotEmpty()
  @IsNumber()
  alumnoId: number;

  @IsNotEmpty()
  @IsNumber()
  practicaId: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string; 
}