import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ApiModule } from './api/api.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProveedorModule } from './_recambios/proveedor/proveedor.module';
import { PiezaModule } from './_recambios/pieza/pieza.module';
import { SuministraModule } from './_recambios/suministra/suministra.module';
import { CategoriaModule } from './_recambios/categoria/categoria.module';
import { AutorModule } from './_biblioteca/autor/autor.module';
import { LibroModule } from './_biblioteca/libro/libro.module';
import { ProfesorModule } from './_evaluacion/profesor/profesor.module';
import { PracticaModule } from './_evaluacion/practica/practica.module';
import { ExamenTeoricoModule } from './_evaluacion/examen_teorico/examen_teorico.module';
import { AlumnoRealizaPracticaModule } from './_evaluacion/alumno_realiza_practica/alumno_realiza_practica.module';
import { AlumnoHaceExamenTeoricoModule } from './_evaluacion/alumno_hace_examen_teorico/alumno_hace_examen_teorico.module';
import { ProfesorDiseñaPracticaModule } from './_evaluacion/profesor_diseña_practica/profesor_diseña_practica.module';
import { UsersModule } from './_caso1-n/users/users.module';
import { PostsModule } from './_caso1-n/posts/posts.module';
import { ProfileModule } from './_caso1-1/profile/profile.module';
import { UserModule } from './_caso1-1/user/user.module';
import { ProductoModule } from './_caso-nn/producto/producto.module';
import { ProductotallaModule } from './_caso-nn/productotalla/productotalla.module';
import { ProductotallaModule } from './_1caso-nn/productotalla/productotalla.module';
import { ProductoModule } from './_1caso-nn/producto/producto.module';
import { TallaModule } from './_1caso-nn/talla/talla.module';
import { Producto2Module } from './_2caso-nn/producto2/producto2.module';
import { Talla2Module } from './_2caso-nn/talla2/talla2.module';
import { AuthModule } from './_biblioteca/auth/auth.module';
import { UsersModule } from './_biblioteca/users/users.module';


Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), 
    TypeOrmModule.forRoot({
        name:'base1', 
        type: 'mysql',
        host:process.env.URL, //URL del servidor
        port: 3306, // Puerto de MySQL
        username:process.env.USUARIO,
        password:process.env.PASSWORD,
        database:process.env.DBNAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
    }),
    TypeOrmModule.forRoot({
      name:'base2', 
      type: 'mysql',
      host:process.env.URL, //URL del servidor
      port: 3306, // Puerto de MySQL
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database:process.env.DBNAME,
      autoLoadEntities:true,//Esta es la mejor opcion
      synchronize: true
  }),
  UsuarioModule,AlumnosModule,
    ApiModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
