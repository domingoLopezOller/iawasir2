import { Profile } from "src/_caso1-1/profile/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
@PrimaryGeneratedColumn()
id: number;
@Column({ unique: true })
email: string;
@Column()
password: string;
@OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
@JoinColumn() profile: Profile;
}

