import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}
        async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && await bcrypt.compare(pass, user.password)) {
        const { password, ...result } = user;
        return result;
        }
        return null;
        }
        async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
        token: this.jwtService.sign(payload),
        };
        }
        async register(name: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await this.userService.create(name, email,
       hashedPassword);
        return this.login(user);
        }
}
