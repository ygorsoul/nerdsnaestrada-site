import { Suspense, lazy } from 'react'
import App from './App.jsx'

// /cupons tem HTML estático próprio (cupons/index.html) e é o que o host deve
// servir. Se ele resolver essa URL para o index.html da raiz (fallback de SPA),
// renderizamos os cupons mesmo assim em vez de mostrar a home.
// Carregado sob demanda: quem abre a home não baixa esse código.
const CuponsApp = lazy(() => import('./CuponsApp.jsx'))

export default function Root() {
  if (/^\/cupons\/?$/.test(window.location.pathname)) {
    return (
      <Suspense fallback={null}>
        <CuponsApp />
      </Suspense>
    )
  }
  return <App />
}
