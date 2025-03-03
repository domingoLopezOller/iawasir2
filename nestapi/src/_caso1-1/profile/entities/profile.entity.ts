import { User } from "src/_caso1-1/user/entities/user.entity";
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Profile {
 @PrimaryGeneratedColumn()
 id: number;
 @Column()
 firstName: string;
 @Column()
 lastName: string;
 @Column()
 age: number;
 @OneToOne(() => User, (user) => user.profile)
 user: User;
}
