import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <Root />
  </StrictMode>
)

// No build, a home vem pré-renderizada (vite-prerender.js): hidrata em vez de
// recriar. Fora da raiz é o fallback de SPA do Root.jsx — o HTML pré-renderizado
// é o da home, então descarta e renderiza do zero.
if (container.hasChildNodes() && window.location.pathname === '/') {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
