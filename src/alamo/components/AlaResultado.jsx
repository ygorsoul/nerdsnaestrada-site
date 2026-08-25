import textos from '../textos'

// A Álamo vende cotação, não alcance. Esta seção existe para tirar a conversa
// do terreno onde a gente perde (CPM contra o Gerenciador de Anúncios) e levar
// para o terreno onde a gente ganha (custo por cotação).
export default function AlaResultado() {
  const { resultado } = textos

  return (
    <section id="resultado">
      <div className="wrap">
        <div className="eyebrow">{resultado.eyebrow}</div>
        <h2 className="section-title">{resultado.titulo}</h2>
        <p className="section-lead">{resultado.lead}</p>

        <div className="medicao">
          {resultado.itens.map((i, k) => (
            <div className="medicao-item reveal" key={k}>
              <div className="n">{String(k + 1).padStart(2, '0')}</div>
              <div className="corpo">
                <h4>{i.titulo}</h4>
                <p>{i.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="nota reveal">
          <b>{resultado.nota.rotulo}</b> {resultado.nota.texto}
        </div>
      </div>
    </section>
  )
}
