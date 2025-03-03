import { EntityRepository, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByUsername(username: string): Promise<User> {
        return this.findOne({where: {  }});
    }
    findByEmail(username: string): Promise<User> {
        return this.findOne({where: {  }});
    }
}