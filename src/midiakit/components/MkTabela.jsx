// Uma tabela por bloco. Em telas largas vira <table>; abaixo de 760px cada
// linha vira um cartão empilhado, porque tabela de 3 colunas não sobrevive a
// 400px de largura sem rolagem horizontal.
export default function MkTabela({ bloco }) {
  const { id, eyebrow, titulo, lead, colunas, linhas, destaque, valoresDescritivos } = bloco
  const temDescricao = colunas.length === 3

  return (
    <section id={id} className="bloco">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{titulo}</h2>
        {lead && <p className="section-lead">{lead}</p>}

        <div className={valoresDescritivos ? 'tabela valores-texto reveal' : 'tabela reveal'}>
          <div className="cabecalho" role="row" aria-hidden="true">
            {colunas.map((c, i) => (
              <div className={i === colunas.length - 1 ? 'col valor' : 'col'} key={c}>{c}</div>
            ))}
          </div>
          {linhas.map((l, i) => (
            <div className={destaque === i ? 'linha destaque' : 'linha'} key={i}>
              <div className="col item">
                <strong>{l[0]}</strong>
                <span className="rotulo-mobile">{colunas[0]}</span>
              </div>
              {temDescricao && (
                <div className="col desc">
                  {l[1]}
                </div>
              )}
              <div className="col valor">
                <span className="rotulo-mobile">{colunas[colunas.length - 1]}</span>
                <b>{l[l.length - 1]}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
