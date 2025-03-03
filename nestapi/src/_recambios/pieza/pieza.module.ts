import { Module } from '@nestjs/common';
import { PiezaService } from './pieza.service';
import { PiezaController } from './pieza.controller';

@Module({
  controllers: [PiezaController],
  providers: [PiezaService],
})
export class PiezaModule {}
