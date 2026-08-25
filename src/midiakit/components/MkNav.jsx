export default function MkNav() {
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
        <span className="nav-name">Tabela de valores</span>
      </div>
      <div className="nav-right">
        <div className="links">
          <a href="#video">Vídeo</a>
          <a href="#stories">Stories</a>
          <a href="#especial">Especial</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#adicionais">Adicionais</a>
          <a href="#condicoes">Condições</a>
        </div>
        <a href="#contato" className="btn btn-nav">Falar com a gente</a>
      </div>
    </nav>
  )
}
