import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { LibroService } from './libro.service'; // Asegúrate de tener el servicio correcto
import { CreateLibroDto } from './dto/create-libro.dto'; // Asegúrate de tener el DTO correcto
import { UpdateLibroDto } from './dto/update-libro.dto'; // Asegúrate de tener el DTO correcto
import { JwtAuthGuard } from '../auth/jwt.guard'; // Ajusta la ruta a tu guard JWT

@Controller('libro')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.libroService.create(createLibroDto); // Asumiendo que tienes un método create en tu servicio
  }

  @Get()
  findAll() {
    return this.libroService.findAll(); // Asumiendo que tienes un método findAll en tu servicio
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libroService.findOne(+id); // Asumiendo que tienes un método findOne en tu servicio
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.libroService.update(+id, updateLibroDto); // Asumiendo que tienes un método update en tu servicio
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.libroService.remove(+id); // Asumiendo que tienes un método remove en tu servicio
  }
}