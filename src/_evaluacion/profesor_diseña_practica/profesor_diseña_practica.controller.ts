import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor_diseña_practica.service';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor_diseña_practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor_diseña_practica.dto';

@Controller('profesor-diseña-practica')
export class ProfesorDiseñaPracticaController {
  constructor(private readonly profesorDiseñaPracticaService: ProfesorDiseñaPracticaService) {}

  @Post()
  create(@Body() createProfesorDiseñaPracticaDto: CreateProfesorDiseñaPracticaDto) {
    return this.profesorDiseñaPracticaService.create(createProfesorDiseñaPracticaDto);
  }

  @Get()
  findAll() {
    return this.profesorDiseñaPracticaService.findAll();
  }

  @Get(':Idpractica/:Idprofesor')
  findOne(
    @Param('Idpractica') Idpractica: string,
    @Param('Idprofesor') Idprofesor: string,
  ) {
    return this.profesorDiseñaPracticaService.findOne(+Idpractica, +Idprofesor);
  }

  @Patch(':Idpractica/:Idprofesor')
  update(
    @Param('Idpractica') Idpractica: string,
    @Param('Idprofesor') Idprofesor: string,
    @Body() updateProfesorDiseñaPracticaDto: UpdateProfesorDiseñaPracticaDto,
  ) {
    return this.profesorDiseñaPracticaService.update(
      +Idpractica,
      +Idprofesor,
      updateProfesorDiseñaPracticaDto,
    );
  }

  @Delete(':Idpractica/:Idprofesor')
  remove(
    @Param('Idpractica') Idpractica: string,
    @Param('Idprofesor') Idprofesor: string,
  ) {
    return this.profesorDiseñaPracticaService.remove(+Idpractica, +Idprofesor);
  }
}
