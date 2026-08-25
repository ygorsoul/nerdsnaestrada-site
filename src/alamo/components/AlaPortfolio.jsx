import textos from '../textos'

// Cada frente do portfólio da Álamo (carro, casa, pet, saúde, bolso) pareada
// com o momento da viagem em que ela aparece sozinha e o conteúdo que sai daí.
export default function AlaPortfolio() {
  const { portfolio } = textos

  return (
    <section id="portfolio" className="faixa-clara textura">
      <div className="wrap">
        <div className="eyebrow">{portfolio.eyebrow}</div>
        <h2 className="section-title">{portfolio.titulo}</h2>
        <p className="section-lead">{portfolio.lead}</p>

        <div className="familia-lista">
          {portfolio.familias.map((f) => (
            <div className="familia reveal" key={f.n}>
              <div className="cabeca">
                <div className="n">{f.n}</div>
                <h4>{f.familia}</h4>
                <div className="produtos">
                  {f.produtos.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </div>
              <div className="corpo">
                <div className="bloco momento">
                  <div className="lbl">{portfolio.rotulos.momento}</div>
                  <p>{f.momento}</p>
                </div>
                <div className="bloco">
                  <div className="lbl">{portfolio.rotulos.conteudo}</div>
                  <p>{f.conteudo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="nota reveal">
          <b>{portfolio.nota.rotulo}</b> {portfolio.nota.texto}
        </div>
      </div>
    </section>
  )
}
