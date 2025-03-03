import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductosService } from "./producto.service";

@Controller('productos')
export class ProductosController {
 constructor(private readonly productosService: ProductosService) {}
 @Post()
 async crearProducto(@Body() body: { nombre: string; descripcion: string }) {
 return await this.productosService.crearProducto(body.nombre,
body.descripcion);
 }
 @Get()
 async obtenerTodos() {
 return await this.productosService.obtenerTodos();
 }
 @Get(':id')
 async obtenerPorId(@Param('id') id: number) {
 return await this.productosService.obtenerPorId(id);
 }
 @Delete(':id')
 async eliminarProducto(@Param('id') id: number) {
 return await this.productosService.eliminarProducto(id);
 }
}