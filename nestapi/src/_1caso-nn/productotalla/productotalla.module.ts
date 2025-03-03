import { Module } from '@nestjs/common';
import { ProductoTallaService } from './productotalla.service';
import { ProductoTallaController } from './productotalla.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talla } from '../talla/entities/talla.entity';
import { ProductoTalla } from './entities/productotalla.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoTalla])],
  controllers: [ProductoTallaController],
  providers: [ProductoTallaService],
})
export class ProductotallaModule {}
