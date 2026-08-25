import textos from '../textos'

export default function MkFooter() {
  const { rodape } = textos

  return (
    <footer>
      <img className="footer-logo" src="/alamo/logo-nne.png" alt="Nerds na Estrada" />
      {rodape.linha1}<br />
      {rodape.linha2}
      <p className="legal">{rodape.legal}</p>
    </footer>
  )
}
