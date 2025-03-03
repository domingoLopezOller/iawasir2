import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoHaceExamenTeoricoService } from './alumno_hace_examen_teorico.service';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno_hace_examen_teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno_hace_examen_teorico.dto';


@Controller('alumno-hace-examen-teorico')
export class AlumnoHaceExamenTeoricoController {
  constructor(private readonly alumnoHaceExamenTeoricoService: AlumnoHaceExamenTeoricoService) {}


  @Post()
  create(@Body() createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoService.create(createAlumnoHaceExamenTeoricoDto);
  }


  @Get()
  findAll() {
    return this.alumnoHaceExamenTeoricoService.findAll();
  }


  @Get(':alumnoId/examenteoricoId')
  findOne(
    @Param('alumnoId') alumnoId: string,
    @Param('examenteoricoId') examenteoricoId: string,) {
    return this.alumnoHaceExamenTeoricoService.findOne(+alumnoId, +examenteoricoId);
  }


  @Patch(':alumnoId/examenteoricoId')
  update(
    @Param('alumnoId') alumnoId: string,
    @Param('examenteoricoId') examenteoricoId: string,
    @Body() UpdateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoService.update(+alumnoId, +examenteoricoId, UpdateAlumnoHaceExamenTeoricoDto);
  }


  @Delete(':alumnoId/:examenteoricoId')
  remove(
    @Param('alumnoId') alumnoId: string,
    @Param('examenteoricoId') examenteoricoId: string,
  ) {
    return this.alumnoHaceExamenTeoricoService.remove(+alumnoId, +examenteoricoId);
  }
}


