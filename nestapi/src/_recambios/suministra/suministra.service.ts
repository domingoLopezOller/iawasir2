import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSuministraDto } from "./dto/create-suministra.dto";
import { UpdateSuministraDto } from "./dto/update-suministra.dto";
import { ProveedorSuministraPieza } from "./entities/suministra.entity";

@Injectable()
export class ProveedorSuministraPiezaService {
 constructor(
 @InjectRepository(ProveedorSuministraPieza)
 private proveedorSuministraPiezaRepository: Repository<ProveedorSuministraPieza>,
 ) {}
 create(createProveedorSuministraPiezaDto: CreateSuministraDto) {
 return this.proveedorSuministraPiezaRepository.save(createProveedorSuministraPiezaDto);}
 findAll() {
 return this.proveedorSuministraPiezaRepository.find({ relations: ['proveedor', 'pieza'] });
 }
 findOne(codigoProveedor: number, codigoPieza: number, fecha: Date) {
 return this.proveedorSuministraPiezaRepository.findOne({where: { codigoProveedor, codigoPieza, fecha },
 relations: ['proveedor', 'pieza'], });
 }
 update(codigoProveedor: number, codigoPieza: number, fecha: Date, updateProveedorSuministraPiezaDto:
UpdateSuministraDto) {
 return this.proveedorSuministraPiezaRepository.update( { codigoProveedor, codigoPieza, fecha },
 updateProveedorSuministraPiezaDto);
 }
 remove(codigoProveedor: number, codigoPieza: number, fecha: Date) {
 return this.proveedorSuministraPiezaRepository.delete({ codigoProveedor, codigoPieza, fecha });
 }
}