import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CuponsApp from './CuponsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CuponsApp />
  </StrictMode>,
)
