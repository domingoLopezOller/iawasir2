import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoRealizaPracticaService } from './alumno_realiza_practica.service';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno_realiza_practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno_realiza_practica.dto';

@Controller('alumno-realiza-practica')
export class AlumnoRealizaPracticaController {
  constructor(private readonly alumnoRealizaPracticaService: AlumnoRealizaPracticaService) {}

  @Post()
  create(@Body() createAlumnoRealizaPracticaDto: CreateAlumnoRealizaPracticaDto) {
    return this.alumnoRealizaPracticaService.create(createAlumnoRealizaPracticaDto);
  }

  @Get()
  findAll() {
    return this.alumnoRealizaPracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoRealizaPracticaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoRealizaPracticaDto: UpdateAlumnoRealizaPracticaDto) {
    return this.alumnoRealizaPracticaService.update(+id, updateAlumnoRealizaPracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoRealizaPracticaService.remove(+id);
  }
}
