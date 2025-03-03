import { Body, Controller, Delete, Get, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto/products.dto';
import { Products } from './products.interface';

@Controller('products')
export class ProductsController {
   constructor(private readonly servicioProducts: ProductsService){}
   @Get()
   getAllProducts():Products[] {
       return this.servicioProducts.getAll();
   }
   @Get('total')
   getTotal(){
       return `El array tiene : ${this.servicioProducts.total()} elementos`;
   }
   @Get(':id')
    getId(@Param('id',ParseIntPipe)  id: number): Products {
        return this.servicioProducts.findOne(id);
    }
@Post()
createProduct(@Body() producto:ProductsDto):{status:HttpStatus,msg:string} {
       return this.servicioProducts.insert({
           id: this.servicioProducts.getAll().length+1,
           articulo:producto.articulo, //Este es el fallo del viernes que no creaba el formato json con DTO
           precio: producto.precio
           });
   }
  @Put(':id')
  updateProduct(@Param('id') valor:number, @Body() producto:any){
    return this.servicioProducts.update(valor,producto);
  }
  @Delete(':id')
  deleteProduct(@Param('id') valor:number):string{
    return this.servicioProducts.delete(valor);
  }
}