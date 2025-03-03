import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Producto } from "./entities/producto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductosService {
 constructor(
 @InjectRepository(Producto)
 private readonly productoRepository: Repository<Producto>,
 ) {}
 async crearProducto(nombre: string, descripcion: string): Promise<Producto> {
 const producto = this.productoRepository.create({ nombre, descripcion });
 return await this.productoRepository.save(producto);
 }
 async obtenerTodos(): Promise<Producto[]> {
 return await this.productoRepository.find();
 }
 async obtenerPorId(id: number): Promise<Producto> {
 return await this.productoRepository.findOne({ where: { id } });
 }
 async eliminarProducto(id: number): Promise<string> {
 const producto = await this.productoRepository.findOne({ where: { id } });
 if (!producto) {
 throw new Error(`Producto con ID ${id} no encontrado`);
 }
 await this.productoRepository.remove(producto);
 return `Producto con ID ${id} eliminado correctamente`;
 }
}