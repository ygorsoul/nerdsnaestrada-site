import textos from '../textos'

// Único bloco escuro da página. É a quebra de ritmo no meio do creme, e por
// isso concentra quem somos, alcance e equipamento num lugar só — três seções
// que antes eram separadas e pareciam iguais.
export default function AlaQuemSomos() {
  const { quemSomos } = textos

  return (
    <section id="quem-somos" className="escuro">
      <div className="wrap">
        <div className="eyebrow">{quemSomos.eyebrow}</div>
        <h2 className="section-title">{quemSomos.titulo}</h2>
        <p className="section-lead">{quemSomos.lead}</p>

        <div className="people">
          {quemSomos.pessoas.map((p, i) => (
            <div className="person reveal" key={i}>
              <div className="who">{p.nome}</div>
              <div className="role">{p.papel}</div>
              <p>{p.bio}</p>
            </div>
          ))}
        </div>

        <blockquote className="citacao reveal">
          {quemSomos.citacao}
          <cite>{quemSomos.autor}</cite>
        </blockquote>

        <div className="bloco-rotulo">{quemSomos.alcanceRotulo}</div>
        <div className="alcance reveal">
          {quemSomos.alcance.map((a, i) => (
            <div className="alc" key={i}>
              <div className="num">{a.num}</div>
              <div className="label">{a.label}</div>
            </div>
          ))}
        </div>

        <div className="perfil reveal">
          {quemSomos.perfil.map((b, i) => (
            <div className="perfil-item" key={i}>
              <b>{b.pct}</b>
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        {/* A praça nº 1 é o Rio, sede da Álamo. Vale uma linha própria: é o
            argumento de venda mais forte que os dados de audiência dão. */}
        <div className="praca reveal">
          <div className="lbl">{quemSomos.praca.rotulo}</div>
          <p>{quemSomos.praca.texto}</p>
        </div>

        <p className="fonte reveal">{quemSomos.fonte}</p>

        <div className="gear-linha reveal">
          <span className="lbl">{quemSomos.equipamentosRotulo}</span>
          {quemSomos.equipamentos.map((e, i) => <span className="gear" key={i}>{e}</span>)}
        </div>
      </div>
    </section>
  )
}
