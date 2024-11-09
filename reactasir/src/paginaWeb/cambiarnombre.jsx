import React, { useState } from 'react';
import './cabecera.css'
export const Cabecera = () => {
 const [nombre,setNombre]=useState("Domingo López");
 const cambiarNombre=(nuevoNombre) =>{
setNombre(nuevoNombre);
 }
 return (
 <>
 <h1>Mi nombre es: {nombre}</h1>
 <button onClick={e => cambiarNombre
 ("otro nombre")}>texto2</button>
 </>
 );
};
