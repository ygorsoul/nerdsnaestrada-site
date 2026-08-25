import textos from '../textos'

export default function AlaFooter() {
  const { rodape } = textos

  return (
    <footer>
      <div className="footer-lockup">
        <img className="nne" src="/alamo/logo-nne.png" alt="Nerds na Estrada" />
        <span className="co-x">×</span>
        <img className="ala" src="/alamo/logo-alamo-navy.png" alt="Álamo Benefícios" />
      </div>
      {rodape.linha1}<br />
      {rodape.linha2}
      <p className="legal">{rodape.legal}</p>
    </footer>
  )
}
