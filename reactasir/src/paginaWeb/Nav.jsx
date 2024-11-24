import React from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { AiFillRobot } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";
import { AiFillRead } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";



function Nav() {
  return (
    <nav className={style.navegacion}>
        <Link to="/"><AiFillHome/>Inicio</Link>  
        <Link to="/noticias"><AiFillRobot />G1 </Link> 
        <Link to="/jefatura"><AiFillSmile/> G2 </Link>
        <Link to="/informatica"><AiFillRead /> G3 </Link>
        <div className={style.contactoDropdown}>
        <span><IoMdContact />Contacto</span>
        <div className={style.dropdownContent}>
          <Link to="/about/domingo">Domingo</Link>
          <Link to="/about/jazmin">Jazmin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;