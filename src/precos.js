// Tabela de preços do Nerds na Estrada. Fonte única: a proposta da Álamo
// (/alamo) e a calculadora aberta (/calculadora) leem daqui, então não há como
// um número de uma cotação desencontrar do da outra.
//
// Âncora real: reelMulti (1.100) + 5 gavetas (400) = R$ 1.500, que é o que a
// gente cobra hoje por vídeo curto nas quatro plataformas com 5 fileiras de
// story. Todo o resto foi escalado a partir desse número, e não de uma tabela
// de referência de mercado.
export const precos = {
  integracao: 700,         // inclusão em vídeo (só YouTube)
  integracaoRepost: 500,   // inclusão no YouTube + corte em IG/TikTok/FB
  review: 1350,            // vídeo inteiro dedicado à marca
  reelMulti: 1100,         // Reel nas 4 plataformas
  reelAdCode: 750,         // Reel no Instagram com código de anúncio
  brandDay: 2000,          // dia de produção dedicado na unidade
  stories: { 3: 250, 5: 400, 10: 750 },
}

export const adicionais = {
  exclusividade: 0.20,
  direitos90: 0.18,
  direitos12m: 0.30,
}

// Tarifa por duração: doze meses é a referência (×1,00) e contratos curtos
// pagam prêmio. O custo de planejamento, alinhamento de roteiro e aprovação não
// se dilui numa campanha pontual — e um contrato longo vale mais para nós do
// que uma campanha avulsa, então o preço precisa dizer isso.
export const tarifaDuracao = (meses) =>
  meses >= 12 ? 1.00
  : meses >= 6 ? 1.06
  : meses >= 3 ? 1.12
  : 1.20

// Exclusividade de categoria entra sem custo a partir do contrato anual.
export const exclusividadeInclusa = (meses) => meses >= 12

// Totais caem em centavos, então o formatador mostra 0 ou 2 casas — nunca uma
// só, que era o que fazia aparecer "R$ 54.069,6".
export const moeda = (v) => {
  const n = Math.round(v * 100) / 100
  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })
}

// A ordem de aplicação é: produção → tarifa de duração → exclusividade →
// direitos, e só então a produção avulsa entra, porque brand day e Reel com
// código de anúncio são por evento e não acompanham nenhum desses
// multiplicadores. O ad code, em particular, já é a licença de mídia paga
// daquela peça: somar os direitos por cima seria cobrar duas vezes.
export function calcularPacote(e, mensaisDisponiveis) {
  const producaoMes =
    mensaisDisponiveis.reduce((s, m) => s + (e.mensais[m.chave] || 0) * precos[m.chave], 0) +
    (precos.stories[e.storiesPack] || 0)

  const pecasMes =
    mensaisDisponiveis.reduce((s, m) => s + (e.mensais[m.chave] || 0), 0) + e.storiesPack

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

  const especial = e.brandDay * precos.brandDay + e.reelAdCode * precos.reelAdCode
  const total = v + especial

  return {
    producaoMes, pecasMes, pecas: pecasMes * e.meses + e.reelAdCode,
    base, tarifa, premioDuracao,
    valExclusividade, exclusividadeGratis,
    valDireitos, especial,
    semEspecial: v, total,
    vazio: producaoMes === 0,
  }
}
