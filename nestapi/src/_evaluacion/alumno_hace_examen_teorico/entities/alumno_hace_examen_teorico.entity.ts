import { Alumno } from "src/_evaluacion/alumnos/entities/alumno.entity";
import { ExamenTeorico } from "src/_evaluacion/examen_teorico/entities/examen_teorico.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class AlumnoHaceExamenTeorico {
     @PrimaryColumn()
     alumnoId: number;
 
     @PrimaryColumn()
     examenteoricoId: number;


     @ManyToOne(() => Alumno, alumno => alumno. examenesRealizados)
     @JoinColumn({ name: 'alumnoId'})
     alumno: Alumno;


     @ManyToOne(() => ExamenTeorico, examenTeorico => examenTeorico.alumnosHacen)
     @JoinColumn({name: 'examenteoricoId' })
     examenTeorico: ExamenTeorico;
}
