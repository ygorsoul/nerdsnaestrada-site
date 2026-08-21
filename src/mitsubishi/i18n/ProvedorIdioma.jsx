import { useEffect, useMemo, useState } from 'react'
import { Contexto } from './contexto'
import { IDIOMAS } from './idiomas'

const CHAVE = 'mitsubishi-idioma'

function lerSalvo() {
  try {
    return localStorage.getItem(CHAVE)
  } catch {
    return null // navegação privada / cookies bloqueados
  }
}

// Ordem de decisão: ?lang= da URL (permite mandar o link já no idioma certo)
// → escolha guardada no navegador → português, o idioma original do documento.
function idiomaInicial() {
  const daUrl = new URLSearchParams(window.location.search).get('lang')
  const candidato = daUrl || lerSalvo()
  return IDIOMAS.some((i) => i.codigo === candidato) ? candidato : 'pt'
}

export default function ProvedorIdioma({ children }) {
  const [idioma, definirIdioma] = useState(idiomaInicial)
  const dicionario = useMemo(
    () => IDIOMAS.find((i) => i.codigo === idioma).dicionario,
    [idioma],
  )

  useEffect(() => {
    document.documentElement.lang = dicionario.html.lang
    document.title = dicionario.html.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dicionario.html.description)

    try {
      localStorage.setItem(CHAVE, idioma)
    } catch {
      // sem persistência: a escolha vale só para esta visita
    }

    // Mantém o idioma na URL para que o link compartilhado abra igual.
    const url = new URL(window.location.href)
    if (idioma === 'pt') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', idioma)
    }
    window.history.replaceState(null, '', url)
  }, [idioma, dicionario])

  // Bebas Neue e IBM Plex não têm glifos japoneses. A Noto Sans JP só é baixada
  // quando alguém escolhe japonês — quem lê em PT ou EN não paga por ela.
  useEffect(() => {
    if (idioma !== 'ja' || document.getElementById('fonte-jp')) return
    const link = document.createElement('link')
    link.id = 'fonte-jp'
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap'
    document.head.appendChild(link)
  }, [idioma])

  const valor = useMemo(() => ({ idioma, definirIdioma, t: dicionario }), [idioma, dicionario])
  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}
