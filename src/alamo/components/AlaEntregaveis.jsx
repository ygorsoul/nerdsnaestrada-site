import Escudo from './Escudo'
import Rich from './Rich'
import textos from '../textos'

export default function AlaEntregaveis() {
  const { entregaveis: e } = textos

  return (
    <section id="entregaveis" className="faixa-clara textura">
      <div className="wrap">
        <div className="eyebrow">{e.eyebrow}</div>
        <h2 className="section-title">{e.titulo}</h2>
        <p className="section-lead">{e.lead}</p>

        <div className="bloco-rotulo">{e.mensalRotulo}</div>
        <div className="mensal-grid reveal">
          {e.mensal.map((m, i) => (
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

        {/* Doze cartões viravam uma parede visual igual à das outras seções.
            Como tabela, o mesmo conteúdo ocupa um terço do espaço e se lê de
            uma vez só. */}
        <div className="bloco-rotulo">{e.calendarioRotulo}</div>
        <p className="bloco-lead">{e.calendarioLead}</p>
        <div className="agenda reveal">
          <div className="agenda-cab" aria-hidden="true">
            {e.calendarioColunas.map((c) => <div key={c}>{c}</div>)}
          </div>
          {e.calendario.map((c) => (
            <div className="agenda-linha" key={c.mes}>
              <div className="mes">{c.mes}</div>
              <div className="tema">
                <strong>{c.tema}</strong>
                <span>{c.texto}</span>
              </div>
              <div className="frente">{c.frente}</div>
            </div>
          ))}
        </div>

        <div className="bloco-rotulo">{e.ondeRotulo}</div>
        <ul className="onde reveal">
          {e.onde.map((o, i) => (
            <li key={i}>
              <span className="tag">{o.tag}</span>
              <span className="txt"><strong>{o.titulo}</strong> {o.texto}</span>
            </li>
          ))}
        </ul>

        <div className="exclusive-strip reveal">
          <Escudo />
          <div className="txt">
            <div className="lbl">{e.faixa.rotulo}</div>
            <p><Rich texto={e.faixa.texto} tag="b" /></p>
          </div>
        </div>

        <div className="bloco-rotulo">{e.extrasRotulo}</div>
        <ul className="check-list reveal">
          {e.extras.map((x, i) => <li key={i}>{x}</li>)}
        </ul>

        <div className="nota reveal">
          <b>{e.nota.rotulo}</b> {e.nota.texto}
        </div>
      </div>
    </section>
  )
}
