import { Module } from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor_diseña_practica.service';
import { ProfesorDiseñaPracticaController } from './profesor_diseña_practica.controller';
import { ProfesorDiseñaPractica } from './entities/profesor_diseña_practica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProfesorDiseñaPractica])],
  controllers: [ProfesorDiseñaPracticaController],
  providers: [ProfesorDiseñaPracticaService],
})
export class ProfesorDiseñaPracticaModule {}
