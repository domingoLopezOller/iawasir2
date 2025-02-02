import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ApiModule } from './api/api.module';
import { PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), ProductsModule, AlumnosModule, ApiModule,
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost', //URL del servidor
        port: 3306, // Puerto de MySQL
        username: 'root',
        password: 'jaz123@',
        database: 'nestapi',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true
    }),
    ApiModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
