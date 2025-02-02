import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 50})
    nombre: string;
   @Column({unique: true})
    email: string;
   @Column()
    password: string;
   @Column({ default: true })
    activo: boolean;
   @CreateDateColumn()
    fechaCreacion: Date;
   @UpdateDateColumn()
    fechaActualizacion: Date;
}