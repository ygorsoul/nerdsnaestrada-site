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

        {/* A composição vem antes dos planos de propósito: o número chega
            justificado, item a item, em vez de pedir que a marca aceite um
            valor cheio e só depois entenda de onde ele veio. */}
        <div className="bloco-rotulo">{investimento.composicaoRotulo}</div>
        <p className="bloco-lead">{investimento.composicaoLead}</p>
        <div className="composicao reveal">
          {investimento.composicao.map((c, i) => (
            <div className="linha" key={i}>
              <div className="desc">
                <strong>{c.item}</strong>
                <span>{c.detalhe}</span>
              </div>
              <div className="valor">{c.valor}</div>
            </div>
          ))}
          <div className="linha total">
            <div className="desc"><strong>{investimento.composicaoTotal.rotulo}</strong></div>
            <div className="valor">{investimento.composicaoTotal.valor}</div>
          </div>
          <div className="linha bonus">
            <div className="desc">
              <strong>{investimento.composicaoBonus.rotulo}</strong>
              <span>{investimento.composicaoBonus.detalhe}</span>
            </div>
            <div className="valor">{investimento.composicaoBonus.valor}</div>
          </div>
        </div>

        <div className="planos reveal">
          {investimento.planos.map((p) => (
            <div className={p.destaque ? 'plano destaque' : 'plano'} key={p.id}>
              {p.selo && <div className="plano-selo">{p.selo}</div>}
              <div className="plano-rotulo">{p.rotulo}</div>
              <div className="plano-valor">
                <b>{p.valor}</b>
                <span>{p.periodo}</span>
              </div>
              <div className="plano-detalhe">{p.detalhe}</div>
              <div className="plano-total">{p.total}</div>
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

        <div className="bloco-rotulo">{investimento.custoRotulo}</div>
        <div className="custo-grid reveal">
          {investimento.custo.map((c, i) => (
            <div className="custo" key={i}>
              <div className="c-plano">{c.plano}</div>
              <div className="c-valor">{c.valor}</div>
              <div className="c-nota">{c.nota}</div>
            </div>
          ))}
        </div>

        <div className="nota reveal">
          <b>{investimento.nota.rotulo}</b> {investimento.nota.texto}
        </div>
      </div>
    </section>
  )
}
