import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';

@Injectable()
export class BibliotecaService {
  create(createBibliotecaDto: CreateBibliotecaDto) {
    return 'This action adds a new biblioteca';
  }

  findAll() {
    return `This action returns all biblioteca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biblioteca`;
  }

  update(id: number, updateBibliotecaDto: UpdateBibliotecaDto) {
    return `This action updates a #${id} biblioteca`;
  }

  remove(id: number) {
    return `This action removes a #${id} biblioteca`;
  }
}
