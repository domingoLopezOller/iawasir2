import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet, json } from "react-router-dom";
import Section from './Section'
import Aside from './Aside'
import './contenido.module.css'
import Rutas from './Rutas'
import { Pokemon } from './pokemos'
import { PokemonGrid } from './PokemonGrid'
import Contacto from './Contacto';
import MySkills from './avatar';
import Avatar from 'react-avatar';
import ImageGalleryComponent from './ImageGallery.modules';
import Tarjeta from './Cards';
import ImageCards from './CardsGallery';
import ControlledCarousel from '../Carousel';

function Contenido() {
  return (
    <>
    <Router>
    <Nav/>   
    <main>   
      <Aside>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
      </Aside>
        {/* <Section/> */}
        <section>
        <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/noticias" element={<Noticias/>}/>
        <Route path="/jefatura" element={<Jefatura/>} /> 
        <Route path="/informatica" element={<Informatica/>} /> 
        <Route path="/defensa" element={<Defensa/>} /> 
        {/* <Route path="/noticias" element={<Noticias/>}/>
        <Route path="/jefatura" element={<Jefatura/>}/>
        <Route path="/informatica" element={<Informatica/>}/> */}
        {/* <Route path="/producto/:numero" element={<Producto/>} /> */}
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/about/Domingo" element={<Domingo/>}/>
        <Route path="/about/Jazmin" element={<Jazmin/>}/>
        </Routes>  
        </section>  
        </main>  
    </Router>
    </>
  )
}

export default Contenido
function Home() {
  return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1rem', gap: '2rem' }}>
  <div style={{ flex: 2 }}>
   <ImageCards/>
 </div>
</div>
}

//Sólo se verá con /about en la URL
function About(){
  return <div>
    <Contacto/>
  </div>  
  
}

function Noticias() {
    return  <div>
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
  return <>
  <div>
  <h2>ESTA RUTA NO ES VÁLIDA</h2>
  </div>
  </>
}

function Jefatura() {
  return <>
   <div >
    <ImageCards/>
   </div>
  </>
}

function Informatica(){
  return <>
  <div>
    <ImageGalleryComponent/>
  </div>
  </>
}
function Defensa(){
  return <>
  <div>
  </div>
  </>
}

function Domingo() {
  return (
    <div>
      <h1>Información de contacto del desarrollador Domingo</h1>
     <MySkills ></MySkills>
    </div>
  );
}

function Jazmin() {
  return <>
   <div>
    <h1>  Informacion de contacto de los desarrolladores de esta Web
    </h1> <MySkills />
    <h2>Desarrollador: Jazmin</h2>
  </div>
  </>
}