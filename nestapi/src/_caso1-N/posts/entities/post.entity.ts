import { User } from "src/api/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
 @PrimaryGeneratedColumn()
 id: number;
 @Column()
 titulo: string;
 @Column()
 contenido: string;
 @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
 user: User;

}
