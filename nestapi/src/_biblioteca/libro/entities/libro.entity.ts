import { Autor } from "src/_biblioteca/autor/entities/autor.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Libro {
 @PrimaryGeneratedColumn()
 id: number
 @Column()
 titulo: string
 @Column()
 descripcion: string
 @Column()
 portadaUrl: string
 @ManyToOne( () => Autor,
 (autor) => autor.libros,
 )
 autor: Autor
}
