import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';

@Module({
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
