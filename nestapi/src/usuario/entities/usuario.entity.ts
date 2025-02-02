import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length:'50'})
     titulo: string;
    @Column({type: 'varchar', length:'50'})
     autor: string;
    @Column({type: 'varchar', length:'10'})
     tema: string;
    @Column({type: 'varchar', length:'50'})
     email: string;
    @Column()
     stock: number;
    @Column()
     activo: number;
}
