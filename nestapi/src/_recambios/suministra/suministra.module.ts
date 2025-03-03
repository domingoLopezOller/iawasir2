import { Module } from '@nestjs/common';
import { ProveedorSuministraPiezaController } from './suministra.controller';
import { ProveedorSuministraPiezaService } from './suministra.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedor } from '../proveedor/entities/proveedor.entity';
import { Pieza } from '../pieza/entities/pieza.entity';
import { ProveedorSuministraPieza } from './entities/suministra.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProveedorSuministraPieza])],
  controllers: [ProveedorSuministraPiezaController],
  providers: [ProveedorSuministraPiezaService],
})
export class SuministraModule {}
