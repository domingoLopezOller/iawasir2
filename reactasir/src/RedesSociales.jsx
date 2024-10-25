import React from 'react'

/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

function RedesSociales({RRSS}) {
  return (
    <div>
        {
            RRSS.map((red,index) => {
            if (red==="Facebook"){
                return <a key= {index} href={red.url} >  <FacebookIcon sx={{ fontSize: 40, color:"red" }}/>  {red.nombre}</a>
            }
            else if(red==="Instagram"){
                return <a key= {index} href={red.url} >  <InstagramIcon sx={{ fontSize: 40, color: "green" }}/>  {red.nombre}</a>
            }
            else{
                return <a key= {index} href={red.url} >  <LanguageIcon sx={{ fontSize: 40, color:"brown" }}/>  {red.nombre}</a>
            }
          })
        }
        {/*Enlace del instituto */}
        <a href="https://iescuravalera.es" > <img src="/logo.png" width="50" alt="logoIES"/> IES Cura Valera </a>
    </div>
  )
}

export default RedesSociales