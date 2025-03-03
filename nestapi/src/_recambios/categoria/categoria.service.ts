import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ){}
  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaRepository.save(createCategoriaDto);
  }

  findAll() {
    return this.categoriaRepository.find;
  }

  findOne(id: number) {
    return this.categoriaRepository.findOne({where: {codigo: id}});
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaRepository.update(id, updateCategoriaDto);
  }

  remove(id: number) {
    return this.categoriaRepository.delete(id);
  }
}
