import { useT } from '../i18n'

export default function MitRota() {
  const { rota } = useT()

  return (
    <section id="rota" className="route-section">
      <div className="wrap">
        <div className="eyebrow">{rota.eyebrow}</div>
        <h2 className="section-title">{rota.titulo}</h2>
        <p className="section-lead">{rota.lead}</p>

        <div className="route-line-wrap">
          {rota.paradas.map((p, i) => (
            <div className="stop reveal" key={i}>
              <div className="km mono">{p.km}</div>
              <h4>{p.titulo}</h4>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
        <div className="route-note reveal">
          <b>{rota.nota.rotulo}</b> {rota.nota.texto}
        </div>
      </div>
    </section>
  )
}
