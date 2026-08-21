import Dia from './Dia'
import LangSwitch from './LangSwitch'
import { useT } from '../i18n'

// Âncoras das seções, na mesma ordem dos rótulos de nav.links nos dicionários.
const ancoras = [
  '#pajero', '#post-pajero', '#quem-somos', '#a-marca', '#rota',
  '#conteudo', '#numeros', '#proposta', '#contato',
]

export default function MitNav() {
  const t = useT()

  return (
    <nav>
      <div className="brand">
        <a
          href="https://nerdsnaestrada.com/"
          target="_blank"
          rel="noopener"
          style={{ display: 'flex', alignItems: 'center', gap: '13px', textDecoration: 'none' }}
        >
          <img className="nav-logo" src="/mitsubishi/logo-nne.png" alt="Nerds na Estrada" />
        </a>
        <span className="nav-x">×</span>
        <Dia className="dia nav-dia" />
        <span className="nav-name">{t.nav.parceiro}</span>
      </div>
      <div className="nav-right">
        <div className="links">
          {ancoras.map((href, i) => (
            <a key={href} href={href}>{t.nav.links[i]}</a>
          ))}
        </div>
        <LangSwitch />
      </div>
    </nav>
  )
}
