import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Web from './Web.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web />
  </StrictMode>,
)
