import { Pieza } from "src/_recambios/pieza/entities/pieza.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    codigo: number;
    @Column({ unique: true })
    nombre: string;
    @OneToMany (() => Pieza, pieza => pieza.categoria)
    piezas: Pieza[];
   
}
