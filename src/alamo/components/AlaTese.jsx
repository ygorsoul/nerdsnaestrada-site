import Escudo, { Watermark } from './Escudo'
import Rich from './Rich'
import textos from '../textos'

export default function AlaTese() {
  const { tese } = textos

  return (
    <section id="tese" className="faixa-media textura">
      <Watermark side="right" />
      <div className="wrap">
        <div className="eyebrow">{tese.eyebrow}</div>
        <h2 className="section-title">{tese.titulo}</h2>
        <p className="section-lead">{tese.lead}</p>

        <div className="why-grid reveal">
          {tese.cards.map((c) => (
            <div className="why-card" key={c.n}>
              <div className="why-n"><Escudo /> {c.n}</div>
              <h4>{c.titulo}</h4>
              {c.paragrafos.map((texto, j) => (
                <p key={j}><Rich texto={texto} /></p>
              ))}
            </div>
          ))}
        </div>

        <div className="exclusive-strip reveal">
          <Escudo />
          <div className="txt">
            <div className="lbl">{tese.faixa.rotulo}</div>
            <p><Rich texto={tese.faixa.texto} tag="b" /></p>
          </div>
        </div>
      </div>
    </section>
  )
}
