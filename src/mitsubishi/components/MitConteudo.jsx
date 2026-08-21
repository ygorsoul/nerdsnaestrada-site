import { useT } from '../i18n'

export default function MitConteudo() {
  const { conteudo } = useT()

  return (
    <section id="conteudo">
      <div className="wrap">
        <div className="eyebrow">{conteudo.eyebrow}</div>
        <h2 className="section-title">{conteudo.titulo}</h2>
        <p className="section-lead">{conteudo.lead}</p>

        <div className="pillar-grid reveal">
          {conteudo.pilares.map((p, i) => (
            <div className="pillar-card" key={i}>
              <div className="p-eyebrow mono">{p.eyebrow}</div>
              <h4>{p.titulo}</h4>
              <p className="p-desc">{p.desc}</p>
              <div className="format-row">
                <div className="f-label mono">{conteudo.rotulos.curto}</div>
                <p>{p.curto}</p>
              </div>
              <div className="format-row">
                <div className="f-label mono">{conteudo.rotulos.longo}</div>
                <p>{p.longo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="difficulty-ladder reveal">
          <div className="eyebrow" style={{ marginTop: '70px' }}>{conteudo.escadaEyebrow}</div>
          {conteudo.desafios.map((d, i) => (
            <div className="diff-item" key={i}>
              <div className="diff-meter">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span className={n <= d.nivel ? 'dot on' : 'dot'} key={n}></span>
                ))}
              </div>
              <div className="diff-body">
                <div className="diff-tag mono">{d.tag}</div>
                <h4>{d.titulo}</h4>
                <p>{d.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
