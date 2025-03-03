import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProfesorDiseñaPracticaDto {
 @IsNotEmpty()
  @IsNumber()
  profesorId: number;

  @IsNotEmpty()
  @IsNumber()
  practicaId: number;
}
