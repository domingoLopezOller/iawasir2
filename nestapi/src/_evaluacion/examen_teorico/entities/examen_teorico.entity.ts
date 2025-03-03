import { AlumnoHaceExamenTeorico } from "src/_evaluacion/alumno_hace_examen_teorico/entities/alumno_hace_examen_teorico.entity";
import { Profesor } from "src/_evaluacion/profesor/entities/profesor.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ExamenTeorico {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    titulo: string;
   
    @OneToMany(() => AlumnoHaceExamenTeorico, alumnoHaceExamenTeorico => alumnoHaceExamenTeorico.examenTeorico)
    alumnosHacen: AlumnoHaceExamenTeorico[];


}

