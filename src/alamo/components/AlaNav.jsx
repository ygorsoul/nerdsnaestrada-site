import textos from '../textos'

// Âncoras das seções, na mesma ordem dos rótulos de nav.links em textos.js.
// #equipamentos fica de fora do menu de propósito: a seção existe, mas com dez
// itens a faixa não cabe em tela média sem virar rolagem horizontal.
const ancoras = [
  '#tese', '#quem-somos', '#portfolio', '#a-marca', '#rota',
  '#entregaveis', '#numeros', '#investimento', '#contato',
]

export default function AlaNav() {
  return (
    <nav>
      <div className="brand">
        <a
          href="https://nerdsnaestrada.com/"
          target="_blank"
          rel="noopener"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img className="nav-logo" src="/alamo/logo-nne.png" alt="Nerds na Estrada" />
        </a>
        <span className="nav-x">×</span>
        <img className="nav-ala" src="/alamo/logo-alamo-navy.png" alt={textos.nav.parceiro} />
      </div>
      <div className="nav-right">
        <div className="links">
          {ancoras.map((href, i) => (
            <a key={href} href={href}>{textos.nav.links[i]}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
