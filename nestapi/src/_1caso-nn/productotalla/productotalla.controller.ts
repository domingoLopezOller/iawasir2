import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductoTallaService } from "./productotalla.service";

@Controller('producto-talla')
export class ProductoTallaController {
 constructor(private readonly productoTallaService:
ProductoTallaService) {}
 @Post()
 async asignarPrecio(
 @Body() body: { productoId: number; tallaId: number;
precio: number }
 ) {
 return await
this.productoTallaService.asignarPrecio(body.productoId,
body.tallaId, body.precio);
 }
 @Get(':productoId/:tallaId')
 async obtenerProductoTalla(@Param('productoId')
productoId: number, @Param('tallaId') tallaId: number) {
 return await
this.productoTallaService.obtenerProductoTalla(productoId
, tallaId);
 }
}