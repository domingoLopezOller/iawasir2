import { Module } from '@nestjs/common';
import { UserModule } from 'src/_caso1-1/user/user.module';
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from '@nestjs/passport'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local-strategy/local-strategy';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
        secret: 'tu_secreto_jwt', // Mejor con variable de entorno
        signOptions: { expiresIn: '60m' },
        }),
        ],
        providers: [AuthService, LocalStrategy, JwtStrategy],
        controllers: [AuthController],
        exports: [AuthService]  
})
export class AuthModule {}
