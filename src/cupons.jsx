import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import CuponsApp from './CuponsApp.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <CuponsApp />
  </StrictMode>
)

// No build, a página vem pré-renderizada (vite-prerender.js): hidrata em vez de recriar.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
