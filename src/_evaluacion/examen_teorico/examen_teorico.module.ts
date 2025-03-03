import { Module } from '@nestjs/common';
import { ExamenTeoricoService } from './examen_teorico.service';
import { ExamenTeoricoController } from './examen_teorico.controller';
import { ExamenTeorico } from './entities/examen_teorico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ExamenTeorico])],
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
})
export class ExamenTeoricoModule {}
