import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
     @PrimaryGeneratedColumn()
            id: number;
            @Column({type: 'varchar', length:'50'})
             nombre: string;
            @Column()
             email: string;
            @Column()
             tema: string;
            @Column()
             editorial: string;
            @Column()
             stock: number;
            @Column()
             posts: number;
}
