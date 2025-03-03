import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CreateSuministraDto } from './dto/create-suministra.dto';
import { UpdateSuministraDto } from './dto/update-suministra.dto';
import { CreateProveedorDto } from '../proveedor/dto/create-proveedor.dto';
import { ProveedorSuministraPiezaService } from './suministra.service';

@Controller('proveedor-suministra-pieza')
export class ProveedorSuministraPiezaController {
  constructor(private readonly proveedorSuministraPiezaService: ProveedorSuministraPiezaService ) {}

  @Post()
  create(@Body() createProveedorSuministraPiezaDto: CreateSuministraDto) {
    return this.proveedorSuministraPiezaService.create(createProveedorSuministraPiezaDto);
  }

  @Get()
  findAll() {
    return this.proveedorSuministraPiezaService.findAll();
  }

  @Get(':codigoProveedor/:codigoPieza/:fecha')
  findOne(@Param('codigoProveedor') codigoProveedor: string,@Param('codigoPieza') codigoPieza:string,  @Param('fecha') fecha: string) {
    return this.proveedorSuministraPiezaService.findOne(+codigoProveedor, +codigoPieza, new Date(fecha));
  }

  @Put(':codigoProveedor/:codigoPieza/:fecha')
  update(@Param('codigoProveedor') codigoProveedor: string, @Param('codigoPieza') codigoPieza:string,
   fecha: string, @Body() updateProveedorSuministraPiezaDto: UpdateSuministraDto) {
    return this.proveedorSuministraPiezaService.update(+codigoProveedor, +codigoPieza, new Date(fecha), updateProveedorSuministraPiezaDto
  );
  }

  @Delete(':codigoProveedor/:codigoPieza/:fecha')
  remove(@Param('codigoProveedor') codigoProveedor: string, @Param('codigoPieza') codigoPieza: string,
    @Param('fecha') fecha: string) {
    return this.proveedorSuministraPiezaService.remove(+codigoProveedor, +codigoPieza, new Date (fecha));
  }
}
