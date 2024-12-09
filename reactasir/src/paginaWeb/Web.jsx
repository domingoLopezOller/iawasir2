import React from 'react'
import Header from './Header'
import Contenido from './Contenido'
import Footer from './Footer'
import Aside from './Aside'

function Web() {
  return (
    <>
    <nav >
    <Header/>
    <Contenido/>
    <Aside></Aside>
    <Footer RRSS={[{nombre:"Facebook",url:"hola"},{nombre:"Instagram",url:"adios"},{nombre:"Linkedin",url:"otra"},{nombre:"Google",url:"google"}]}/>
    </nav>
    
    
    </>

  )
}

export default Web