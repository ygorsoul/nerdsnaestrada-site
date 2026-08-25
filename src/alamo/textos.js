// Texto da proposta comercial para a Álamo Benefícios. Página em português
// apenas — diferente da proposta Mitsubishi, aqui não há troca de idioma, então
// o conteúdo mora num módulo simples em vez de um sistema de dicionários.
// Trechos entre **asteriscos** viram <strong>/<b> na tela (ver Rich.jsx).

// Valores do contrato em um lugar só: a seção de investimento e os textos que
// citam preço leem daqui, então não há como um número desencontrar do outro.
export const contrato = {
  meses: 12,
  mensal: 4700,
  aVista: 47000,
  reelsPorMes: 1,
  gavetasPorMes: 5,
  // Valor de tabela do escopo, somando só linhas públicas da nossa tabela de
  // valores (ver /midiakit). O multiplicador interno de categoria de risco NÃO
  // entra aqui nem em nada que apareça na tela.
  tabela: 58260,
}

const totalMensal = contrato.mensal * contrato.meses          // 56.400
const economia = totalMensal - contrato.aVista                // 9.400
const reels = contrato.reelsPorMes * contrato.meses           // 12
const gavetas = contrato.gavetasPorMes * contrato.meses       // 60
const pecas = reels + gavetas                                 // 72

const real = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
const realCentavos = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

export const numeros = { totalMensal, economia, reels, gavetas, pecas, real, realCentavos }

export default {
  nav: {
    parceiro: 'Álamo Benefícios',
    // Mesma ordem das âncoras declaradas em AlaNav.jsx
    links: ['A tese', 'Quem somos', 'Portfólio', 'A marca', 'A rota', 'Entregáveis', 'Números', 'Investimento', 'Contato'],
  },

  hero: {
    lockup: {
      nne: { nome: 'Nerds na Estrada', meta: 'Ygor & Bea · Brasil' },
      ala: { nome: 'Álamo Benefícios', meta: 'Proteção e benefícios · desde o Rio' },
    },
    manchete: {
      origem: 'Do Rio de Janeiro',
      escala1: 'com parada no fim do mundo, Ushuaia,',
      escala2: 'e depois rumo ao extremo norte do planeta:',
      destino: 'Alasca',
      marca: 'com a Álamo junto.',
    },
    sub: `Uma parceria de **12 meses** em que a Álamo sai das três unidades — Rio, São Paulo e Curitiba — e atravessa as Américas dentro do nosso conteúdo. São **${reels} Reels** e **${gavetas} gavetas de story** no ano, cobrindo o portfólio inteiro: **carro, casa, pet, saúde e bolso**.`,
    ctaProposta: 'Ver o investimento',
    ctaContato: 'Falar com Ygor & Bea',
    odometro: [
      { num: '12',       label: 'Meses de parceria'        },
      { num: `${pecas}`, label: 'Peças de conteúdo no ano' },
      { num: '5',        label: 'Frentes do portfólio'     },
      { num: '+200K',    label: 'Pessoas acompanhando'     },
    ],
  },

  tese: {
    eyebrow: '01 · A tese',
    titulo: 'A Álamo não protege só o carro. E a gente não vai só dirigir.',
    lead: 'Por doze meses a estrada é a nossa vida inteira: o veículo, a casa que ficou pra trás, o gato que vai junto, a saúde longe de qualquer coisa conhecida e cada real do orçamento. É exatamente o mapa do portfólio de vocês — e é o que a gente vai viver na frente da câmera.',
    cards: [
      {
        n: '01',
        titulo: 'Cinco frentes, não um produto só',
        paragrafos: [
          'Proteção veicular é a porta de entrada, mas a Álamo também tem **assistência residencial, pet, telemedicina, saúde com desconto, clube de vantagens e combustível mais barato**.',
          'Cada uma dessas frentes tem um momento real da viagem onde ela faz sentido sozinha. O conteúdo não precisa forçar nada.',
        ],
      },
      {
        n: '02',
        titulo: 'O público é exatamente o seu',
        paragrafos: [
          'Quem nos acompanha é dono de carro, roda muito e planeja viagem de estrada. É a mesma pessoa que pesquisa proteção veicular porque **seguradora tradicional recusou o perfil ou cobrou caro demais**.',
          'E é gente que quer viajar mais gastando menos — que é literalmente o que o Clube de Vantagens e o desconto no combustível entregam.',
        ],
      },
      {
        n: '03',
        titulo: 'Confiança não se compra em anúncio',
        paragrafos: [
          'Proteção é um produto de confiança — e confiança é a moeda de um criador que aparece todo dia mostrando a vida real, inclusive quando dá errado.',
          'Quando a gente fala da Álamo, não é um banner. É **a recomendação de quem o público já escolheu ouvir**.',
        ],
      },
      {
        n: '04',
        titulo: 'Um ano de presença, não um post',
        paragrafos: [
          'Campanha pontual some. Doze meses de presença contínua constroem associação de marca — e dão espaço pra apresentar um produto diferente por mês, sem cansar ninguém.',
          'São **72 peças de conteúdo** distribuídas ao longo do ano, não um pico e o silêncio depois.',
        ],
      },
    ],
    faixa: {
      rotulo: 'A frase que a viagem prova',
      texto: '"Genial é estar protegido" deixa de ser assinatura e vira **relato de rota**: a marca que cuida do carro, da casa, do pet e da saúde no Brasil é a mesma que aparece atravessando cordilheira, deserto, selva e gelo.',
    },
  },

  quemSomos: {
    eyebrow: '02 · Quem somos',
    titulo: 'Um casal, um gato, uma estrada e uma câmera sempre ligada.',
    lead: 'Somos o Nerds na Estrada: conteúdo real sobre viagem de carro, perrengue e liberdade, para um público jovem-adulto que quer viajar mais e gastar menos — e confia na gente pra saber com o que vale a pena rodar.',
    pessoas: [
      {
        nome: 'Ygor Pereira',
        papel: 'Engenheiro da computação · Tech Lead em IA',
        bio: 'Especialista em Inteligência Artificial em uma das maiores consultorias de tecnologia do Brasil, já vendeu mais de R$ 25 milhões em software de IA. Nerd de carteirinha, apaixonado por carros, tecnologia e pela engenharia por trás de cada quilômetro rodado.',
      },
      {
        nome: 'Bea Oliveira',
        papel: 'Psicóloga · Gestora de tráfego e roteirista',
        bio: 'Especialista em e-commerce, designer instrucional, editora e roteirista. Já viralizou múltiplos perfis nos nichos pet, psicologia e viagem — é quem transforma cada trecho de estrada em uma história que as pessoas realmente assistem até o fim.',
      },
    ],
    citacao: '"Viajar é desbloquear um novo mapa da vida, dentro de si mesmo. Você não precisa zerar o mundo, só precisa jogar sua melhor versão em cada fase."',
    autor: '— Ygor, no nosso livro',
  },

  portfolio: {
    eyebrow: '03 · O portfólio na estrada',
    titulo: 'Cada frente da Álamo tem um momento real da viagem.',
    lead: 'Não é o criador procurando gancho pra encaixar o patrocinador. É a viagem, do jeito que ela acontece, esbarrando naturalmente em cada frente do que a Álamo oferece.',
    rotulos: { momento: 'O momento na viagem', conteudo: 'O conteúdo que sai daí' },
    familias: [
      {
        n: '01',
        familia: 'O carro',
        produtos: ['Proteção veicular', 'Assistência 24h', 'Carro reserva', 'Vidros e para-brisa', 'Proteção a terceiros'],
        momento: 'O veículo é a casa e o meio de vida por doze meses seguidos.',
        conteudo: 'Quebrar no meio do nada é o medo número um de quem viaja de carro. A gente mostra o que dá errado de verdade — pedra no para-brisa em estrada de terra, pane longe de tudo, reboque — e o que a Álamo faz em cada caso.',
      },
      {
        n: '02',
        familia: 'A casa',
        produtos: ['Assistência residencial', 'Linha branca', 'Chaveiro, elétrica e hidráulica'],
        momento: 'A casa que fica pra trás no Brasil enquanto a gente roda o continente.',
        conteudo: 'Todo mundo que sonha em viajar longo trava na mesma pergunta: "e a minha casa?". Conteúdo sobre deixar a casa segura, resolver emergência à distância e não perder a viagem por causa de um cano estourado.',
      },
      {
        n: '03',
        familia: 'O Luck',
        produtos: ['Assistência pet', 'Transporte veterinário', 'Consultas e vacinação'],
        momento: 'Nosso gato viaja com a gente do Rio ao Alasca.',
        conteudo: 'O nicho pet é onde a Bea já viralizou antes. Levar um gato numa expedição dessas é conteúdo pronto — e a Assistência Pet deixa de ser item de tabela pra virar história com personagem.',
      },
      {
        n: '04',
        familia: 'A saúde',
        produtos: ['Telemedicina 24/7', 'Saúde com desconto', 'Consultas e exames'],
        momento: 'Passar mal a 4.000 metros de altitude, a dias do hospital mais próximo.',
        conteudo: 'Saúde é a preocupação silenciosa de quem viaja longe. Telemedicina 24 horas resolve exatamente esse medo — e o desconto em consultas e exames vale pro público que fica em casa também.',
      },
      {
        n: '05',
        familia: 'O bolso',
        produtos: ['Desconto em combustível', 'Clube de Vantagens', 'Cashback em parceiros'],
        momento: 'Combustível é o maior custo de qualquer viagem de carro.',
        conteudo: 'Essa é a frente que mais converte no nosso público: "viajar mais gastando menos" é a promessa que a gente faz há anos. Até 10% no abastecimento e cashback em parceiros é conteúdo que as pessoas salvam e mandam pra alguém.',
      },
    ],
    nota: {
      rotulo: 'Sobre o escopo:',
      texto: 'as cinco frentes acima são as que rendem conteúdo natural dentro da viagem. Os demais itens do portfólio entram nas peças de apresentação geral da parceria, sem virar tema de Reel próprio — se vocês quiserem priorizar uma frente diferente, a gente remonta o calendário junto.',
    },
  },

  marca: {
    eyebrow: '04 · Onde a marca aparece',
    titulo: 'A Álamo não fica só na legenda.',
    lead: 'Cada ponto abaixo é um lugar concreto onde a marca Álamo aparece durante os doze meses de parceria — na tela, no perfil, nas unidades e nos dois extremos do continente.',
    pontos: [
      {
        tag: 'Na abertura',
        titulo: 'Anúncio da parceria nos nossos canais',
        texto: 'Post e sequência de story declarando a Álamo parceira oficial da expedição, publicados no início da vigência para todo o público de uma vez.',
      },
      {
        tag: 'Na tela',
        titulo: 'Menção falada e selo nos Reels',
        texto: 'A Álamo é citada nominalmente nos Reels do contrato e a marca aparece em selo no vídeo, sem depender de o espectador ler a legenda.',
      },
      {
        tag: 'Nos stories',
        titulo: 'Link e marcação em cada gaveta',
        texto: 'Cada gaveta de story leva o link da Álamo, com marcação do perfil de vocês — caminho direto do conteúdo pra simulação.',
      },
      {
        tag: 'Na bio',
        titulo: 'Link fixo e destaque permanente',
        texto: 'Link da Álamo fixo na bio durante toda a vigência e um destaque no Instagram reunindo o conteúdo da parceria — que fica no perfil mesmo depois do contrato acabar.',
      },
      {
        tag: 'Nas unidades',
        titulo: 'Conteúdo gravado no Rio, em SP e em Curitiba',
        texto: 'As três unidades entram na rota da descida e viram cenário: equipe, atendimento e bastidor da Álamo aparecendo em vídeo, com gente de verdade.',
      },
      {
        tag: 'Nos extremos',
        titulo: 'Bandeira da Álamo em Ushuaia e no Alasca',
        texto: 'A bandeira da Álamo fincada nos dois pontos-marco da expedição, registrada em foto e vídeo — o conteúdo mais compartilhável do contrato inteiro.',
      },
    ],
    faixa: {
      rotulo: 'Exclusividade',
      texto: 'Durante os doze meses, **nenhuma outra associação de proteção, seguradora ou clube de benefícios concorrente** aparece no nosso conteúdo. A categoria é da Álamo.',
    },
  },

  rota: {
    eyebrow: '05 · A rota e as unidades',
    titulo: 'As três unidades já estão no caminho. Não é desvio, é roteiro.',
    lead: 'A expedição desce do Rio de Janeiro até Ushuaia e de lá sobe sem parar até o Alasca. Rio, São Paulo e Curitiba caem exatamente no trecho de descida — dá pra documentar as três unidades sem tirar um quilômetro do trajeto.',
    paradas: [
      {
        km: 'Unidade 01 · Partida',
        titulo: 'Rio de Janeiro — Barra da Tijuca',
        texto: 'Largada da expedição na cidade-sede da Álamo. Conteúdo de abertura da parceria gravado na unidade da Av. Embaixador Abelardo Bueno, com a equipe de vocês.',
        unidade: true,
      },
      {
        km: 'Unidade 02',
        titulo: 'São Paulo — Vila Prudente',
        texto: 'Primeira parada da descida. Gravação na unidade da R. José dos Reis, mostrando como funciona o atendimento da Álamo por dentro.',
        unidade: true,
      },
      {
        km: 'Unidade 03',
        titulo: 'Curitiba — Santa Quitéria',
        texto: 'Última unidade antes da fronteira. Conteúdo de despedida do Brasil gravado na R. Bocaiúva — a marca ficando literalmente para trás enquanto o carro segue.',
        unidade: true,
      },
      {
        km: 'Descida ao Sul',
        titulo: 'Uruguai · Argentina',
        texto: 'Saída do Brasil e aproximação da Patagônia. A partir daqui, a Álamo é a única marca brasileira de proteção rodando no continente.',
      },
      {
        km: 'Marco 01',
        titulo: 'Ushuaia — o fim do mundo',
        texto: 'O ponto mais austral das Américas. Aqui acontece o primeiro registro de bandeira da Álamo, em foto e vídeo, no marco do fim do mundo.',
        marco: true,
      },
      {
        km: 'Subida pelos Andes',
        titulo: 'Chile · Bolívia · Peru · Equador · Colômbia',
        texto: 'Deserto do Atacama, passagens acima de 4.000m e estradas de montanha — o trecho onde o conteúdo de assistência 24h e telemedicina fala por si.',
      },
      {
        km: 'América Central',
        titulo: 'Panamá · Costa Rica · Nicarágua · Honduras · El Salvador · Guatemala',
        texto: 'Sequência intensa de fronteiras e selva, a travessia mais complexa da viagem.',
      },
      {
        km: 'América do Norte',
        titulo: 'México · Estados Unidos · Canadá',
        texto: 'Rodovias longas, clima em queda constante e a reta final rumo ao território ártico.',
      },
      {
        km: 'Marco 02 · Chegada',
        titulo: 'Alasca — o extremo norte',
        texto: 'A linha de chegada e o segundo registro de bandeira da Álamo. Dois extremos do planeta, uma marca só levada até lá.',
        marco: true,
      },
    ],
    nota: {
      rotulo: 'Sobre as bandeiras:',
      texto: 'os dois registros de bandeira são entregáveis do contrato. A foto e o vídeo acontecem no ponto-marco de cada destino; o enquadramento exato depende das condições de clima e de acesso no dia, e havendo impedimento o registro é refeito no ponto alternativo mais próximo, sempre dentro do mesmo destino. Se a chegada ao Alasca acontecer depois do fim dos doze meses, o registro é entregue do mesmo jeito — esse compromisso não expira junto com o contrato.',
    },
  },

  entregaveis: {
    eyebrow: '06 · O que produzimos',
    titulo: 'Um pacote fixo, todo mês, durante doze meses.',
    lead: 'Nada de "conforme a oportunidade". O contrato tem volume definido: a Álamo sabe exatamente o que recebe em cada mês da parceria.',
    mensalRotulo: 'Todo mês',
    mensal: [
      {
        qtd: '1',
        unidade: 'Reel',
        titulo: 'Reel mensal com a Álamo',
        texto: 'Um Reel por mês publicado no nosso perfil principal, com a Álamo citada e em selo. Distribuído também em TikTok e YouTube Shorts, sem custo adicional.',
      },
      {
        qtd: '5',
        unidade: 'Gavetas',
        titulo: 'Cinco gavetas de story por mês',
        texto: 'Cinco sequências de story ao longo do mês, cada uma com link e marcação da Álamo — o formato que mais converte clique pra simulação.',
      },
    ],
    calendarioRotulo: 'Calendário editorial dos 12 Reels',
    calendarioLead: 'Uma frente do portfólio por mês, encaixada no ponto da rota onde ela faz sentido sozinha.',
    calendario: [
      { mes: '01', tema: 'Abertura da parceria',       frente: 'Todas',     texto: 'Quem é a Álamo, o que ela cobre e por que ela vai junto — gravado na unidade do Rio, na largada.' },
      { mes: '02', tema: 'O carro é a casa',           frente: 'O carro',   texto: 'Proteção veicular e assistência 24h, gravado na unidade de São Paulo durante a descida.' },
      { mes: '03', tema: 'Despedida do Brasil',        frente: 'O carro',   texto: 'Última parada em Curitiba: o que a gente deixa resolvido antes de cruzar a fronteira.' },
      { mes: '04', tema: 'O maior custo da viagem',    frente: 'O bolso',   texto: 'Até 10% de desconto no combustível — a conta que todo viajante de carro faz.' },
      { mes: '05', tema: 'Viajando com o Luck',        frente: 'O Luck',    texto: 'Assistência pet na prática: levar um gato numa expedição de dois hemisférios.' },
      { mes: '06', tema: 'Bandeira em Ushuaia',        frente: 'Todas',     texto: 'O fim do mundo, a bandeira da Álamo e o balanço de meio de contrato.' },
      { mes: '07', tema: 'E a casa que ficou?',        frente: 'A casa',    texto: 'Assistência residencial: resolver emergência em casa estando a milhares de quilômetros.' },
      { mes: '08', tema: 'Passar mal longe de tudo',   frente: 'A saúde',   texto: 'Telemedicina 24/7 nos Andes, a dias do hospital mais próximo.' },
      { mes: '09', tema: 'Viajar mais gastando menos', frente: 'O bolso',   texto: 'Clube de Vantagens e cashback — o conteúdo que o público salva e compartilha.' },
      { mes: '10', tema: 'O que dá errado na estrada', frente: 'O carro',   texto: 'Para-brisa, vidros, terceiros e carro reserva: os imprevistos que ninguém planeja.' },
      { mes: '11', tema: 'Mês livre da Álamo',         frente: 'A definir', texto: 'Reservado para a campanha ou o lançamento que vocês quiserem encaixar no período.' },
      { mes: '12', tema: 'Um ano de estrada',          frente: 'Todas',     texto: 'Fechamento: o balanço dos doze meses e de tudo que a Álamo cobriu no caminho.' },
    ],
    anoRotulo: 'No total dos 12 meses',
    ano: [
      { num: `${reels}`,   label: 'Reels publicados'       },
      { num: `${gavetas}`, label: 'Gavetas de story'       },
      { num: '3',          label: 'Unidades documentadas'  },
      { num: '2',          label: 'Bandeiras nos extremos' },
    ],
    extrasRotulo: 'Incluso no pacote, sem cobrança extra',
    extras: [
      'Direito de uso de todo o material bruto e editado nas campanhas próprias da Álamo durante a vigência e por 12 meses após o fim dela',
      'Redistribuição das peças nos canais da Álamo (perfil, site, anúncios) sem limite de veiculação',
      'Exclusividade de categoria: nenhuma outra associação de proteção ou clube de benefícios concorrente aparece no nosso conteúdo',
      'Aprovação prévia de roteiro pela Álamo antes da publicação de cada Reel',
      'Relatório de desempenho a cada trimestre, com alcance, visualizações e engajamento de cada peça',
      'Destaque fixo no Instagram reunindo todo o conteúdo da parceria, mantido no perfil após o fim do contrato',
    ],
    nota: {
      rotulo: 'Sobre o calendário:',
      texto: 'a contagem dos doze meses começa na data de assinatura, e o calendário acima é uma proposta — a ordem dos temas se ajusta ao ritmo real da rota e às campanhas de vocês. As gravações nas três unidades acontecem no trecho de descida e não substituem o Reel mensal.',
    },
  },

  numeros: {
    eyebrow: '07 · Números e público',
    titulo: 'Audiência real, engajada e no perfil de quem contrata proteção.',
    lead: 'Dados consolidados de Instagram, TikTok, Facebook e YouTube — a base que vai acompanhar a Álamo em cada fronteira cruzada.',
    stats: [
      { num: '+25M',  label: 'Visualizações'     },
      { num: '+500K', label: 'Curtidas'          },
      { num: '+300K', label: 'Compartilhamentos' },
      { num: '+100K', label: 'Salvos'            },
    ],
    barras: [
      { label: 'Público feminino',         pct: 56 },
      { label: 'Público masculino',        pct: 44 },
      { label: '25 a 34 anos',             pct: 47 },
      { label: 'Localizados em São Paulo', pct: 54 },
    ],
    tituloTags: 'O que esse público busca',
    tags: [
      'Viagem de carro', 'Carros', 'Vida na estrada', 'Aventura', 'Roteiros',
      '4x4 / Overland', 'Vida nômade', 'Economia de viagem', 'Casal viajante', 'Pets na estrada',
    ],
  },

  equipamentos: {
    eyebrow: '08 · Equipamentos',
    titulo: 'Conteúdo com padrão de marca, não de improviso.',
    lead: 'O setup de captação garante que a marca Álamo apareça com qualidade profissional em qualquer terreno — do balcão da unidade ao gelo do Ártico.',
    itens: [
      {
        eyebrow: 'Câmera principal',
        nome: 'iPhone 17 Pro Max',
        texto: 'Fotos e vídeos em alta definição, cores fiéis e estabilidade que elevam o padrão de qualquer conteúdo de marca.',
      },
      {
        eyebrow: 'Estabilização',
        nome: 'DJI Osmo Pocket',
        texto: 'Vídeos suaves e profissionais mesmo em movimento — essencial para cenas dentro e ao redor do veículo em estrada.',
      },
      {
        eyebrow: 'Câmera 360°',
        nome: 'Akaso 360',
        texto: 'Captura de todos os ângulos em um único take, ideal para mostrar cenário e ambiente em cada trecho.',
      },
      {
        eyebrow: 'Registro aéreo',
        nome: 'DJI Mini 3',
        texto: 'Imagens aéreas cruzando cordilheira, deserto e estrada — os planos que mostram a escala real da expedição.',
      },
    ],
  },

  investimento: {
    eyebrow: '09 · O investimento',
    titulo: 'Duas formas de fechar. O pacote é o mesmo nas duas.',
    lead: `Parceria de doze meses, com volume de entrega fixo. O escopo abaixo soma ${real(contrato.tabela)} na nossa tabela de valores — a proposta sai por ${real(totalMensal)} e ainda inclui os dois momentos assinatura, que são item sob consulta.`,
    composicaoRotulo: 'Como esse valor se forma',
    composicaoLead: 'Todas as linhas abaixo saem da nossa tabela de valores. Nada aqui é preço montado só para esta proposta.',
    composicao: [
      {
        item: '12 Reels dedicados multiplataforma',
        detalhe: '12 × R$ 1.800 · cada um publicado em Instagram, TikTok, YouTube e Facebook',
        valor: 'R$ 21.600',
      },
      {
        item: '60 gavetas de story',
        detalhe: '12 meses × 5 gavetas · R$ 550 por mês',
        valor: 'R$ 6.600',
      },
      {
        item: 'Exclusividade de categoria',
        detalhe: '+20% sobre a produção · nenhum concorrente aparece no nosso conteúdo',
        valor: '+ R$ 5.640',
      },
      {
        item: 'Direitos de uso e impulsionamento — 12 meses',
        detalhe: '+50% · libera todo o material para a mídia paga da Álamo',
        valor: '+ R$ 16.920',
      },
      {
        item: '3 brand days nas unidades',
        detalhe: 'Rio de Janeiro, São Paulo e Curitiba · R$ 2.500 cada, com deslocamento',
        valor: '+ R$ 7.500',
      },
    ],
    composicaoTotal: { rotulo: 'Valor de tabela', valor: real(contrato.tabela) },
    composicaoBonus: {
      rotulo: 'Momento assinatura em Ushuaia e no Alasca',
      detalhe: 'Registro em marco geográfico com sessão de fotos e cessão de imagem. Na tabela é item sob consulta — nesta proposta entra sem cobrança adicional.',
      valor: 'Incluso',
    },
    planos: [
      {
        id: 'mensal',
        rotulo: 'Plano mensal',
        valor: real(contrato.mensal),
        periodo: '/mês',
        detalhe: `${contrato.meses}× de ${real(contrato.mensal)}`,
        total: `Total no ano: ${real(totalMensal)}`,
        linhas: [
          'Pagamento diluído em doze parcelas iguais',
          'Primeira parcela na assinatura, demais no mesmo dia dos meses seguintes',
          'Mesmo volume de entrega do plano à vista',
        ],
        destaque: false,
      },
      {
        id: 'avista',
        rotulo: 'Plano à vista',
        valor: real(contrato.aVista),
        periodo: 'pagamento único',
        detalhe: `em vez de ${real(totalMensal)}`,
        total: `Economia de ${real(economia)}`,
        selo: `${real(economia)} de desconto`,
        linhas: [
          'Pagamento único na assinatura do contrato',
          `${real(economia)} a menos que o plano mensal — o equivalente a dois meses grátis`,
          'Mesmo volume de entrega do plano mensal',
        ],
        destaque: true,
      },
    ],
    incluiRotulo: 'Os dois planos incluem',
    inclui: [
      `${reels} Reels ao longo dos doze meses, cobrindo as cinco frentes do portfólio`,
      `${gavetas} gavetas de story ao longo dos doze meses`,
      'Conteúdo gravado nas unidades do Rio, de São Paulo e de Curitiba',
      'Bandeira da Álamo registrada em Ushuaia e no Alasca',
      'Link fixo na bio e destaque permanente no Instagram',
      'Exclusividade de categoria e direito de uso do material',
    ],
    custoRotulo: 'Custo por peça de conteúdo',
    custo: [
      { plano: 'No plano mensal',  valor: realCentavos(totalMensal / pecas),    nota: `${real(totalMensal)} ÷ ${pecas} peças`    },
      { plano: 'No plano à vista', valor: realCentavos(contrato.aVista / pecas), nota: `${real(contrato.aVista)} ÷ ${pecas} peças` },
    ],
    nota: {
      rotulo: 'Vigência:',
      texto: 'doze meses a contar da data de assinatura do contrato. Pagamento em 50% na assinatura e 50% na entrega da última peça do ciclo, no plano mensal diluído em doze parcelas. Roteiro aprovado pela Álamo em até duas rodadas de revisão; rodadas adicionais são orçadas à parte. Valores não incluem produção de material publicitário fora do escopo descrito acima e são válidos por 60 dias.',
    },
  },

  contato: {
    eyebrow: '10 · Vamos conversar',
    titulo: 'O carro já está pronto. Falta a Álamo entrar junto.',
    lead: 'A rota está desenhada, as três unidades estão no caminho e o calendário de conteúdo já existe. O próximo passo é uma conversa de trinta minutos com o time de vocês. Segue nosso contato direto — respondemos no mesmo dia.',
    // Chaves iguais às da lista de contatos em AlaContato.jsx
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
    linha1: 'Nerds na Estrada · Proposta de parceria Álamo Benefícios',
    linha2: 'Rio de Janeiro → Ushuaia → Alasca · 12 meses',
    legal: 'A marca nominativa Álamo, o logotipo e a expressão "Álamo Benefícios" são de propriedade da Álamo Benefícios e são utilizados neste documento apenas para fins de identificação da marca citada nesta proposta comercial. Este material não é uma comunicação oficial da Álamo Benefícios e não representa vínculo, endosso ou parceria já firmada. Endereços das unidades e descrição dos produtos conforme informação pública no site da Álamo na data desta proposta.',
  },
}
