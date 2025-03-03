import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Autor], 'base2')],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
