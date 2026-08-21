import { Suspense, lazy } from 'react'
import App from './App.jsx'

// /cupons e /mitsubishi têm HTML estático próprio (cupons/index.html e
// mitsubishi/index.html) e é o que o host deve servir. Se ele resolver essas
// URLs para o index.html da raiz (fallback de SPA), renderizamos a página
// certa mesmo assim em vez de mostrar a home.
// Carregados sob demanda: quem abre a home não baixa esse código.
const CuponsApp = lazy(() => import('./CuponsApp.jsx'))
const MitsubishiApp = lazy(() => import('./mitsubishi/MitsubishiApp.jsx'))

const rotas = [
  { padrao: /^\/cupons\/?$/, Pagina: CuponsApp },
  { padrao: /^\/mitsubishi\/?$/, Pagina: MitsubishiApp },
]

export default function Root() {
  const rota = rotas.find((r) => r.padrao.test(window.location.pathname))

  if (rota) {
    const { Pagina } = rota
    return (
      <Suspense fallback={null}>
        <Pagina />
      </Suspense>
    )
  }
  return <App />
}
