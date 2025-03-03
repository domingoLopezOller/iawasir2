import { Injectable } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>,
    ) {}   
  create(createProveedorDto: CreateProveedorDto) {
    return  this.proveedorRepository.save(createProveedorDto);
  }

  findAll() {
    return  this.proveedorRepository.find;
  }

  findOne(id: number) {
    return this.proveedorRepository.findOne({ where: { codigo: id } }) ;
  }

  update(id: number, updateProveedorDto: UpdateProveedorDto) {
    return  this.proveedorRepository.update(id, updateProveedorDto);
  }

  remove(id: number) {
    return this.proveedorRepository.delete(id);
  }
}
