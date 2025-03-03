import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenTeoricoService } from './examen_teorico.service';
import { CreateExamenTeoricoDto } from './dto/create-examen_teorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examen_teorico.dto';

@Controller('examen-teorico')
export class ExamenTeoricoController {
  constructor(private readonly examenTeoricoService: ExamenTeoricoService) {}

  @Post()
  create(@Body() createExamenTeoricoDto: CreateExamenTeoricoDto) {
    return this.examenTeoricoService.create(createExamenTeoricoDto);
  }

  @Get()
  findAll() {
    return this.examenTeoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenTeoricoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamenTeoricoDto: UpdateExamenTeoricoDto) {
    return this.examenTeoricoService.update(+id, updateExamenTeoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenTeoricoService.remove(+id);
  }
}
