import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import web from './web'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <web/>
  </StrictMode>,
)
