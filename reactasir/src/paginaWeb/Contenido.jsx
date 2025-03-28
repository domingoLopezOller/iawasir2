import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import Aside from './Aside'

import './contenido.module.css'
import Rutas from './Rutas'
import { CambiarNombre } from './CambiarNombre';
import { Pokemon } from './Pokemon';
import Tarjeta from './Cards';
import noticias from './noticias.json';

function Contenido() {
  return (
    <>
    <Router>
    <Nav/>
    <main>
    
      <aside>
        <Aside/>
        <Routes>
          <Route path="/about" element={<About2/>} />
        </Routes>
      </aside>
        {/* <Section/> */}
        <section>
        <Routes>
        <Route path="/" element={<Home/>} />
	      <Route path="/noticias" element={<Noticias/>}>
          <Route path="/noticias/jefatura" element={<Jefatura/>} />  
          <Route path="/noticias/informatica" element={<Informatica/>} />  
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/defensa" element={<Defensa/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>  
        </section>
    
    </main>
    </Router>
    </>
  )
}

export default Contenido
function Home(){
  return <>
    <Tarjeta imagen="https://www.micole.net/imagenes/colegio/logo/4534/cura-valera_512.png" titulo="IES Cura Valera" texto="Un buen instituto donde estudiar"/>
    <Tarjeta imagen="https://miro.medium.com/v2/resize:fit:305/1*Q1Nue45Q7N2xMFc6ehEOdg.png" titulo="POKEAPI" texto="API abierta para hacer consultas de Pokemon"/>
    <Tarjeta imagen="https://www.dosde.com/discover/wp-content/uploads/2017/02/alhambra-de-granada-dosde-publishing.jpg" titulo="Granada" texto="Bonita provincia de Andalucía"/>
    
  </>
}

//Sólo se verá con /about en la URL
function About(){
  return <h2>ABOUT</h2>
}

function About2() {
  return <h2>Datos en aside</h2>;
}
function Noticias() {
    return <div>
      <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
      <p>SE HA TERMINADO LA ALERTA ROJA POR INUNDACIÓN </p>
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
  return <>
   
  <h2>NOTICIAS DE JEFATURA</h2>;
  </>
}
function Informatica() {
  return <>
  
 <h2>NOTICIAS DE INFORMATICA</h2>
 <p>¿quieres conocer los nuevos avances en tecnología</p>
 </>
}
function Defensa() {
  //Lectura de las noticias en formato json y muestra la tarjeta correspondiente
  function getNoticias(noticias){ return noticias.map((noticia,index) => {
      return <Tarjeta key= {index} imagen={noticia.imagen} titulo={noticia.titulo} texto={noticia.texto}/>;
    });
  }
  return getNoticias(noticias);
  
}
