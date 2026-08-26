// Copy da calculadora aberta em /calculadora. Diferente da versão dentro da
// proposta da Álamo, aqui nada é específico de um cliente: é a mesma tabela de
// preços (src/precos.js) numa página que dá pra mandar para qualquer marca.

export const itensMensais = [
  {
    chave: 'integracaoRepost',
    nome: 'Inclusão em vídeo no YouTube',
    detalhe: 'Bloco de 60 a 90s dentro de um vlog do canal, com corte em Reels, TikTok e Facebook',
  },
  {
    chave: 'reelMulti',
    nome: 'Reel nas quatro plataformas',
    detalhe: 'Instagram, TikTok, YouTube e Facebook. Alcance orgânico, sem impulsionamento',
  },
  {
    chave: 'review',
    nome: 'Review completo',
    detalhe: 'Vídeo inteiro dedicado à marca — título, thumb e roteiro',
  },
]

export const itensUnicos = [
  {
    chave: 'reelAdCode',
    nome: 'Reel que vira anúncio',
    detalhe: 'Só no Instagram, mas a marca pode impulsionar como anúncio a partir do nosso perfil',
    max: 12,
  },
  {
    chave: 'brandDay',
    nome: 'Brand day presencial',
    detalhe: 'Dia de produção dedicado na loja, fábrica ou evento da marca: vídeo + stories no local',
    max: 6,
  },
  {
    chave: 'momentoAssinatura',
    nome: 'Momento assinatura',
    detalhe: 'Bandeira da marca em marco geográfico da rota, com sessão de fotos e cessão de imagem',
    max: 4,
    sobConsulta: true,
  },
]

// Ponto de partida da página: o pacote base que a gente recomenda para uma
// parceria anual. Extras entram por cima, conforme a conversa.
export const pacoteBase = {
  meses: 12,
  mensais: { integracaoRepost: 1, reelMulti: 1, review: 0 },
  storiesPack: 5,
  reelAdCode: 0,
  brandDay: 0,
  momentoAssinatura: 0,
  exclusividade: true,
  direitos: 'nenhum',
}

export default {
  hero: {
    eyebrow: 'Calculadora de parceria',
    titulo: 'Monte o pacote',
    tituloEnfase: 'e veja o preço na hora',
    lead: 'Esta é a nossa tabela de valores, aberta. Escolha quantas peças por mês, por quanto tempo, com ou sem direitos de mídia paga — o total se ajusta na hora, sem precisar esperar um orçamento por e-mail.',
    selo: 'Valores válidos por 60 dias a partir da data da cotação',
  },
  cliente: {
    rotulo: 'Para quem é essa cotação?',
    placeholder: 'Nome da marca (opcional)',
    ajuda: 'Aparece no resumo e no link que você compartilhar.',
  },
  mensaisRotulo: 'Peças por mês',
  storiesRotulo: 'Stories por mês',
  storiesOpcoes: [0, 3, 5, 10],
  storiesNenhum: 'Nenhum',
  storiesNota: 'Uma gaveta é uma sequência de stories publicada no mesmo dia, com link e marcação da marca.',
  unicosRotulo: 'Peças e produções avulsas',
  unicosNota: 'Contadas no contrato inteiro, não por mês.',
  duracaoRotulo: 'Duração do contrato',
  duracaoSufixo: 'meses',
  duracaoNota: 'Doze meses é a nossa tarifa de referência. Contratos mais curtos custam mais por peça, porque planejamento, alinhamento de roteiro e aprovação não se diluem numa campanha pontual.',
  direitosRotulo: 'Direitos de uso e impulsionamento',
  direitosOpcoes: [
    { valor: 'nenhum', nome: 'Sem mídia paga', detalhe: 'As peças ficam só nos nossos canais' },
    { valor: '90',     nome: '90 dias',        detalhe: '+18% sobre a produção' },
    { valor: '12m',    nome: '12 meses',       detalhe: '+30% sobre a produção' },
  ],
  adicionaisRotulo: 'Adicionais',
  adicionaisItens: [
    {
      chave: 'exclusividade',
      nome: 'Exclusividade de categoria',
      detalhe: '+20% · nenhum concorrente aparece no nosso conteúdo',
      inclusaNota: 'Inclusa no contrato de 12 meses',
    },
  ],
  resumoRotulo: 'O pacote',
  resumoPara: 'Cotação para',
  linhas: {
    producao: 'Produção',
    duracao: 'Tarifa de contrato',
    exclusividade: 'Exclusividade de categoria',
    direitos: 'Direitos de uso',
    especial: 'Peças e produções avulsas',
    total: 'Total do contrato',
    porMes: 'por mês',
    porPeca: 'Por peça de conteúdo',
    pecas: 'peças no período',
    inclusa: 'inclusa',
    sobConsulta: 'sob consulta',
  },
  comparativo: {
    rotulo: 'Se fosse campanha pontual',
    texto: 'A parte mensal deste pacote, contratada por um mês só, sairia {avulso} por mês — {pct} mais caro que no contrato de {meses}.',
    rotuloAnual: 'O que muda com contrato anual',
    textoAnual: 'A parte mensal deste pacote, contratada por doze meses, cai para {anual} por mês — {pct} menos do que numa campanha pontual.',
  },
  notaAssinatura: 'Momento assinatura é item sob consulta: o valor depende do marco escolhido e da janela da rota, e por isso não entra no total acima.',
  vazio: 'Escolha pelo menos uma peça por mês para ver o valor.',
  alterado: 'Você mudou o pacote base.',
  restaurar: 'Voltar ao pacote base',
  cta: 'Falar no WhatsApp',
  ctaMensagem: 'Olá! Montei um pacote na calculadora do Nerds na Estrada e queria conversar sobre ele.',
  copiarLink: 'Copiar link desta cotação',
  copiarLinkOk: 'Link copiado',
  copiarResumo: 'Copiar resumo em texto',
  copiarResumoOk: 'Resumo copiado',
  rodapeNota: 'Os valores acima são de tabela e não incluem produção de material publicitário fora do escopo descrito. Roteiro aprovado pela marca em até duas rodadas de revisão; rodadas adicionais são orçadas à parte.',
}
