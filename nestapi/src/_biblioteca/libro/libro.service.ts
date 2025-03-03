import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>,
    ) {}
  async create(createLibroDto: CreateLibroDto):
  Promise<Libro> {
   const libro = this.libroRepository.create(createLibroDto)
   return this.libroRepository.save(libro)
   }
   async findAll(): Promise<Libro[]> {
   return this.libroRepository.find({ relations: ["autor"] })
   }
   async findOne(id: number): Promise<Libro> {
    return this.libroRepository.findOne({ where: { id }, relations:
   ["autor"] })
    }
    async update(id: number, updateLibroDto: UpdateLibroDto):
   Promise<Libro> {
    await this.libroRepository.update(id, updateLibroDto)
    return this.libroRepository.findOne({ where: { id } })
    }
    async remove(id: number): Promise<void> {
    await this.libroRepository.delete(id)
    }  
}
