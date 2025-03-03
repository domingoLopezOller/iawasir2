import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';


@Controller('practica')
export class PracticaController {
  constructor(private readonly practicaService: PracticaService) {}


  @Post()
  create(@Body() createPracticaDto: CreatePracticaDto) {
    return this.practicaService.create(createPracticaDto);
  }
 
  @Get()
  findAll() {
    return this.practicaService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practicaService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePracticaDto: UpdatePracticaDto) {
    return this.practicaService.update(+id, updatePracticaDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practicaService.remove(+id);
  }
}
