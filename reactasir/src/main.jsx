import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './Web'
import {Prueba,Domingo} from './Prueba'
import { Cabecera } from './Cabecera'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prueba />
    <Web />
    <Domingo />
    <Cabecera/>
  </StrictMode>,
)
