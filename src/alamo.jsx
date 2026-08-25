import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AlamoApp from './alamo/AlamoApp.jsx'

// Sem index.css aqui de propósito: a proposta tem CSS próprio (com reset e
// estilos globais) e não deve herdar o Tailwind/preflight do resto do site.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlamoApp />
  </StrictMode>,
)
