import { AlumnoRealizaPractica } from "src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity";
import { Profesor } from "src/_evaluacion/profesor/entities/profesor.entity";
import { ProfesorDiseñaPractica } from "src/_evaluacion/profesor_diseña_practica/entities/profesor_diseña_practica.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Practica {
 @PrimaryGeneratedColumn()
 id: number;
 @Column()
 titulo: string;


 @OneToMany(() => ProfesorDiseñaPractica, profesorDiseñaPractica => profesorDiseñaPractica.practica)
 profesorDiseña: ProfesorDiseñaPractica;


 @OneToMany(()=> AlumnoRealizaPractica, alumnoRealizaPractica => alumnoRealizaPractica.practica)
 alumnosRealizan: AlumnoRealizaPractica;
}  

