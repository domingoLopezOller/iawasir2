import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Biblioteca {
    @PrimaryGeneratedColumn()
     id: number;
    @Column({type: 'varchar', length:'50'})
     titulo: string;
    @Column({type: 'varchar', length:'50'})
     autor: string;
    @Column({type: 'varchar', length:'10'})
     tema: string;
    @Column({type: 'varchar', length:'50'})
     editorial: string;
    @Column()
     stock: number;
    @Column()
     precio: number;
}
