import Escudo, { Watermark } from './Escudo'
import textos from '../textos'

export default function AlaInvestimento() {
  const { investimento } = textos

  return (
    <section id="investimento" className="faixa-media textura">
      <Watermark side="right" />
      <div className="wrap">
        <div className="eyebrow">{investimento.eyebrow}</div>
        <h2 className="section-title">{investimento.titulo}</h2>
        <p className="section-lead">{investimento.lead}</p>

        <div className="planos reveal">
          {investimento.planos.map((p) => (
            <div className={p.destaque ? 'plano destaque' : 'plano'} key={p.id}>
              {p.selo && <div className="plano-selo">{p.selo}</div>}
              <div className="plano-rotulo">{p.rotulo}</div>
              <div className="plano-valor">
                <b>{p.valor}</b>
                {p.periodo && <span>{p.periodo}</span>}
              </div>
              <div className="plano-detalhe">{p.detalhe}</div>
              {p.total && <div className="plano-total">{p.total}</div>}
              <ul>
                {p.linhas.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="inclui reveal">
          <div className="inclui-head">
            <Escudo />
            <div className="lbl">{investimento.incluiRotulo}</div>
          </div>
          <ul className="check-list">
            {investimento.inclui.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>

        <div className="nota fora reveal">
          <b>{investimento.fora.rotulo}</b> {investimento.fora.texto}
        </div>

        <div className="bloco-rotulo">{investimento.pilotoRotulo}</div>
        <div className="piloto reveal">
          <div className="piloto-cabeca">
            <h4>{investimento.piloto.titulo}</h4>
            <div className="piloto-valor">{investimento.piloto.valor}</div>
            <div className="piloto-detalhe">{investimento.piloto.detalhe}</div>
          </div>
          <div className="piloto-corpo">
            <ul className="check-list">
              {investimento.piloto.linhas.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
            <p className="piloto-conversao">{investimento.piloto.conversao}</p>
          </div>
        </div>

        <div className="nota reveal">
          <b>{investimento.nota.rotulo}</b> {investimento.nota.texto}
        </div>
      </div>
    </section>
  )
}
