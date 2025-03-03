import { Injectable } from '@nestjs/common';
import { CreateTalla2Dto } from './dto/create-talla2.dto';
import { UpdateTalla2Dto } from './dto/update-talla2.dto';

@Injectable()
export class Talla2Service {
  create(createTalla2Dto: CreateTalla2Dto) {
    return 'This action adds a new talla2';
  }

  findAll() {
    return `This action returns all talla2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talla2`;
  }

  update(id: number, updateTalla2Dto: UpdateTalla2Dto) {
    return `This action updates a #${id} talla2`;
  }

  remove(id: number) {
    return `This action removes a #${id} talla2`;
  }
}
