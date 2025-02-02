import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Api } from './entities/api.entity';
 
@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Api)
    private apiRepository: Repository <Api>,
  ){}
  async create(createApiDto: CreateApiDto): Promise<Api>{
    const newApi = this.apiRepository.create(createApiDto);
    return this.apiRepository.save(newApi);
  }
  async findAll(): Promise<Api[]>{
    return this.apiRepository.find();
  }
  async findOne(id: number): Promise<Api | undefined>{
    return this.apiRepository.findOne({where:{id}});
  }
  async update(id: number, UpdateApiDto: UpdateApiDto): Promise<Api | undefined>{
    await this.apiRepository.update(id, UpdateApiDto);
    return this.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.apiRepository.delete(id);
  }
}
