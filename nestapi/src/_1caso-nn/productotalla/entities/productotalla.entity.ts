import { Producto } from "src/_1caso-nn/producto/entities/producto.entity"
import { Talla } from "src/_1caso-nn/talla/entities/talla.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductoTalla {
 @PrimaryGeneratedColumn()
 id: number
 @Column("decimal", { precision: 10, scale: 2 })
 precio: number
 @ManyToOne(
 () => Producto,
 (producto) => producto.productoTallas,
 )
 producto: Producto
 @ManyToOne(
 () => Talla,
 (talla) => talla.productoTallas,
 )
 talla: Talla
}