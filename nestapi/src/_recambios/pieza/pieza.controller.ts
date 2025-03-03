import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PiezaService } from './pieza.service';
import { CreatePiezaDto } from './dto/create-pieza.dto';
import { UpdatePiezaDto } from './dto/update-pieza.dto';

@Controller('pieza')
export class PiezaController {
  constructor(private readonly piezaService: PiezaService) {}

  @Post()
  create(@Body() createPiezaDto: CreatePiezaDto) {
    return this.piezaService.create(createPiezaDto);
  }

  @Get()
  findAll() {
    return this.piezaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.piezaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePiezaDto: UpdatePiezaDto) {
    return this.piezaService.update(+id, updatePiezaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.piezaService.remove(+id);
  }
}
