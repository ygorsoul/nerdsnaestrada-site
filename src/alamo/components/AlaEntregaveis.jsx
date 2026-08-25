import textos from '../textos'

export default function AlaEntregaveis() {
  const { entregaveis } = textos

  return (
    <section id="entregaveis" className="entregaveis">
      <div className="wrap">
        <div className="eyebrow">{entregaveis.eyebrow}</div>
        <h2 className="section-title">{entregaveis.titulo}</h2>
        <p className="section-lead">{entregaveis.lead}</p>

        <div className="bloco-rotulo">{entregaveis.mensalRotulo}</div>
        <div className="mensal-grid reveal">
          {entregaveis.mensal.map((m, i) => (
            <div className="mensal-card" key={i}>
              <div className="qtd">
                <b>{m.qtd}</b>
                <span>{m.unidade}</span>
              </div>
              <div className="corpo">
                <h4>{m.titulo}</h4>
                <p>{m.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bloco-rotulo">{entregaveis.calendarioRotulo}</div>
        <p className="bloco-lead">{entregaveis.calendarioLead}</p>
        <div className="calendario reveal">
          {entregaveis.calendario.map((c) => (
            <div className="mes" key={c.mes}>
              <div className="topo">
                <div className="num">{c.mes}</div>
                <div className="frente">{c.frente}</div>
              </div>
              <h5>{c.tema}</h5>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>

        <div className="bloco-rotulo">{entregaveis.anoRotulo}</div>
        <div className="stats-grid reveal">
          {entregaveis.ano.map((a, i) => (
            <div className="stat" key={i}>
              <div className="num">{a.num}</div>
              <div className="label">{a.label}</div>
            </div>
          ))}
        </div>

        <div className="bloco-rotulo">{entregaveis.extrasRotulo}</div>
        <ul className="check-list reveal">
          {entregaveis.extras.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>

        <div className="nota reveal">
          <b>{entregaveis.nota.rotulo}</b> {entregaveis.nota.texto}
        </div>
      </div>
    </section>
  )
}
