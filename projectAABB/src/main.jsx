import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Web, andres  } from './assets/Web.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prueba/>
    <Web/>
  </StrictMode>,
)
