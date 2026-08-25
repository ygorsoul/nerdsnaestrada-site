import Escudo from './Escudo'
import Rich from './Rich'
import textos from '../textos'

export default function AlaMarca() {
  const { marca } = textos

  return (
    <section id="a-marca">
      <div className="wrap">
        <div className="eyebrow">{marca.eyebrow}</div>
        <h2 className="section-title">{marca.titulo}</h2>
        <p className="section-lead">{marca.lead}</p>

        <div className="placement-grid reveal">
          {marca.pontos.map((p, i) => (
            <div className="placement" key={i}>
              <div className="p-tag">{p.tag}</div>
              <h4>{p.titulo}</h4>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>

        <div className="exclusive-strip reveal">
          <Escudo />
          <div className="txt">
            <div className="lbl">{marca.faixa.rotulo}</div>
            <p><Rich texto={marca.faixa.texto} tag="b" /></p>
          </div>
        </div>
      </div>
    </section>
  )
}
