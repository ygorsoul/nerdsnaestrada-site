// Texto da proposta comercial para a Álamo Benefícios. Página em português
// apenas — diferente da proposta Mitsubishi, aqui não há troca de idioma, então
// o conteúdo mora num módulo simples em vez de um sistema de dicionários.
// Trechos entre **asteriscos** viram <strong>/<b> na tela (ver Rich.jsx).

// Tabela de preços unitários, a mesma publicada em /midiakit. A calculadora e
// a composição do investimento leem daqui, então não há como um número da tela
// desencontrar do outro.
export const precos = {
  integracao: 1200,        // integração em vídeo (só YouTube)
  integracaoRepost: 850,   // inclusão em vídeo: YouTube + repost em IG/TikTok/FB
  review: 2200,            // vídeo inteiro dedicado à marca
  reelMulti: 1800,         // Reels dedicado multiplataforma
  reelAdCode: 1300,        // Reel no Instagram com código de anúncio
  brandDay: 2500,          // dia de gravação com deslocamento
  stories: { 3: 350, 5: 550, 10: 1000 },
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

// O pacote que a proposta oferece. É o estado inicial da calculadora e a base
// dos valores exibidos na seção de investimento.
export const pacoteProposto = {
  meses: 12,
  mensais: { integracaoRepost: 1, reelMulti: 1 },
  storiesPack: 5,
  // Os Reels com código de anúncio não seguem cadência mensal: são 9 peças
  // distribuídas no ano,
  // então entram como item de contagem única, igual ao brand day. E não levam
  // o adicional de direitos por cima — o próprio código de anúncio já é a
  // licença de mídia paga daquela peça; cobrar de novo seria cobrar duas vezes.
  reelAdCode: 9,
  brandDay: 3,
  momentoAssinatura: 2,
  exclusividade: true,
  direitos: '12m',
}

export const contrato = {
  meses: 12,
  mensal: 5760,
  aVista: 63000,
  integracoesPorMes: 1,
  adCodes: 9,
  reelsPorMes: 1,
  gavetasPorMes: 5,
  // Valor de tabela do escopo, somando só linhas públicas da nossa tabela de
  // valores (ver /midiakit). O multiplicador interno de categoria de risco NÃO
  // entra aqui nem em nada que apareça na tela.
  tabela: 76800,
}

const totalMensal = contrato.mensal * contrato.meses               // 76.800
const economia = totalMensal - contrato.aVista                     // 12.800
const integracoes = contrato.integracoesPorMes * contrato.meses    // 12
const reels = contrato.reelsPorMes * contrato.meses                // 12
const gavetas = contrato.gavetasPorMes * contrato.meses            // 60
const adCodes = contrato.adCodes                                   // 9
const pecas = integracoes + reels + gavetas + adCodes              // 93

const real = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
const realCentavos = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

export const numeros = { totalMensal, economia, integracoes, reels, gavetas, adCodes, pecas, real, realCentavos }

export default {
  nav: {
    parceiro: 'Álamo Benefícios',
    // Mesma ordem das âncoras declaradas em AlaNav.jsx
    links: ['A proposta', 'Monte o pacote', 'Por quê', 'Quem somos', 'Portfólio', 'A rota', 'O que recebe', 'Investimento', 'Contato'],
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
    sub: `Uma parceria de **12 meses** em que a Álamo sai das três unidades — Rio, São Paulo e Curitiba — e atravessa as Américas dentro do nosso conteúdo. São **${integracoes} inclusões em vídeo**, **${reels} Reels**, **${adCodes} Reels que viram anúncio** e **${gavetas} gavetas de story** no ano, cobrindo o portfólio inteiro: **carro, casa, pet, saúde e bolso**.`,
    ctaProposta: 'Ver o investimento',
    ctaContato: 'Falar com Ygor & Bea',
    odometro: [
      { num: '12',           label: 'Meses de parceria'        },
      { num: `${pecas}`,     label: 'Peças de conteúdo no ano' },
      { num: '193 mil',      label: 'Seguidores nas 4 redes'   },
      { num: '+25 milhões',  label: 'Visualizações até agora'  },
    ],
  },

  // A oferta inteira em uma tela, logo depois do hero. Quem só lê o topo já
  // sai sabendo o que recebe e quanto custa; o detalhe fica mais abaixo.
  proposta: {
    eyebrow: 'A proposta',
    titulo: 'O que a Álamo recebe, e quanto custa.',
    lead: 'Está tudo aqui. O resto da página é o detalhe de cada linha, para quem quiser conferir.',
    recebeRotulo: 'Durante 12 meses',
    recebe: [
      `${integracoes} inclusões em vídeo no YouTube, com repost em Reels, TikTok e Facebook`,
      `${reels} Reels nossos, publicados nas quatro plataformas — Instagram, TikTok, YouTube e Facebook`,
      `${gavetas} gavetas de story, com link e marcação da Álamo`,
      `${adCodes} Reels no Instagram que a Álamo pode transformar em anúncio, com a nossa cara em vez de cara de propaganda`,
      'Conteúdo gravado nas unidades do Rio, de São Paulo e de Curitiba',
      'Bandeira da Álamo fincada em Ushuaia e no Alasca',
      'Exclusividade de categoria e direito de uso do material em mídia paga',
    ],
    precoRotulo: 'Investimento',
    mensal: real(contrato.mensal),
    mensalSufixo: '/mês',
    mensalDetalhe: `${contrato.meses}× · total de ${real(totalMensal)} no ano`,
    aVistaRotulo: 'Ou à vista',
    aVista: real(contrato.aVista),
    aVistaDetalhe: `${real(economia)} de economia — mais de um mês de contrato`,
    pecas: `${pecas} peças no ano — ${integracoes + reels} de vídeo e ${gavetas} gavetas de story`,
    tabela: `Valor de tabela: ${real(contrato.tabela)}`,
    ctaDetalhe: 'Ver como esse valor se forma',
    ctaContato: 'Falar com Ygor & Bea',
  },

  tese: {
    eyebrow: '01 · Por que faz sentido',
    titulo: 'A Álamo não protege só o carro. E a gente não vai só dirigir.',
    lead: 'Por doze meses a estrada é a nossa vida inteira: o veículo, a casa que ficou pra trás, o gato que vai junto, a saúde longe de qualquer coisa conhecida e cada real do orçamento. É exatamente o mapa do portfólio de vocês — e é o que a gente vai viver na frente da câmera.',
    // Sem grade de cartões aqui de propósito: a seção anterior e a seguinte já
    // são blocos, e três argumentos em texto corrido quebram o ritmo.
    argumentos: [
      {
        numero: '5',
        unidade: 'frentes',
        titulo: 'Não é um produto só',
        texto: 'Proteção veicular é a porta de entrada, mas a Álamo também cuida da casa, do pet, da saúde e do bolso. Cada uma dessas frentes tem um momento real da viagem onde ela aparece sozinha — o conteúdo não precisa forçar nada.',
      },
      {
        // O ativo real não é o tamanho da base — é que 91% do alcance dos
        // últimos 28 dias veio de quem ainda não seguia o perfil. É mais forte
        // do que "200 mil pessoas que confiam na gente", e é verificável.
        numero: '91%',
        unidade: 'do alcance é gente nova',
        titulo: 'Não é uma base parada, é uma máquina de alcance',
        texto: 'Nos últimos 28 dias o alcance subiu 738% e entraram 9,9 mil seguidores novos. Nove em cada dez pessoas que veem o nosso conteúdo ainda não seguiam o perfil — ou seja, a Álamo não aparece só para quem já nos conhece, aparece para quem está descobrindo agora. E quem descobre é dono de carro, roda muito e quer viajar gastando menos.',
      },
      {
        numero: '12',
        unidade: 'meses',
        titulo: 'Presença, não um post',
        texto: `Campanha pontual some. Um ano de presença contínua constrói associação de marca e dá espaço para apresentar um produto diferente por mês, sem cansar ninguém. São ${pecas} peças distribuídas ao longo do ano.`,
      },
    ],
    faixa: {
      rotulo: 'A frase que a viagem prova',
      texto: '"Genial é estar protegido" deixa de ser assinatura e vira **relato de rota**: a marca que cuida do carro, da casa, do pet e da saúde no Brasil é a mesma que aparece atravessando cordilheira, deserto, selva e gelo.',
    },
  },

  // Bloco escuro de largura total: é a única quebra forte no creme da página
  // e por isso concentra quem somos, alcance e equipamento num lugar só.
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
    alcanceRotulo: 'O alcance que a Álamo passa a ter',
    // Todos conferidos contra Instagram, Meta Business Suite, YouTube e TikTok
    // em 25/08/2026. Curtidas e compartilhamentos totais saíram daqui porque
    // não foi possível confirmar em nenhum painel — numa proposta que mostra a
    // conta aberta, número não verificável é passivo, não argumento.
    alcance: [
      { num: '193.934',     label: 'Seguidores somando as 4 redes' },
      { num: '+25 milhões', label: 'Visualizações até agora'       },
      { num: '+9,9 mil',    label: 'Novos seguidores em 28 dias'   },
      { num: '96,6%',       label: 'Do público está no Brasil'     },
    ],
    perfil: [
      { label: '25 a 34 anos',     pct: '37,1%' },
      { label: '35 a 44 anos',     pct: '32,0%' },
      { label: 'Público feminino', pct: '59,2%' },
    ],
    praca: {
      rotulo: 'A praça número 1',
      texto: 'A maior concentração do nosso público é a região metropolitana do Rio de Janeiro — 6,7% na capital mais 1,5% em Nova Iguaçu, à frente de São Paulo. É exatamente onde fica a sede da Álamo.',
    },
    fonte: 'Dados de Instagram, Meta Business Suite, YouTube e TikTok, apurados em 25 de agosto de 2026.',
    equipamentosRotulo: 'Tudo gravado com',
    equipamentos: ['iPhone 17 Pro Max', 'DJI Osmo Pocket', 'Akaso 360', 'DJI Mini 3'],
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



  rota: {
    eyebrow: '04 · A rota e as unidades',
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
    eyebrow: '05 · O que a Álamo recebe',
    titulo: 'Um pacote fixo, todo mês, durante doze meses.',
    lead: 'Nada de "conforme a oportunidade". O contrato tem volume definido, e cada peça tem lugar marcado no calendário.',
    mensalRotulo: 'Todo mês',
    mensal: [
      {
        qtd: '1',
        unidade: 'Inclusão',
        titulo: 'Inclusão em vídeo no YouTube',
        texto: 'Um bloco de 60 a 90 segundos sobre a Álamo dentro de um vlog do canal, com corte republicado em Reels, TikTok e Facebook. É o formato de maior confiança: a marca aparece no meio da viagem, contada por nós, e não num anúncio à parte.',
      },
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
    calendarioRotulo: 'Calendário editorial',
    calendarioColunas: ['Mês', 'Tema', 'Frente'],
    calendarioLead: 'Uma frente do portfólio por mês, encaixada no ponto da rota onde ela faz sentido. Cada tema rende as duas peças de vídeo do mês.',
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
    ondeRotulo: 'Onde a marca aparece',
    onde: [
      {
        tag: 'Na abertura',
        titulo: 'Anúncio da parceria nos nossos canais',
        texto: 'Post e sequência de story declarando a Álamo parceira oficial da expedição, publicados no início da vigência para todo o público de uma vez.',
      },
      {
        tag: 'Na tela',
        titulo: 'Menção falada e selo nas peças de vídeo',
        texto: 'A Álamo é citada nominalmente na integração do YouTube e no Reel de cada mês, e a marca aparece em selo no vídeo — sem depender de o espectador ler a legenda.',
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
    extrasRotulo: 'Incluso no pacote, sem cobrança extra',
    extras: [
      'Direito de uso de todo o material bruto e editado nas campanhas próprias da Álamo durante a vigência e por 12 meses após o fim dela',
      'Redistribuição das peças nos canais da Álamo (perfil, site, anúncios) sem limite de veiculação',
      'Exclusividade de categoria: nenhuma outra associação de proteção ou clube de benefícios concorrente aparece no nosso conteúdo',
      'Aprovação prévia de roteiro pela Álamo antes de cada peça de vídeo, em até 2 rodadas e com 3 dias úteis de prazo por rodada — passado o prazo sem retorno, o roteiro segue como aprovado',
      'Relatório mensal com alcance, visualizações e engajamento de cada peça publicada',
      'Destaque fixo no Instagram reunindo todo o conteúdo da parceria, mantido no perfil após o fim do contrato',
    ],
    nota: {
      rotulo: 'Sobre o calendário:',
      texto: 'a contagem dos doze meses começa na data de assinatura, e o calendário acima é uma proposta — a ordem dos temas se ajusta ao ritmo real da rota e às campanhas de vocês. As gravações nas três unidades acontecem no trecho de descida e não substituem as peças mensais.',
    },
  },



  investimento: {
    eyebrow: '06 · O investimento',
    titulo: 'Duas formas de fechar. O pacote é o mesmo nas duas.',
    lead: `O escopo abaixo soma ${real(contrato.tabela)} comprado peça a peça. Com contrato anual a exclusividade de categoria entra sem custo e a proposta sai por ${real(totalMensal)} — mais os dois momentos assinatura, que são item sob consulta e aqui vão inclusos.`,
    composicaoRotulo: 'Como esse valor se forma',
    composicaoLead: 'Todas as linhas abaixo saem da nossa tabela de valores. Nada aqui é preço montado só para esta proposta.',
    composicao: [
      {
        item: '12 inclusões em vídeo no YouTube',
        detalhe: '12 × R$ 850 · bloco de 60 a 90s dentro de um vlog, com corte em Reels, TikTok e Facebook',
        valor: 'R$ 10.200',
      },
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
        valor: '+ R$ 7.680',
      },
      {
        item: 'Direitos de uso e impulsionamento — 12 meses',
        detalhe: '+30% sobre a produção · libera todo o material para a mídia paga da Álamo',
        valor: '+ R$ 11.520',
      },
      {
        item: '9 Reels que a Álamo pode virar anúncio',
        detalhe: '9 × R$ 1.300 · publicados no Instagram com código de anúncio — vocês impulsionam a partir do nosso perfil',
        valor: '+ R$ 11.700',
      },
      {
        item: '3 brand days nas unidades',
        detalhe: 'Rio de Janeiro, São Paulo e Curitiba · R$ 2.500 cada, por dia de produção dedicado',
        valor: '+ R$ 7.500',
      },
    ],
    composicaoTotal: { rotulo: 'Valor de tabela · comprado peça a peça', valor: real(contrato.tabela) },
    composicaoDesconto: {
      rotulo: 'Contrato de 12 meses',
      detalhe: 'A exclusividade de categoria deixa de ser adicional de 20% e entra inclusa. É exatamente essa linha que sai da conta.',
      valor: `− ${real(contrato.tabela - totalMensal)}`,
    },
    composicaoFinal: { rotulo: 'Nesta proposta', valor: real(totalMensal) },
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
          `${real(economia)} a menos que o plano mensal — mais de um mês de contrato`,
          'Mesmo volume de entrega do plano mensal',
        ],
        destaque: true,
      },
    ],
    incluiRotulo: 'Os dois planos incluem',
    inclui: [
      `${integracoes} inclusões em vídeo no YouTube, com repost em Reels, TikTok e Facebook`,
      `${reels} Reels dedicados ao longo dos doze meses, cobrindo as cinco frentes do portfólio`,
      `${adCodes} desses Reels saem com código de anúncio, para a Álamo impulsionar como mídia paga`,
      `${gavetas} gavetas de story ao longo dos doze meses`,
      'Conteúdo gravado nas unidades do Rio, de São Paulo e de Curitiba',
      'Bandeira da Álamo registrada em Ushuaia e no Alasca',
      'Link fixo na bio e destaque permanente no Instagram',
      'Exclusividade de categoria e direito de uso do material',
    ],
    pilotoRotulo: 'Se doze meses for um salto grande demais',
    piloto: {
      titulo: 'Piloto de 3 meses',
      valor: real(19500),
      detalhe: `3× de ${real(6500)} — mais caro por mês, porque contrato curto não dilui planejamento`,
      linhas: [
        '1 inclusão em vídeo, 1 Reel e 5 gavetas de story por mês',
        'Os três brand days concentrados no piloto: Rio, São Paulo e Curitiba, que é justamente o trecho de descida',
        'Exclusividade de categoria durante os três meses',
      ],
      conversao: 'Se virar contrato anual em até 30 dias do fim do piloto, os R$ 19.500 são abatidos integralmente do valor do ano.',
    },
    custoRotulo: 'Custo por peça de conteúdo',
    custo: [
      { plano: 'No plano mensal',  valor: realCentavos(totalMensal / pecas),    nota: `${real(totalMensal)} ÷ ${pecas} peças`    },
      { plano: 'No plano à vista', valor: realCentavos(contrato.aVista / pecas), nota: `${real(contrato.aVista)} ÷ ${pecas} peças` },
    ],
    nota: {
      rotulo: 'Vigência:',
      texto: 'doze meses a contar da data de assinatura do contrato, na forma de pagamento do plano escolhido acima. Roteiro aprovado pela Álamo em até duas rodadas de revisão; rodadas adicionais são orçadas à parte. Valores não incluem produção de material publicitário fora do escopo descrito acima e são válidos por 60 dias.',
    },
  },

  calculadora: {
    eyebrow: 'Monte o seu pacote',
    titulo: 'Quer menos conteúdo? Você escolhe.',
    lead: 'O pacote acima é o que a gente recomenda, mas ele não é fechado. Tire o que não fizer sentido, acrescente o que fizer, encurte ou estenda o contrato — o preço acompanha na hora, pelos mesmos valores de tabela. Sem precisar pedir orçamento novo.',
    mensaisRotulo: 'Peças por mês',
    mensais: [
      { chave: 'integracaoRepost', nome: 'Inclusão em vídeo no YouTube', detalhe: 'Bloco de 60 a 90s dentro de um vlog do canal, com corte em Reels, TikTok e Facebook' },
      { chave: 'reelMulti',        nome: 'Reel nas quatro plataformas',   detalhe: 'Instagram, TikTok, YouTube e Facebook. Alcance orgânico, sem impulsionamento' },
      { chave: 'review',           nome: 'Review completo',               detalhe: 'Vídeo inteiro dedicado — título, thumb e roteiro' },
    ],
    storiesRotulo: 'Stories por mês',
    storiesOpcoes: [0, 3, 5, 10],
    storiesNenhum: 'Nenhum',
    unicosRotulo: 'Peças e produções avulsas · contadas no ano, não por mês',
    unicos: [
      { chave: 'reelAdCode',        nome: 'Reel que vira anúncio',   detalhe: 'Só no Instagram, mas a Álamo pode impulsionar como anúncio a partir do nosso perfil', max: 12 },
      { chave: 'brandDay',          nome: 'Brand day nas unidades',  detalhe: 'Dia de produção dedicado na unidade: vídeo + stories no local', max: 6 },
      { chave: 'momentoAssinatura', nome: 'Momento assinatura',      detalhe: 'Bandeira em marco geográfico com sessão de fotos — os 2 do pacote (Ushuaia e Alasca) já entram inclusos', max: 4, sobConsulta: true },
    ],
    duracaoRotulo: 'Duração do contrato',
    duracaoSufixo: 'meses',
    duracaoNota: 'Doze meses é a nossa tarifa de referência. Contratos mais curtos custam mais por peça, porque planejamento, alinhamento de roteiro e aprovação não se diluem numa campanha pontual.',
    adicionaisRotulo: 'Adicionais',
    adicionaisItens: [
      { chave: 'exclusividade', nome: 'Exclusividade de categoria', detalhe: '+20% · nenhum concorrente aparece no nosso conteúdo', inclusaNota: 'Inclusa no contrato de 12 meses' },
    ],
    direitosRotulo: 'Direitos de uso e impulsionamento',
    direitosOpcoes: [
      { valor: 'nenhum', nome: 'Sem mídia paga', detalhe: 'As peças ficam só nos nossos canais' },
      { valor: '90',     nome: '90 dias',        detalhe: '+18%' },
      { valor: '12m',    nome: '12 meses',       detalhe: '+30%' },
    ],
    resumoRotulo: 'O seu pacote',
    linhas: {
      producao: 'Produção',
      duracao: 'Tarifa de contrato',
      exclusividade: 'Exclusividade de categoria',
      direitos: 'Direitos de uso',
      especial: 'Peças e produções avulsas',
      total: 'Total do contrato',
      porMes: 'Por mês',
      porPeca: 'Por peça de conteúdo',
      pecas: 'peças no período',
      inclusa: 'inclusa',
      inclusos: 'inclusos',
      sobConsulta: 'sob consulta',
    },
    comparativo: {
      rotulo: 'Se fosse campanha pontual',
      texto: 'A parte mensal deste pacote, contratada por um mês só, sairia {avulso} por mês — {pct} mais caro que no contrato de {meses}.',
      rotuloAnual: 'O que muda com contrato anual',
      textoAnual: 'A parte mensal deste pacote, contratada por doze meses, cai para {anual} por mês — {pct} menos do que numa campanha pontual.',
    },
    recomendado: 'Plano recomendado',
    alterado: 'Você mudou o pacote proposto.',
    restaurar: 'Voltar ao pacote da proposta',
    cta: 'Mandar esse pacote no WhatsApp',
    ctaMensagem: 'Olá! Montamos um pacote na proposta do Nerds na Estrada e queremos conversar sobre ele.',
    vazio: 'Escolha pelo menos uma peça para ver o valor.',
    notaAssinatura: 'Ushuaia e Alasca já entram no pacote sem cobrança. Bandeira em um terceiro marco é orçada à parte.',
  },

  pdf: {
    rotulo: 'Baixar em PDF',
    // O navegador usa o <title> do documento como nome sugerido do arquivo, e
    // o título real da página é longo demais para virar nome de arquivo.
    arquivo: 'Proposta Alamo Beneficios - Nerds na Estrada',
  },

  contato: {
    eyebrow: '07 · Vamos conversar',
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
