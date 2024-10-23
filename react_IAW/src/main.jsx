import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './Web'
import {Prueba,Adrian} from './Prueba'
import Cabecera from './Cabecera'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prueba />
    <Web />
    <Adrian />
    <Cabecera />
  </StrictMode>,
)
