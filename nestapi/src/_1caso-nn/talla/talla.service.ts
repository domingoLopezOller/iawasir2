import { Injectable } from '@nestjs/common';
import { CreateTallaDto } from './dto/create-talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';

@Injectable()
export class TallaService {
  create(createTallaDto: CreateTallaDto) {
    return 'This action adds a new talla';
  }

  findAll() {
    return `This action returns all talla`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talla`;
  }

  update(id: number, updateTallaDto: UpdateTallaDto) {
    return `This action updates a #${id} talla`;
  }

  remove(id: number) {
    return `This action removes a #${id} talla`;
  }
}
