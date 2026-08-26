import { useState, useMemo, useEffect } from 'react'
import { Minus, Plus, Link2, ClipboardCopy, Check, MessageCircle, RotateCcw } from 'lucide-react'
import { precos, moeda, calcularPacote } from '../precos'
import t, { itensMensais, itensUnicos, pacoteBase } from '../calculadora/textos'

const WHATSAPP = '5521990974226'
const MAX_MENSAL = 4

// O estado inteiro cabe na URL: é assim que uma cotação vira um link que dá
// para mandar para a marca sem exportar nada.
const CHAVES_MENSAIS = itensMensais.map((m) => m.chave)

function lerURL() {
  const base = { ...pacoteBase, mensais: { ...pacoteBase.mensais }, cliente: '' }
  if (typeof window === 'undefined') return base
  const q = new URLSearchParams(window.location.search)
  if (![...q.keys()].length) return base

  const num = (k, padrao, min, max) => {
    const v = Number(q.get(k))
    return q.has(k) && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : padrao
  }

  const mensais = {}
  CHAVES_MENSAIS.forEach((c) => { mensais[c] = num(c, pacoteBase.mensais[c] || 0, 0, MAX_MENSAL) })

  const stories = num('stories', pacoteBase.storiesPack, 0, 10)
  const dir = q.get('dir')

  return {
    cliente: (q.get('cliente') || '').slice(0, 60),
    meses: num('meses', pacoteBase.meses, 1, 12),
    mensais,
    storiesPack: t.storiesOpcoes.includes(stories) ? stories : pacoteBase.storiesPack,
    reelAdCode: num('reelAdCode', pacoteBase.reelAdCode, 0, 12),
    brandDay: num('brandDay', pacoteBase.brandDay, 0, 6),
    momentoAssinatura: num('momentoAssinatura', pacoteBase.momentoAssinatura, 0, 4),
    exclusividade: q.has('excl') ? q.get('excl') === '1' : pacoteBase.exclusividade,
    direitos: ['nenhum', '90', '12m'].includes(dir) ? dir : pacoteBase.direitos,
  }
}

function paraURL(e) {
  const q = new URLSearchParams()
  if (e.cliente.trim()) q.set('cliente', e.cliente.trim())
  q.set('meses', e.meses)
  CHAVES_MENSAIS.forEach((c) => { if (e.mensais[c]) q.set(c, e.mensais[c]) })
  q.set('stories', e.storiesPack)
  if (e.reelAdCode) q.set('reelAdCode', e.reelAdCode)
  if (e.brandDay) q.set('brandDay', e.brandDay)
  if (e.momentoAssinatura) q.set('momentoAssinatura', e.momentoAssinatura)
  q.set('excl', e.exclusividade ? '1' : '0')
  q.set('dir', e.direitos)
  return q.toString()
}

function Stepper({ valor, min = 0, max = MAX_MENSAL, onChange, rotulo }) {
  const botao = 'w-8 h-8 flex items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:border-amber-500 hover:text-amber-600 disabled:opacity-30 disabled:hover:border-stone-300 disabled:hover:text-stone-700'
  return (
    <div className="flex items-center gap-2.5 flex-shrink-0">
      <button type="button" className={botao} onClick={() => onChange(Math.max(min, valor - 1))} disabled={valor <= min} aria-label={`Menos um ${rotulo}`}>
        <Minus size={14} />
      </button>
      <span className="w-5 text-center font-semibold tabular-nums text-stone-800">{valor}</span>
      <button type="button" className={botao} onClick={() => onChange(Math.min(max, valor + 1))} disabled={valor >= max} aria-label={`Mais um ${rotulo}`}>
        <Plus size={14} />
      </button>
    </div>
  )
}

function Grupo({ titulo, nota, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-1">{titulo}</h3>
      {nota && <p className="text-stone-500 text-xs mb-4">{nota}</p>}
      <div className={nota ? '' : 'mt-4'}>{children}</div>
    </div>
  )
}

function Linha({ ativa, nome, detalhe, children }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-3.5 border-t border-stone-100 first:border-t-0 ${ativa ? '' : 'opacity-60'}`}>
      <div className="min-w-0">
        <strong className="block text-sm font-semibold text-stone-800">{nome}</strong>
        <span className="block text-xs text-stone-500 leading-snug mt-0.5">{detalhe}</span>
      </div>
      {children}
    </div>
  )
}

export default function Calculadora() {
  const [e, setE] = useState(lerURL)
  const [copiado, setCopiado] = useState(null)

  const set = (patch) => setE((a) => ({ ...a, ...patch }))
  const setMensal = (chave, valor) => setE((a) => ({ ...a, mensais: { ...a.mensais, [chave]: valor } }))

  const query = useMemo(() => paraURL(e), [e])

  // A barra de endereços acompanha o pacote, então "copiar o link" e "copiar da
  // barra" dão sempre a mesma cotação.
  useEffect(() => {
    window.history.replaceState(null, '', `${window.location.pathname}?${query}`)
  }, [query])

  const r = useMemo(() => calcularPacote(e, itensMensais), [e])
  const avulso = useMemo(() => calcularPacote({ ...e, meses: 1, brandDay: 0, reelAdCode: 0 }, itensMensais), [e])
  const anual = useMemo(() => calcularPacote({ ...e, meses: 12, brandDay: 0, reelAdCode: 0 }, itensMensais), [e])

  const inicial = useMemo(() => ({ ...pacoteBase, mensais: { ...pacoteBase.mensais }, cliente: '' }), [])
  const alterado = JSON.stringify({ ...e, cliente: '' }) !== JSON.stringify(inicial)

  const porMesAtual = (r.total - r.especial) / e.meses
  const porMesAnual = anual.total / 12
  const pctMaisCaro = porMesAtual > 0 ? Math.round((avulso.total / porMesAtual - 1) * 100) : 0
  const pctMenosAnual = avulso.total > 0 ? Math.round((1 - porMesAnual / avulso.total) * 100) : 0
  const plural = (n) => `${n} ${n === 1 ? 'mês' : 'meses'}`

  const resumoTexto = () => {
    const l = []
    if (e.cliente.trim()) l.push(`${t.resumoPara} ${e.cliente.trim()}`, '')
    l.push(`Contrato: ${e.meses} ${t.duracaoSufixo}`)
    itensMensais.forEach((m) => { if (e.mensais[m.chave]) l.push(`${e.mensais[m.chave]}× ${m.nome} por mês`) })
    if (e.storiesPack) l.push(`${e.storiesPack} gavetas de story por mês`)
    if (e.reelAdCode) l.push(`${e.reelAdCode}× Reel que vira anúncio`)
    if (e.brandDay) l.push(`${e.brandDay}× Brand day presencial`)
    if (e.momentoAssinatura) l.push(`${e.momentoAssinatura}× Momento assinatura (${t.linhas.sobConsulta})`)
    if (e.exclusividade) l.push('Exclusividade de categoria')
    if (e.direitos !== 'nenhum') l.push(`Direitos de uso: ${e.direitos === '90' ? '90 dias' : '12 meses'}`)
    l.push('', `Total: ${moeda(r.total)} (${moeda(r.total / e.meses)}/mês · ${r.pecas} peças)`)
    return l.join('\n')
  }

  const copiar = (chave, texto) => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(chave)
      setTimeout(() => setCopiado(null), 2200)
    })
  }

  const opcao = (ativa) =>
    `flex-1 min-w-[5.5rem] px-3 py-2.5 rounded-xl border text-center transition-colors ${
      ativa
        ? 'border-amber-500 bg-amber-400/10 text-stone-900'
        : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
    }`

  return (
    <section id="calculadora" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_22rem] gap-6 lg:gap-8 items-start">

          {/* Controles */}
          <div className="space-y-5">

            <Grupo titulo={t.cliente.rotulo} nota={t.cliente.ajuda}>
              <input
                type="text"
                value={e.cliente}
                maxLength={60}
                placeholder={t.cliente.placeholder}
                onChange={(ev) => set({ cliente: ev.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-cream-50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500"
              />
            </Grupo>

            <Grupo titulo={t.mensaisRotulo}>
              {itensMensais.map((m) => (
                <Linha key={m.chave} ativa={e.mensais[m.chave] > 0} nome={m.nome} detalhe={`${m.detalhe} · ${moeda(precos[m.chave])}`}>
                  <Stepper valor={e.mensais[m.chave]} rotulo={m.nome} onChange={(v) => setMensal(m.chave, v)} />
                </Linha>
              ))}
            </Grupo>

            <Grupo titulo={t.storiesRotulo} nota={t.storiesNota}>
              <div className="flex flex-wrap gap-2.5">
                {t.storiesOpcoes.map((n) => (
                  <button type="button" key={n} onClick={() => set({ storiesPack: n })} className={opcao(e.storiesPack === n)}>
                    <b className="block text-sm font-semibold">{n === 0 ? t.storiesNenhum : `${n} gavetas`}</b>
                    <span className="block text-xs text-stone-500 mt-0.5">{n > 0 ? `${moeda(precos.stories[n])}/mês` : '—'}</span>
                  </button>
                ))}
              </div>
            </Grupo>

            <Grupo titulo={t.unicosRotulo} nota={t.unicosNota}>
              {itensUnicos.map((u) => (
                <Linha
                  key={u.chave}
                  ativa={e[u.chave] > 0}
                  nome={u.nome}
                  detalhe={`${u.detalhe} · ${u.sobConsulta ? t.linhas.sobConsulta : moeda(precos[u.chave])}`}
                >
                  <Stepper valor={e[u.chave]} max={u.max} rotulo={u.nome} onChange={(v) => set({ [u.chave]: v })} />
                </Linha>
              ))}
            </Grupo>

            <Grupo titulo={t.duracaoRotulo} nota={t.duracaoNota}>
              <div className="flex items-center gap-5">
                <input
                  type="range" min="1" max="12" step="1" value={e.meses}
                  onChange={(ev) => set({ meses: Number(ev.target.value) })}
                  aria-label={t.duracaoRotulo}
                  className="flex-1 accent-amber-500"
                />
                <div className="flex items-baseline gap-1.5 flex-shrink-0">
                  <b className="font-display text-3xl text-stone-800 tabular-nums">{e.meses}</b>
                  <span className="text-xs text-stone-500">{t.duracaoSufixo}</span>
                  {r.tarifa > 1 && (
                    <em className="not-italic text-xs font-semibold text-amber-600 ml-1">+{Math.round((r.tarifa - 1) * 100)}%</em>
                  )}
                </div>
              </div>
            </Grupo>

            <Grupo titulo={t.direitosRotulo}>
              <div className="flex flex-wrap gap-2.5">
                {t.direitosOpcoes.map((o) => (
                  <button type="button" key={o.valor} onClick={() => set({ direitos: o.valor })} className={opcao(e.direitos === o.valor)}>
                    <b className="block text-sm font-semibold">{o.nome}</b>
                    <span className="block text-xs text-stone-500 mt-0.5">{o.detalhe}</span>
                  </button>
                ))}
              </div>
            </Grupo>

            <Grupo titulo={t.adicionaisRotulo}>
              {t.adicionaisItens.map((a) => {
                const gratis = a.chave === 'exclusividade' && r.exclusividadeGratis
                return (
                  <label key={a.chave} className="flex items-start gap-3 py-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={e[a.chave]}
                      onChange={(ev) => set({ [a.chave]: ev.target.checked })}
                      className="mt-0.5 w-4 h-4 accent-amber-500 flex-shrink-0"
                    />
                    <span className="min-w-0">
                      <strong className="block text-sm font-semibold text-stone-800">{a.nome}</strong>
                      <span className="block text-xs text-stone-500 leading-snug mt-0.5">{gratis ? a.inclusaNota : a.detalhe}</span>
                    </span>
                  </label>
                )
              })}
            </Grupo>
          </div>

          {/* Resumo */}
          <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pb-1">
            <div className="rounded-2xl border border-stone-700 overflow-hidden" style={{ background: '#1e1a12' }}>
              <div className="px-5 sm:px-6 py-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  {e.cliente.trim() ? `${t.resumoPara} ${e.cliente.trim()}` : t.resumoRotulo}
                </div>

                {r.vazio ? (
                  <p className="text-stone-400 text-sm mt-4">{t.vazio}</p>
                ) : (
                  <>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between gap-4">
                        <span className="text-stone-400">{t.linhas.producao}</span>
                        <b className="text-stone-100 tabular-nums">{moeda(r.base)}</b>
                      </div>
                      {r.premioDuracao > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-stone-400">{t.linhas.duracao} · +{Math.round((r.tarifa - 1) * 100)}%</span>
                          <b className="text-stone-100 tabular-nums">{moeda(r.premioDuracao)}</b>
                        </div>
                      )}
                      {e.exclusividade && (
                        <div className="flex justify-between gap-4">
                          <span className="text-stone-400">{t.linhas.exclusividade}</span>
                          <b className={r.exclusividadeGratis ? 'text-sage-400' : 'text-stone-100 tabular-nums'}>
                            {r.exclusividadeGratis ? t.linhas.inclusa : moeda(r.valExclusividade)}
                          </b>
                        </div>
                      )}
                      {r.valDireitos > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-stone-400">{t.linhas.direitos}</span>
                          <b className="text-stone-100 tabular-nums">{moeda(r.valDireitos)}</b>
                        </div>
                      )}
                      {r.especial > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-stone-400">{t.linhas.especial}</span>
                          <b className="text-stone-100 tabular-nums">{moeda(r.especial)}</b>
                        </div>
                      )}
                      {e.momentoAssinatura > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-stone-400">{e.momentoAssinatura}× Momento assinatura</span>
                          <b className="text-sage-400">{t.linhas.sobConsulta}</b>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-5 border-t border-stone-700">
                      <div className="text-xs uppercase tracking-widest text-stone-500">{t.linhas.total}</div>
                      <div className="font-display text-4xl text-stone-50 leading-tight mt-1 tabular-nums">{moeda(r.total)}</div>
                      <div className="text-xs text-stone-400 mt-1">
                        {moeda(r.total / e.meses)} {t.linhas.porMes} · {r.pecas} {t.linhas.pecas}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-baseline gap-4 px-3.5 py-2.5 rounded-xl bg-white/5">
                      <span className="text-xs text-stone-400">{t.linhas.porPeca}</span>
                      <b className="text-stone-100 text-sm tabular-nums">{moeda(r.total / r.pecas)}</b>
                    </div>

                    {e.momentoAssinatura > 0 && (
                      <p className="text-xs text-stone-500 leading-snug mt-3">{t.notaAssinatura}</p>
                    )}

                    <div className="mt-4 px-3.5 py-3 rounded-xl border border-stone-700">
                      <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1.5">
                        {e.meses === 1 ? t.comparativo.rotuloAnual : t.comparativo.rotulo}
                      </div>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {e.meses === 1
                          ? t.comparativo.textoAnual.replace('{anual}', moeda(porMesAnual)).replace('{pct}', `${pctMenosAnual}%`)
                          : t.comparativo.texto
                              .replace('{avulso}', moeda(avulso.total))
                              .replace('{pct}', `${pctMaisCaro}%`)
                              .replace('{meses}', plural(e.meses))}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`${t.ctaMensagem}\n\n${resumoTexto()}`)}`}
                      target="_blank"
                      rel="noopener"
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-amber-400 text-earth-900 text-sm font-semibold transition-colors hover:bg-amber-500"
                    >
                      <MessageCircle size={16} />
                      {t.cta}
                    </a>

                    <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => copiar('link', `${window.location.origin}${window.location.pathname}?${query}`)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full border border-stone-700 text-stone-300 text-xs font-medium transition-colors hover:border-stone-500 hover:text-stone-100"
                      >
                        {copiado === 'link' ? <Check size={14} /> : <Link2 size={14} />}
                        {copiado === 'link' ? t.copiarLinkOk : t.copiarLink}
                      </button>
                      <button
                        type="button"
                        onClick={() => copiar('resumo', resumoTexto())}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full border border-stone-700 text-stone-300 text-xs font-medium transition-colors hover:border-stone-500 hover:text-stone-100"
                      >
                        {copiado === 'resumo' ? <Check size={14} /> : <ClipboardCopy size={14} />}
                        {copiado === 'resumo' ? t.copiarResumoOk : t.copiarResumo}
                      </button>
                    </div>

                    {alterado && (
                      <button
                        type="button"
                        onClick={() => setE((a) => ({ ...inicial, cliente: a.cliente }))}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 text-xs text-stone-500 transition-colors hover:text-stone-300"
                      >
                        <RotateCcw size={12} />
                        {t.restaurar}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed mt-4 px-1">{t.rodapeNota}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
