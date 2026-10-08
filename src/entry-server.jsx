import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import CuponsApp from './CuponsApp.jsx'

// Usado só no build (vite-prerender.js): gera o HTML das páginas públicas para
// que crawlers que não executam JavaScript (GPTBot, ClaudeBot, PerplexityBot)
// leiam o conteúdo. No navegador, main.jsx/cupons.jsx hidratam esse HTML.
const paginas = { main: App, cupons: CuponsApp }

export function render(pagina) {
  const Pagina = paginas[pagina]
  return renderToString(
    <StrictMode>
      <Pagina />
    </StrictMode>,
  )
}
