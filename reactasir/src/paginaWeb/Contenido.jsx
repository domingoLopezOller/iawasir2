import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import Aside from './Aside'

import './contenido.module.css'
import Rutas from './Rutas'
import {Pokemon} from './pokemos'
import Tarjeta from './Cards';
import ImageGallery from './ImageGallery.modules';

function Contenido() {
  return (
    <>
    <Router>
    <Nav/>
    <main>
    
      <aside>
        <Aside/>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
      </aside>
        {/* <Section/> */}
        <section>
        <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/noticias" element={<MySkills/>}>
          <Route path="/noticias/jefatura" element={<Jefatura/>} />  
          <Route path="/noticias/informatica" element={<Informatica/>} />  
        </Route>
        {/* <Route path="/producto/:numero" element={<Producto/>} /> */}
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>  
        </section>
    
    </main>
    </Router>
    </>
  )
}

export default Contenido
function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
        <Tarjeta 
          title="Título 1" 
          text="Descripción de la primera tarjeta" 
          imgSrc="/paisaje.jpeg"
        />
        <Tarjeta 
        />
        <Tarjeta 
        />
     </div>
      <ImageGallery /> {/* Agrega la galería al lado de los "Card Title" */}
    </div>
  );
}

//Sólo se verá con /about en la URL
function About() {
  return <div>
    <h1>Contactos:</h1>
    <p>
        Para ver información de contacto, intenta visitar esta página: 
        <a href="/ruta-no-valida" style={{ color: 'red', textDecoration: 'underline', marginLeft: '5px' }}>
          Página inexistente
        </a>
      </p>
  </div>;
}
function MySkills() {
    return <div>
      <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, labore in tempora quae debitis reiciendis tempore eos laborum rerum officia, ipsam doloribus iusto repudiandae earum sunt voluptatibus alias doloremque beatae!
      Ipsa numquam, error ducimus, voluptate libero sit rem eius dolores neque porro tenetur culpa dolorem cupiditate, doloribus totam odio sint officia iusto eveniet ab labore. Esse dolore molestias perspiciatis ullam?
      Quam quasi quas laudantium ipsam fugit ullam? Aliquam molestiae perferendis odio. Dolorum perspiciatis cum ratione nihil pariatur non voluptatum, ducimus repellat minus! Tempore distinctio, rem similique incidunt blanditiis veritatis facilis!
      Fuga, recusandae. Similique provident id accusantium commodi maxime ea doloremque fugiat vel dignissimos! Veritatis saepe minus maiores magnam assumenda accusantium similique praesentium nam, vel doloribus placeat ullam repudiandae repellat? Delectus.
      Distinctio consequuntur quaerat reiciendis, id animi repudiandae enim quae! Amet eaque ad reiciendis corrupti, ullam hic maxime ea enim est totam? Eum explicabo vitae est praesentium nihil. Quam, error iusto.</p>
      <hr/>
      <Outlet/>
    </div>
  }

function Producto() {
    //Lectura del parámetro de la URL
    const params = useParams();
    
    if (params.numero <1 || params.numero >100){
      return <h2>ESE PRODUCTO NO EXISTE</h2>
    }
    return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}
function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}

function Jefatura() {
  return <h2>NOTICIAS DE JEFATURA</h2>;
}
function Informatica() {
  return <div>
  <h2>NOTICIAS DE INFORMÁTICA</h2>
  <p>El departamento se crea en el curso académico 2001/02 con la implantación del ciclo formativo de grado superior de Administración 
    de Sistemas Informáticos, ampliándose en 2003 con la implantación del ciclo de grado medio de Explotación de Sistemas Informáticos. 
    Actualmente seguimos manteniendo los dos ciclos formativos reconvertidos a LOE, Administración de sistemas informáticos en red y 
    Sistemas Microinformáticos y Redes , así como la Formación Profesional Básica de Informática y Comunicaciones.
    Desde nuestros comienzos mantenemos una estrecha relación con empresas líderes en el sector informático como CajaMar, Enec Informática, 
    Setesur, Telefónica Movistar, Hispatec,Cotronic, Cosentino, Distribuidora Uribe, entre otras.
    Durante la trayectoria de nuestro departamento, nos sentimos orgullosos de que un amplio porcentaje de nuestro alumnado ocupe 
    actualmente puestos de trabajos relacionados con nuestros ciclos (administradores de sistemas, programadores, instaladores,…), hayan 
    emprendido sus propios negocios o hayan continuado con éxito estudios universitarios. 
   </p>
    </div>
}
 
  
