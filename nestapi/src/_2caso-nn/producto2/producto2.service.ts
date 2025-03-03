import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProducto2Dto } from './dto/create-producto2.dto';
import { UpdateProducto2Dto } from './dto/update-producto2.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto2 } from './entities/producto2.entity';
import { In, Repository } from 'typeorm';
import { Talla2 } from '../talla2/entities/talla2.entity';

@Injectable()
export class Producto2Service {
  constructor(
    @InjectRepository(Producto2)
    private readonly productoRepository: Repository<Producto2>,
    @InjectRepository(Talla2)
    private readonly tallaRepository: Repository<Talla2>,
  ) {}

  async crearProducto(nombre: string, descripcion: string, tallaIds: string): Promise<Producto2> {
    const producto = this.productoRepository.create({ nombre, descripcion });
    if (tallaIds.length > 0) {
      const tallas = await this.tallaRepository.find({
        where: { id: In(tallaIds) }
      });
      producto.tallas = tallas;
    }
    return await this.productoRepository.save(producto);
  }

  async ObtenerTodos(): Promise<Producto2> {
    return await this.productoRepository.find();
  }

  async obtenerPorId(id: number): Promise<Producto2> {
    const producto = await this.productoRepository.findOne({ where: { id } });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  // ... (otros métodos como actualizar, eliminar, etc.)
}