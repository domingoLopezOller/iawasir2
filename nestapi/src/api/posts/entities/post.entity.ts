import { User } from "src/api/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
 @Entity()
    export class Post {
        @PrimaryGeneratedColumn()
        id: number;
        @Column({type: 'varchar', length:'50'})
         titulo: string;
        @Column()
         autor: string;
        @ManyToOne(() => User, (user) => user, {onDelete: 'CASCADE'}) 
        user:User;
    
       
        

}
