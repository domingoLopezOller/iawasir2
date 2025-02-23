import { Module } from '@nestjs/common';
import { AlumnoHaceExamenTeoricoService } from './alumno_hace_examen_teorico.service';
import { AlumnoHaceExamenTeoricoController } from './alumno_hace_examen_teorico.controller';

@Module({
  controllers: [AlumnoHaceExamenTeoricoController],
  providers: [AlumnoHaceExamenTeoricoService],
})
export class AlumnoHaceExamenTeoricoModule {}
