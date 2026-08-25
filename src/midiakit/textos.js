// Tabela de valores do Nerds na Estrada. Página fechada: é o link que a gente
// manda para quem pede preço, não um preço exposto na home.
//
// IMPORTANTE — o que NÃO entra aqui:
//   · o multiplicador interno para categorias de risco (financeiro, seguro,
//     proteção veicular, saúde, apostas). É critério de fechamento, não de
//     tabela publicada.
//   · valor fixo para o "momento assinatura". Ushuaia e Alasca são ativos
//     únicos; publicar preço só serve para ancorar a marca para baixo.
export default {
  html: {
    titulo: 'Tabela de valores — Nerds na Estrada',
    descricao: 'Formatos, pacotes e condições para marcas que querem aparecer no conteúdo do Nerds na Estrada.',
  },

  hero: {
    eyebrow: 'Mídia kit · Tabela de valores',
    titulo: 'Quanto custa aparecer na estrada com a gente.',
    lead: 'Formatos avulsos, pacotes fechados e produções especiais. Todos os valores abaixo são de tabela — pacotes sob medida a gente monta junto, na conversa.',
    ctaContato: 'Falar com Ygor & Bea',
    ctaPacotes: 'Ver os pacotes',
    destaques: [
      { num: '+200K', label: 'Pessoas acompanhando'     },
      { num: '+25M',  label: 'Visualizações acumuladas' },
      { num: '4',     label: 'Plataformas ativas'       },
      { num: '60d',   label: 'Validade dos valores'     },
    ],
  },

  // Cada bloco vira uma tabela na tela. `colunas` define os cabeçalhos e
  // `linhas` segue a mesma ordem: [item, descrição?, valor].
  blocos: [
    {
      id: 'video',
      eyebrow: '01',
      titulo: 'Peças de vídeo',
      lead: 'A diferença entre integração e review é o dono do vídeo: na integração a marca entra num conteúdo que já ia existir; no review o vídeo inteiro é da marca.',
      colunas: ['Formato', 'Descrição', 'Valor'],
      linhas: [
        ['Integração em vídeo', '60–90s sobre a marca dentro de um vídeo orgânico do canal', 'R$ 1.200'],
        ['Integração + repost multiplataforma', 'Integração no YouTube + corte publicado em IG Reels, TikTok e Facebook', 'R$ 1.500'],
        ['Review completo', 'Vídeo inteiro dedicado à marca (título, thumb e roteiro)', 'R$ 2.200'],
        ['Reels dedicado multiplataforma', 'Peça curta exclusiva, publicada nas 4 plataformas', 'R$ 1.800'],
        ['Reel Instagram com IG ad code', 'Reel com código de anúncio para a marca impulsionar', 'R$ 1.300'],
      ],
    },
    {
      id: 'stories',
      eyebrow: '02',
      titulo: 'Stories',
      lead: 'Sequência publicada no perfil principal, com link e marcação da marca.',
      colunas: ['Formato', 'Valor'],
      linhas: [
        ['3 stories', 'R$ 350'],
        ['5 stories', 'R$ 550'],
        ['10 stories (sequência de um dia)', 'R$ 1.000'],
      ],
    },
    {
      id: 'especial',
      eyebrow: '03',
      titulo: 'Produção especial',
      lead: 'Formatos que exigem deslocamento, agenda dedicada ou acesso a um ponto da rota que não se repete.',
      colunas: ['Formato', 'Descrição', 'Valor'],
      linhas: [
        ['Brand day', 'Dia de gravação com deslocamento até a marca: vídeo dedicado + stories no local', 'R$ 2.500'],
        ['Momento assinatura', 'Conteúdo em marco geográfico da viagem + sessão de fotos com cessão de imagem', 'Sob consulta'],
      ],
    },
    {
      id: 'pacotes',
      eyebrow: '04',
      titulo: 'Pacotes',
      lead: 'Combinações fechadas, com desconto sobre a soma dos formatos avulsos.',
      colunas: ['Pacote', 'Composição', 'Valor'],
      destaque: 3,
      linhas: [
        ['Combo mensal', '1 integração com repost multiplataforma + 5 stories', 'R$ 2.100'],
        ['Combo completo', '1 reels multiplataforma + 1 integração + 3 stories', 'R$ 3.000'],
        ['Campanha trimestral', '3 combos mensais', 'R$ 5.900'],
        ['Campanha anual', '12 combos mensais + exclusividade de categoria inclusa', 'R$ 25.000'],
      ],
    },
    {
      id: 'adicionais',
      eyebrow: '05',
      titulo: 'Adicionais',
      lead: 'Aplicados sobre o valor do pacote contratado.',
      colunas: ['Item', 'Valor'],
      // Aqui a coluna de valor é frase, não preço: sai em Inter, no corpo do
      // texto, em vez do tratamento serifado grande usado para cifras.
      valoresDescritivos: true,
      linhas: [
        ['Exclusividade de categoria', '+20% sobre o pacote (inclusa na campanha anual)'],
        ['Direitos de uso e impulsionamento — 90 dias', '+30%'],
        ['Direitos de uso e impulsionamento — 12 meses', '+50%'],
        ['Revisões além de 2 rodadas', 'R$ 400 por peça'],
        ['Entrega em menos de 7 dias', '+30%'],
      ],
    },
  ],

  condicoes: {
    eyebrow: '06',
    titulo: 'Condições',
    itens: [
      '50% na assinatura, 50% na entrega da última peça do ciclo',
      'Aprovação de roteiro pela marca em até 2 rodadas',
      'Sem cessão de direitos para mídia paga, salvo contratação do adicional',
      'Valores válidos por 60 dias',
    ],
  },

  contato: {
    eyebrow: '07 · Vamos conversar',
    titulo: 'Achou o formato? A gente monta o resto junto.',
    lead: 'Se nenhum pacote encaixar exatamente no que vocês precisam, escreve pra gente — a maior parte das campanhas que a gente fecha é sob medida. Respondemos no mesmo dia.',
    rotulos: {
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      youtube: 'YouTube',
      tiktok: 'TikTok',
      facebook: 'Facebook',
      site: 'Site',
    },
  },

  rodape: {
    linha1: 'Nerds na Estrada · Tabela de valores',
    linha2: 'Rio de Janeiro → Ushuaia → Alasca',
    legal: 'Valores de referência válidos por 60 dias a partir da data de envio deste documento. Campanhas sob medida, permutas e parcerias de longa duração são orçadas caso a caso. Este documento não constitui proposta comercial vinculante.',
  },
}
