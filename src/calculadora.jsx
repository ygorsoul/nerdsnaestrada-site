import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalculadoraApp from './CalculadoraApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculadoraApp />
  </StrictMode>,
)
