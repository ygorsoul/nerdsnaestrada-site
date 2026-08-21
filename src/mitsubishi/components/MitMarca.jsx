import Dia, { Watermark } from './Dia'
import Rich from './Rich'
import { useT } from '../i18n'

export default function MitMarca() {
  const { marca } = useT()

  return (
    <section id="a-marca" className="why-mit">
      <Watermark side="right" />
      <div className="wrap">
        <div className="eyebrow">{marca.eyebrow}</div>
        <h2 className="section-title">{marca.titulo}</h2>
        <p className="section-lead">{marca.lead}</p>

        <div className="why-grid reveal">
          {marca.cards.map((c, i) => (
            <div className="why-card" key={i}>
              <div className="why-n"><Dia /> {c.n}</div>
              <h4>{c.titulo}</h4>
              {c.paragrafos.map((texto, j) => (
                <p key={j}><Rich texto={texto} /></p>
              ))}
            </div>
          ))}
        </div>

        <div className="exclusive-strip reveal">
          <Dia />
          <div className="txt">
            <div className="lbl">{marca.faixa.rotulo}</div>
            <p><Rich texto={marca.faixa.texto} tag="b" /></p>
          </div>
        </div>
      </div>
    </section>
  )
}
