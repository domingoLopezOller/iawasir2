import { Module } from '@nestjs/common';
import { TallaService } from './talla.service';
import { TallaController } from './talla.controller';
import { Talla } from './entities/talla.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Talla])],
  controllers: [TallaController],
  providers: [TallaService],
})
export class TallaModule {}
