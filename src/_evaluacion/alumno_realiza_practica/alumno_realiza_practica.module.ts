import { Module } from '@nestjs/common';
import { AlumnoRealizaPracticaService } from './alumno_realiza_practica.service';
import { AlumnoRealizaPracticaController } from './alumno_realiza_practica.controller';

@Module({
  controllers: [AlumnoRealizaPracticaController],
  providers: [AlumnoRealizaPracticaService],
})
export class AlumnoRealizaPracticaModule {}
