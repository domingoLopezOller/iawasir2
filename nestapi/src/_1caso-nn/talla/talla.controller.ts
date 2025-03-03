import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TallaService } from './talla.service';
import { CreateTallaDto } from './dto/create-talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';

@Controller('talla')
export class TallaController {
  constructor(private readonly tallaService: TallaService) {}

  @Post()
  create(@Body() createTallaDto: CreateTallaDto) {
    return this.tallaService.create(createTallaDto);
  }

  @Get()
  findAll() {
    return this.tallaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tallaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTallaDto: UpdateTallaDto) {
    return this.tallaService.update(+id, updateTallaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tallaService.remove(+id);
  }
}
