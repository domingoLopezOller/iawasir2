import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Producto2Service } from './producto2.service';
import { CreateProducto2Dto } from './dto/create-producto2.dto';
import { UpdateProducto2Dto } from './dto/update-producto2.dto';

@Controller('producto2')
export class Producto2Controller {
  constructor(private readonly producto2Service: Producto2Service) {}

  @Post()
  create(@Body() createProducto2Dto: CreateProducto2Dto) {
    return this.producto2Service.create(createProducto2Dto);
  }

  @Get()
  findAll() {
    return this.producto2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producto2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProducto2Dto: UpdateProducto2Dto) {
    return this.producto2Service.update(+id, updateProducto2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producto2Service.remove(+id);
  }
}
