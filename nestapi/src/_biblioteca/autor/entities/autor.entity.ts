import { Libro } from "src/_biblioteca/libro/entities/libro.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Autor {
 @PrimaryGeneratedColumn()
 id: number
 @Column()
 nombre: string
 @Column()
 biografia: string
 @Column()
 fotoUrl: string
 @OneToMany( () => Libro,
 (libro) => libro.autor,
 )
 libros: Libro[]
}
