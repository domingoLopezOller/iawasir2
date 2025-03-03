import { Categoria } from "src/_recambios/categoria/entities/categoria.entity";
import { ProveedorSuministraPieza } from "src/_recambios/suministra/entities/suministra.entity";
import { Post } from "src/api/posts/entities/post.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pieza {
@PrimaryGeneratedColumn()
codigo: number;
@Column()
usuario: string;
@Column()
email: string;
@ManyToOne(() => Categoria, categoria => categoria.piezas)
 categoria: Categoria;
@OneToMany(() => ProveedorSuministraPieza, psp => psp.pieza)
proveedorSuministraPiezas: ProveedorSuministraPieza[];

}