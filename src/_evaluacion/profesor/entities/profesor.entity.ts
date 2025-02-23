import { ExamenTeorico } from "src/_evaluacion/examen_teorico/entities/examen_teorico.entity";
import { Practica } from "src/_evaluacion/practica/entities/practica.entity";
import { ProfesorDiseñaPractica } from "src/_evaluacion/profesor_diseña_practica/entities/profesor_diseña_practica.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Profesor {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nif: string;
    @Column()
    nombre: string;


    @OneToMany(()=> ProfesorDiseñaPractica, profesorDiseñaPractica => profesorDiseñaPractica.profesor)
    practicasDiseñadas: ProfesorDiseñaPractica[];
}

