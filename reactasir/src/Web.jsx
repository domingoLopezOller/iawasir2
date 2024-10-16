import React from 'react'
import {Cabecera, Cabecera1, Cabecera2, Cabecera3 } from './Cabecera'

function Web() {
  return (
    <div>
      <div>Víctor Álvarez</div>
      <Cabecera/>
      <Cabecera/>
      <Cabecera1/>
      <ol>
      <Cabecera2 mensaje="que guay es REACT" otro="otro texto"/>
      <Cabecera3 mensaje="vaya rollo a las 14:30" otro="otro Texto"/>
      <Cabecera3  otro="usando cabecera3"/>
      </ol>
      
    </div>
  )
}

export default Web