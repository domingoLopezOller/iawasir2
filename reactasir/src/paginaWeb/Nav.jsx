import React from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import { AiFillSignature } from "react-icons/ai";
import { AiFillRead } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";



function Nav() {
  return (
    <nav className={style.navegacion}>
        <Link to="/"><AiFillHome/>Inicio</Link>  - 
        <Link to="/noticias"><AiFillFileText />Noticias</Link> - 
        <Link to="/noticias/jefatura"><AiFillSignature/> Noticias Jefatura - </Link>
        <Link to="/noticias/informatica"><AiFillRead /> Departamento Informática - </Link>
        <Link to="/about"> <IoMdContact />Contacto</Link> - 
    </nav>
  )
}

export default Nav