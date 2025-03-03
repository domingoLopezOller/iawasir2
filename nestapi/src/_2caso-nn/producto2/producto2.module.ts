import { Module } from '@nestjs/common';
import { Producto2Service } from './producto2.service';
import { Producto2Controller } from './producto2.controller';

@Module({
  controllers: [Producto2Controller],
  providers: [Producto2Service],
})
export class Producto2Module {}
