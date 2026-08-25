import textos from '../textos'

export default function AlaNumeros() {
  const { numeros } = textos

  return (
    <section id="numeros" className="faixa-clara textura">
      <div className="wrap">
        <div className="eyebrow">{numeros.eyebrow}</div>
        <h2 className="section-title">{numeros.titulo}</h2>
        <p className="section-lead">{numeros.lead}</p>

        <div className="stats-grid reveal">
          {numeros.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="audience-grid">
          <div className="reveal">
            {numeros.barras.map((b, i) => (
              <div className="bar-row" key={i}>
                <div className="top"><span>{b.label}</span><span>{b.pct}%</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${b.pct}%` }}></div></div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div className="bloco-rotulo sem-topo">{numeros.tituloTags}</div>
            <div className="tag-cloud">
              {numeros.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
