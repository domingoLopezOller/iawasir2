import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';

@Controller('biblioteca')
export class BibliotecaController {
  constructor(private readonly bibliotecaService: BibliotecaService) {}

  @Post()
  create(@Body() createBibliotecaDto: CreateBibliotecaDto) {
    return this.bibliotecaService.create(createBibliotecaDto);
  }

  @Get()
  findAll() {
    return this.bibliotecaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bibliotecaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBibliotecaDto: UpdateBibliotecaDto) {
    return this.bibliotecaService.update(+id, updateBibliotecaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bibliotecaService.remove(+id);
  }
}
