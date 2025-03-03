import { Post } from "src/_caso1-N/posts/entities/post.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    usuario: string;
    @Column()
    email: string;
    @OneToMany(()=> Post, (post) => post.user)
    posts:Post[];
}
