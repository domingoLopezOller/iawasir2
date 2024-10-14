import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './web.css'
import Web from './Web'
import {Prueba,fabio} from './Prueba'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prueba/>
    <fabio/>
  </StrictMode>,
)
