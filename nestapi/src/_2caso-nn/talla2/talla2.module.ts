import { Module } from '@nestjs/common';
import { Talla2Service } from './talla2.service';
import { Talla2Controller } from './talla2.controller';

@Module({
  controllers: [Talla2Controller],
  providers: [Talla2Service],
})
export class Talla2Module {}
