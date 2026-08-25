import textos from '../textos'

// A oferta inteira na segunda tela. Quem só lê o topo já sai sabendo o que
// recebe e quanto custa — o resto da página vira detalhe opcional.
export default function AlaProposta() {
  const { proposta } = textos

  return (
    <section id="proposta" className="proposta-topo">
      <div className="wrap">
        <div className="eyebrow">{proposta.eyebrow}</div>
        <h2 className="section-title">{proposta.titulo}</h2>
        <p className="section-lead">{proposta.lead}</p>

        <div className="oferta reveal">
          <div className="oferta-recebe">
            <div className="lbl">{proposta.recebeRotulo}</div>
            <ul className="check-list">
              {proposta.recebe.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          <div className="oferta-preco">
            <div className="lbl">{proposta.precoRotulo}</div>
            <div className="valor">
              <b>{proposta.mensal}</b>
              <span>{proposta.mensalSufixo}</span>
            </div>
            <div className="detalhe">{proposta.mensalDetalhe}</div>

            <div className="avista">
              <div className="avista-lbl">{proposta.aVistaRotulo}</div>
              <div className="avista-valor">{proposta.aVista}</div>
              <div className="avista-detalhe">{proposta.aVistaDetalhe}</div>
            </div>

            <div className="oferta-meta">
              <span>{proposta.pecas}</span>
              <span>{proposta.tabela}</span>
            </div>

            <div className="oferta-cta">
              <a href="#investimento" className="btn">{proposta.ctaDetalhe}</a>
              <a href="#contato" className="btn ghost">{proposta.ctaContato}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
