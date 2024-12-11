import React from 'react'
import { IoIosContact } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
        <Link to="/">Inicio</Link> - 
        <Link to="/noticias">Noticias</Link> - 
        <Link to="/noticias/jefatura"> Noticias Jefatura - </Link>
        <Link to="/noticias/informatica"> Departamento Informática - </Link>
        <Link to="/noticias/otra"> OTRA - </Link>
        <Link to="/defensa"> <IoShieldCheckmarkOutline /> DEFENSA - </Link>
        <Link to="/about"><IoIosContact />Contacto</Link> - 
    </nav>
  )
}

export default Nav