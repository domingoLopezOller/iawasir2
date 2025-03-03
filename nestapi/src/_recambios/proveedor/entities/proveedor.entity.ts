import { ProveedorSuministraPieza } from "src/_recambios/suministra/entities/suministra.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Proveedor {
 @PrimaryGeneratedColumn()
 codigo: number;
 @Column()
 direccion: string;
 @Column()
 ciudad: string;
 @Column()
 provincia: string;
 @OneToMany(() => ProveedorSuministraPieza, psp =>
psp.proveedor)
 proveedorSuministraPiezas: ProveedorSuministraPieza[];
}
