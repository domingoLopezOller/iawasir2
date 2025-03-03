import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Api {
  @PrimaryGeneratedColumn()
        id: number;
        @Column({type: 'varchar', length: 50})
        nombre: string;
        @Column({type: 'varchar', length: 50})
        tipo: string;
        @Column({unique: true})
        HP: number;
        @Column()
        attack: number;
        @Column({ default: true })
        defense:number;
        @Column()
        sp_atk: number;
}