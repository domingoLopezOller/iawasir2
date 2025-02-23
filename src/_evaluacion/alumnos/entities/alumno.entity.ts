import { AlumnoHaceExamenTeorico } from "src/_evaluacion/alumno_hace_examen_teorico/entities/alumno_hace_examen_teorico.entity";
import { AlumnoRealizaPractica } from "src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    nombre: string;


    @Column()
    apellido: string;


    @OneToMany(() => AlumnoRealizaPractica, alumnoRealizaPractica => alumnoRealizaPractica.alumno)
    practicasRealizadas: AlumnoRealizaPractica[];


    @OneToMany(() => AlumnoHaceExamenTeorico, alumnoHaceExamenTeorico => alumnoHaceExamenTeorico.alumno)
    examenesRealizados: AlumnoHaceExamenTeorico[];


}
