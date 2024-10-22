import React from 'react'
import {Cabecera, Cabecera1, Cabecera2, Cabecera3 } from './Cabecera'
import { ListarItems, ListarItems2, ListarItems3, ListarTabla, ListarTablas } from './ListarItems'
import ControlledCarousel from './Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Web() {
  return (
    <div>
      <div>Domingo Lópe z OLLER</div>
      <Cabecera/>
      <Cabecera/>
      <Cabecera1/>
      <ol>
      <Cabecera2 mensaje="que guay es REACT" otro="otro texto"/>
      <Cabecera3 mensaje="vaya rollo a las 14:30" otro="otro Texto"/>
      <Cabecera3  otro="usando cabecera3"/>
      </ol>
      <p>Listar items de un array con cadenas</p>
      <ListarItems/>
      <p>Listar items de un array con JSON</p>
      <ListarItems2/>
      <p>Listar los héroes de Marvel del fichero heroes.json</p>
      <ListarItems3/>
      <h3>Tabla con heroes.json</h3>
      {/* <ListarTabla tipo="DC Comics"/> */}
      <ListarTablas publisher="DC Comics" color="red"/>

      <h2> UTILIZANDO BOOTSTRAP</h2>
      <ControlledCarousel/>

    </div>
  )
}

export default Web