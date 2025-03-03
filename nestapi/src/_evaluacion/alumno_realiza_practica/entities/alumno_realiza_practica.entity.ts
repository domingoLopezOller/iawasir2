import { Practica } from "src/_evaluacion/practica/entities/practica.entity";
import { Alumno } from "src/_evaluacion/alumnos/entities/alumno.entity";
import { Entity, JoinColumn, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";


@Entity()
export class AlumnoRealizaPractica {
    @PrimaryColumn()
    alumnoId: number;


    @PrimaryColumn()
    practicaId: number;


    @OneToMany(() => Alumno, alumno => alumno.practicasRealizadas)


    @JoinColumn({ name: 'alumnoId' })
    alumno: Alumno;


    @ManyToMany(() => Practica, practica => practica.alumnosRealizan)


    @JoinColumn({ name: 'practicaId'})
    practica: Practica;
}

