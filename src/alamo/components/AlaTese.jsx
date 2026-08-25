import Escudo from './Escudo'
import Rich from './Rich'
import textos from '../textos'

// Três argumentos em linhas de texto, com o número grande na margem. Sem grade
// de cartões: as seções vizinhas já são blocos, e repetir a grade aqui foi o
// que fez a página inteira parecer a mesma coisa do começo ao fim.
export default function AlaTese() {
  const { tese } = textos

  return (
    <section id="tese">
      <div className="wrap">
        <div className="eyebrow">{tese.eyebrow}</div>
        <h2 className="section-title">{tese.titulo}</h2>
        <p className="section-lead">{tese.lead}</p>

        <div className="argumentos">
          {tese.argumentos.map((a, i) => (
            <div className="argumento reveal" key={i}>
              <div className="cifra">
                <b>{a.numero}</b>
                <span>{a.unidade}</span>
              </div>
              <div className="corpo">
                <h4>{a.titulo}</h4>
                <p>{a.texto}</p>
              </div>
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
