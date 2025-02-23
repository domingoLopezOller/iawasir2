import { AlumnoRealizaPractica } from "src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity";
import { Practica } from "src/_evaluacion/practica/entities/practica.entity";
import { Profesor } from "src/_evaluacion/profesor/entities/profesor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProfesorDiseñaPractica{
  @PrimaryColumn()
  profesorId: number;

  @PrimaryColumn()
  practicaId: number;

  @ManyToOne(() => Profesor, profesor => profesor.practicasDiseñadas)
  @JoinColumn({ name: 'profesorId' })
  profesor: Profesor;

  @ManyToOne(() => Practica, practica => practica.profesorDiseña)
  @JoinColumn({ name: 'practicaId' })
  practica: Practica;
}
