import { useT } from '../i18n'

export default function MitFooter() {
  const { rodape } = useT()

  return (
    <footer>
      <div className="footer-lockup">
        <img src="/mitsubishi/logo-nne.png" alt="Nerds na Estrada" />
        <span className="co-x">×</span>
        <img src="/mitsubishi/logo-mitsubishi.png" alt="Mitsubishi Motors" />
      </div>
      {rodape.linha1}<br />
      {rodape.linha2}
      <p className="legal">{rodape.legal}</p>
    </footer>
  )
}
