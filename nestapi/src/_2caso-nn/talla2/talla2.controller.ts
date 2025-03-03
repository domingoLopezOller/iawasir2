import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Talla2Service } from './talla2.service';
import { CreateTalla2Dto } from './dto/create-talla2.dto';
import { UpdateTalla2Dto } from './dto/update-talla2.dto';

@Controller('talla2')
export class Talla2Controller {
  constructor(private readonly talla2Service: Talla2Service) {}

  @Post()
  create(@Body() createTalla2Dto: CreateTalla2Dto) {
    return this.talla2Service.create(createTalla2Dto);
  }

  @Get()
  findAll() {
    return this.talla2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talla2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalla2Dto: UpdateTalla2Dto) {
    return this.talla2Service.update(+id, updateTalla2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talla2Service.remove(+id);
  }
}
