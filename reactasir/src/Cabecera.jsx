import React from 'react'

export  function Cabecera() {
  return (
    <h1>Clase de IAW</h1>
  )
}

export  function Cabecera1() {
  return (
    <h2>Probando otra cabecera</h2>
  )
}

export  function Cabecera2(props) {
  return (
    <>
      <li>{props.mensaje}</li>
      <li>{props.otro}</li>
    </>
  )
}

export  function Cabecera3({mensaje,otro}) {
  return (
    <>
      <li>{mensaje}</li>
      <li>{otro}</li>
    </>
  )
}