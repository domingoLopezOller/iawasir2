import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import Aside from './Aside'

import './contenido.module.css'
import Rutas from './Rutas'

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
  return <div>home</div>;
}

//Sólo se verá con /about en la URL
function About() {
  return <div>about</div>;
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
  return <h2>NOTICIAS DE INFORMÁTICA</h2>;
}