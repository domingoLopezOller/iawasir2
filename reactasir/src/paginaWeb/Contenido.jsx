import React from 'react'
import Nav from './Nav'
import Section from './Section'
import Aside from './Aside'

import './contenido.module.css'
import Rutas from './Rutas'

function Contenido() {
  return (
    <>
    <Nav/>
    <main>
        <Aside/>
        {/* <Section/> */}
        <section>
          <Rutas/>np
        </section>
    </main>
    </>
  )
}

export default Contenido