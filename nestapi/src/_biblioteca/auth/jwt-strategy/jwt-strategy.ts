import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy {
    constructor(private configService: ConfigService) {
       super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: 'tu_secreto_jwt',
        });
        }
        async validate(payload: any) {
         return { userId: payload.sub, email: payload.email };
        }
}
