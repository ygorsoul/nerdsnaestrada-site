import { Watermark } from './Dia'
import { useT } from '../i18n'

export default function MitPajero() {
  const { pajero } = useT()

  return (
    <section id="pajero" className="reliability">
      <Watermark side="right" />
      <div className="wrap">
        <div className="eyebrow">{pajero.eyebrow}</div>
        <h2 className="section-title">{pajero.titulo}</h2>
        <p className="section-lead">{pajero.lead}</p>

        <div className="media-banner reveal">
          <img src="/mitsubishi/pajero-hero.jpg" alt={pajero.imagemAlt} />
          <div className="media-cap"><b>{pajero.legenda.marca}</b> {pajero.legenda.resto}</div>
        </div>

        <div className="reliability-grid">
          <div>
            <div className="spec-sheet reveal">
              {pajero.ficha.map(([rotulo, valor], i) => (
                <div className="spec-row" key={i}>
                  <span>{rotulo}</span><span>{valor}</span>
                </div>
              ))}
            </div>
            <div className="route-note reveal">
              <b>{pajero.nota.rotulo}</b> {pajero.nota.texto}
            </div>
          </div>
          <div className="terrain-list reveal">
            {pajero.terrenos.map((terreno, i) => (
              <div className="terrain-item" key={i}>
                <div className="mk mono">{terreno.mk}</div>
                <p><strong>{terreno.titulo}</strong>{terreno.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
