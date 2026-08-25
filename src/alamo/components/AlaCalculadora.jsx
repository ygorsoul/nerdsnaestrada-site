import { useState, useMemo } from 'react'
import textos, {
  precos, adicionais, tarifaDuracao, exclusividadeInclusa, pacoteProposto,
} from '../textos'

// `numeros.real` é para os valores redondos da proposta. Aqui os totais são
// calculados e caem em centavos, então o formatador mostra 0 ou 2 casas — nunca
// uma só, que era o que fazia aparecer "R$ 54.069,6".
const moeda = (v) => {
  const n = Math.round(v * 100) / 100
  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })
}

const MAX_MENSAL = 4

// Todas as peças mensais existem no estado, mesmo as que o pacote proposto não
// usa: assim o stepper de cada linha lê e escreve no mesmo lugar.
function estadoInicial() {
  const mensais = {}
  textos.calculadora.mensais.forEach((m) => {
    mensais[m.chave] = pacoteProposto.mensais[m.chave] || 0
  })
  return {
    meses: pacoteProposto.meses,
    mensais,
    storiesPack: pacoteProposto.storiesPack,
    brandDay: pacoteProposto.brandDay,
    momentoAssinatura: pacoteProposto.momentoAssinatura,
    exclusividade: pacoteProposto.exclusividade,
    direitos: pacoteProposto.direitos,
    expressa: pacoteProposto.expressa,
  }
}

// A ordem de aplicação é a mesma da composição exibida na seção anterior:
// produção → tarifa de duração → exclusividade → direitos → entrega expressa,
// e só então a produção especial entra, porque brand day é por evento e não
// acompanha nenhum desses multiplicadores.
function calcular(e) {
  const producaoMes =
    textos.calculadora.mensais.reduce((s, m) => s + e.mensais[m.chave] * precos[m.chave], 0) +
    (precos.stories[e.storiesPack] || 0)

  const pecasMes =
    textos.calculadora.mensais.reduce((s, m) => s + e.mensais[m.chave], 0) + e.storiesPack

  const base = producaoMes * e.meses
  const tarifa = tarifaDuracao(e.meses)
  const premioDuracao = base * (tarifa - 1)

  let v = base + premioDuracao

  const exclusividadeGratis = exclusividadeInclusa(e.meses)
  const valExclusividade = e.exclusividade && !exclusividadeGratis ? v * adicionais.exclusividade : 0
  v += valExclusividade

  const taxaDireitos =
    e.direitos === '90' ? adicionais.direitos90 : e.direitos === '12m' ? adicionais.direitos12m : 0
  const valDireitos = v * taxaDireitos
  v += valDireitos

  const valExpressa = e.expressa ? v * adicionais.expressa : 0
  v += valExpressa

  const especial = e.brandDay * precos.brandDay
  const total = v + especial

  return {
    producaoMes, pecasMes, pecas: pecasMes * e.meses,
    base, tarifa, premioDuracao,
    valExclusividade, exclusividadeGratis,
    valDireitos, valExpressa, especial,
    semEspecial: v, total,
    vazio: producaoMes === 0,
  }
}

function Stepper({ valor, min = 0, max = MAX_MENSAL, onChange, rotulo }) {
  return (
    <div className="stepper">
      <button type="button" onClick={() => onChange(Math.max(min, valor - 1))} disabled={valor <= min} aria-label={`Menos um ${rotulo}`}>−</button>
      <span className="qtd">{valor}</span>
      <button type="button" onClick={() => onChange(Math.min(max, valor + 1))} disabled={valor >= max} aria-label={`Mais um ${rotulo}`}>+</button>
    </div>
  )
}

export default function AlaCalculadora() {
  const t = textos.calculadora
  // Sempre abre no plano recomendado: nada de restaurar a última configuração,
  // para que cada visita à proposta comece pelo pacote que a gente oferece.
  const [e, setE] = useState(estadoInicial)

  const r = useMemo(() => calcular(e), [e])
  const inicial = useMemo(() => estadoInicial(), [])
  const alterado = JSON.stringify(e) !== JSON.stringify(inicial)

  // O comparativo sempre confronta a mesma configuração em duas durações. A
  // produção especial fica de fora: brand day é por evento e não muda de preço
  // com o tamanho do contrato, então incluí-la diluiria a diferença.
  const avulso = useMemo(() => calcular({ ...e, meses: 1, brandDay: 0 }), [e])
  const anual = useMemo(() => calcular({ ...e, meses: 12, brandDay: 0 }), [e])
  const porMesAtual = r.semEspecial / e.meses
  const porMesAnual = anual.semEspecial / 12
  const pctMaisCaro = porMesAtual > 0 ? Math.round((avulso.total / porMesAtual - 1) * 100) : 0
  const pctMenosAnual = avulso.total > 0 ? Math.round((1 - porMesAnual / avulso.total) * 100) : 0
  const plural = (n) => `${n} ${n === 1 ? 'mês' : 'meses'}`

  const set = (patch) => setE((a) => ({ ...a, ...patch }))
  const setMensal = (chave, valor) => setE((a) => ({ ...a, mensais: { ...a.mensais, [chave]: valor } }))

  const mensagem = () => {
    const linhas = [t.ctaMensagem, '', `Contrato: ${e.meses} ${t.duracaoSufixo}`]
    t.mensais.forEach((m) => { if (e.mensais[m.chave]) linhas.push(`${e.mensais[m.chave]}× ${m.nome} por mês`) })
    if (e.storiesPack) linhas.push(`${e.storiesPack} gavetas de story por mês`)
    if (e.brandDay) linhas.push(`${e.brandDay}× brand day`)
    if (e.momentoAssinatura) linhas.push(`${e.momentoAssinatura}× momento assinatura (${t.linhas.sobConsulta})`)
    if (e.exclusividade) linhas.push('Exclusividade de categoria')
    if (e.direitos !== 'nenhum') linhas.push(`Direitos de uso: ${e.direitos === '90' ? '90 dias' : '12 meses'}`)
    if (e.expressa) linhas.push('Entrega expressa')
    linhas.push('', `Total: ${moeda(r.total)} (${moeda(r.total / e.meses)}/mês)`)
    return encodeURIComponent(linhas.join('\n'))
  }

  return (
    <section id="calculadora" className="faixa-clara textura">
      <div className="wrap">
        <div className="eyebrow">{t.eyebrow}</div>
        <h2 className="section-title">{t.titulo}</h2>
        <p className="section-lead">{t.lead}</p>

        <div className="calc">
          <div className="calc-controles">
            <div className="calc-grupo">
              <div className="calc-grupo-titulo">{t.mensaisRotulo}</div>
              {t.mensais.map((m) => (
                <div className={e.mensais[m.chave] ? 'calc-linha ativa' : 'calc-linha'} key={m.chave}>
                  <div className="info">
                    <strong>{m.nome}</strong>
                    <span>{m.detalhe} · {moeda(precos[m.chave])}</span>
                  </div>
                  <Stepper valor={e.mensais[m.chave]} rotulo={m.nome} onChange={(v) => setMensal(m.chave, v)} />
                </div>
              ))}
            </div>

            <div className="calc-grupo">
              <div className="calc-grupo-titulo">{t.storiesRotulo}</div>
              <div className="calc-opcoes">
                {t.storiesOpcoes.map((n) => (
                  <button
                    type="button"
                    key={n}
                    className={e.storiesPack === n ? 'opcao ativa' : 'opcao'}
                    onClick={() => set({ storiesPack: n })}
                  >
                    <b>{n === 0 ? t.storiesNenhum : n}</b>
                    {n > 0 && <span>{moeda(precos.stories[n])}</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-grupo">
              <div className="calc-grupo-titulo">{t.unicosRotulo}</div>
              {t.unicos.map((u) => (
                <div className={e[u.chave] ? 'calc-linha ativa' : 'calc-linha'} key={u.chave}>
                  <div className="info">
                    <strong>{u.nome}</strong>
                    <span>{u.detalhe} · {u.sobConsulta ? t.linhas.sobConsulta : moeda(precos[u.chave])}</span>
                  </div>
                  <Stepper valor={e[u.chave]} max={u.max} rotulo={u.nome} onChange={(v) => set({ [u.chave]: v })} />
                </div>
              ))}
            </div>

            <div className="calc-grupo">
              <div className="calc-grupo-titulo">{t.duracaoRotulo}</div>
              <div className="calc-duracao">
                <input
                  type="range" min="1" max="12" step="1" value={e.meses}
                  onChange={(ev) => set({ meses: Number(ev.target.value) })}
                  aria-label={t.duracaoRotulo}
                />
                <div className="valor">
                  <b>{e.meses}</b>
                  <span>{t.duracaoSufixo}</span>
                  {r.tarifa > 1 && <em>+{Math.round((r.tarifa - 1) * 100)}%</em>}
                </div>
              </div>
              <p className="calc-nota">{t.duracaoNota}</p>
            </div>

            <div className="calc-grupo">
              <div className="calc-grupo-titulo">{t.direitosRotulo}</div>
              <div className="calc-opcoes largas">
                {t.direitosOpcoes.map((o) => (
                  <button
                    type="button"
                    key={o.valor}
                    className={e.direitos === o.valor ? 'opcao ativa' : 'opcao'}
                    onClick={() => set({ direitos: o.valor })}
                  >
                    <b>{o.nome}</b>
                    <span>{o.detalhe}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-grupo">
              <div className="calc-grupo-titulo">{t.adicionaisRotulo}</div>
              {t.adicionaisItens.map((a) => {
                const gratis = a.chave === 'exclusividade' && r.exclusividadeGratis
                return (
                  <label className={e[a.chave] ? 'calc-toggle ativa' : 'calc-toggle'} key={a.chave}>
                    <input type="checkbox" checked={e[a.chave]} onChange={(ev) => set({ [a.chave]: ev.target.checked })} />
                    <span className="marca" aria-hidden="true" />
                    <span className="info">
                      <strong>{a.nome}</strong>
                      <span>{gratis ? a.inclusaNota : a.detalhe}</span>
                    </span>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="calc-resumo">
            <div className="resumo-cartao">
              <div className="resumo-titulo">
                {t.resumoRotulo}
                {!alterado && <span className="selo-recomendado">{t.recomendado}</span>}
              </div>

              {r.vazio ? (
                <p className="resumo-vazio">{t.vazio}</p>
              ) : (
                <>
                  <div className="resumo-linhas">
                    <div className="rl"><span>{t.linhas.producao}</span><b>{moeda(r.base)}</b></div>
                    {r.premioDuracao > 0 && (
                      <div className="rl"><span>{t.linhas.duracao} · +{Math.round((r.tarifa - 1) * 100)}%</span><b>{moeda(r.premioDuracao)}</b></div>
                    )}
                    {e.exclusividade && (
                      <div className="rl">
                        <span>{t.linhas.exclusividade}</span>
                        <b className={r.exclusividadeGratis ? 'gratis' : ''}>
                          {r.exclusividadeGratis ? t.linhas.inclusa : moeda(r.valExclusividade)}
                        </b>
                      </div>
                    )}
                    {r.valDireitos > 0 && (
                      <div className="rl"><span>{t.linhas.direitos}</span><b>{moeda(r.valDireitos)}</b></div>
                    )}
                    {r.valExpressa > 0 && (
                      <div className="rl"><span>{t.linhas.expressa}</span><b>{moeda(r.valExpressa)}</b></div>
                    )}
                    {r.especial > 0 && (
                      <div className="rl"><span>{t.linhas.especial}</span><b>{moeda(r.especial)}</b></div>
                    )}
                    {e.momentoAssinatura > 0 && (
                      <div className="rl"><span>{e.momentoAssinatura}× Momento assinatura</span><b className="gratis">{t.linhas.sobConsulta}</b></div>
                    )}
                  </div>

                  <div className="resumo-total">
                    <div className="rotulo">{t.linhas.total}</div>
                    <div className="valor">{moeda(r.total)}</div>
                    <div className="por">
                      {moeda(r.total / e.meses)} {t.linhas.porMes.toLowerCase()} · {r.pecas} {t.linhas.pecas}
                    </div>
                  </div>

                  <div className="resumo-peca">
                    <span>{t.linhas.porPeca}</span>
                    <b>{moeda(r.total / r.pecas)}</b>
                  </div>

                  <div className="resumo-comparativo">
                    {e.meses === 1 ? (
                      <>
                        <div className="lbl">{t.comparativo.rotuloAnual}</div>
                        <p>
                          {t.comparativo.textoAnual
                            .replace('{anual}', moeda(porMesAnual))
                            .replace('{pct}', `${pctMenosAnual}%`)}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="lbl">{t.comparativo.rotulo}</div>
                        <p>
                          {t.comparativo.texto
                            .replace('{avulso}', moeda(avulso.total))
                            .replace('{pct}', `${pctMaisCaro}%`)
                            .replace('{meses}', plural(e.meses))}
                        </p>
                      </>
                    )}
                  </div>

                  <a
                    className="btn resumo-cta"
                    href={`https://wa.me/5521990974226?text=${mensagem()}`}
                    target="_blank"
                    rel="noopener"
                  >
                    {t.cta}
                  </a>

                  {alterado && (
                    <button type="button" className="resumo-restaurar" onClick={() => setE(estadoInicial())}>
                      {t.alterado} {t.restaurar}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
