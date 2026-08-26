---
format: 1920x1080
duration: 75s
message: "O pacote não é fechado: mexa nos controles e o preço acompanha na hora"
arc: Demo Loop — pergunta → a calculadora → ciclo de demo 1..4 → prova (o cartão) → CTA
audience: "Time da Álamo Benefícios que recebeu a proposta /alamo"
mode: autonomous
music: none
language: pt-BR
---

## Video direction

**Paleta** (de `frame.md`, nada inventado): fundo creme `bg-primary` em todos os quadros, tinta `text-primary` para número e título, `text-secondary` para rótulo e corpo, laranja Álamo `accent` só onde a tela real usa laranja — eyebrow, estado ativo de controle, valor do total, selo de percentual — e fio taupe `line` como única régua estrutural. Azul-marinho `#14477F` aparece só onde a própria calculadora usa: nome de linha ativa, custo por peça, valor da duração. Zero sombra pesada; profundidade por fio de 1px e por camada, como na página.

**Palco fixo.** Do Frame 2 ao Frame 6 a calculadora reconstruída ocupa o mesmo palco e não se mexe entre quadros: coluna de controles à esquerda (x 150–1120) e cartão "O seu pacote" à direita (x 1180–1740, topo y 140). O cartão é o mesmo objeto o vídeo inteiro — quem muda é o que está escrito nele. É reconstrução de UI declarada: os rótulos, os preços e as linhas do resumo são os da tela real (`src/alamo/textos.js`), não texto de vídeo.

**Gramática de movimento.** Assentamento de cauda longa (`power3`) em tudo; nenhum overshoot. Toda revelação entra quando a narração chega nela — nunca antes. O par causal manda: controle e cartão respondem no MESMO label da timeline (`control-target-sync`), porque a tese do vídeo é exatamente essa causalidade. O cursor é o ator e é grande o bastante para ler a 1920 (~46px), com ponta na coordenada real do alvo; ele nunca aparece sem ter para onde ir.

**Ritmo e quadros parados.** Frames 3, 5 e 6 são os de mais evento (cada um tem um gesto e uma reescrita). Frames 1 e 7 são de leitura parada: entram, resolvem e ficam quietos — no máximo jitter de baixa amplitude. Frame 4 é o ciclo curto, de propósito, para o 5 (o beat mais longo e mais importante) não chegar depois de dois quadros pesados.

**Faixa de legenda.** Nada abaixo de y=900. O palco inteiro cabe entre y=70 e y=880.

**Lista negativa.** Sem barra de navegação, rodapé, barra de rolagem, cursor de sistema ou cromo de navegador — a reconstrução mostra a seção, não o browser. Sem breathing (card pulsando para "parecer vivo"), sem pan/push na segunda metade de nenhum quadro, sem elementos flutuando por conta própria. E sem repetir a narração como texto na tela: quem escreve o que está sendo dito é a faixa de legenda.

## Frame 1 — A proposta não é fechada

- scene: O número da proposta, R$ 36.000, sozinho no quadro — e a linha que o desmonta
- type: hook
- blueprint: kinetic-type-beats (Adapt)
- duration: 7.083s
- poster: 5s
- transition_in: cut
- status: animated
- voiceover: "A proposta que a Álamo recebeu tem um número: trinta e seis mil reais. Só que ele não é uma sentença — é um ponto de partida."
- asset_candidates: assets/img/pagina-oferta.png (a seção da oferta, de onde vem o número), assets/img/logo-nne.png (marca Nerds na Estrada), assets/img/logo-alamo-navy.png (marca oficial da Álamo)
- focal: o número R$ 36.000 (tipografia, não asset)
- roles: pagina-oferta.png = background (creme chapado, ~8% de opacidade, só para dar textura de página) · logo-nne.png + logo-alamo-navy.png = supporting (lockup pequeno no topo)
- handoff_out: nenhum — corte limpo para o palco do Frame 2
- src: compositions/frames/01-proposta-nao-fechada.html

Abre no valor da proposta como quem abre numa objeção: o time olhou o total e pensou "é isso e pronto?". A resposta chega na mesma respiração — não é. Toda a evidência depois disso serve a essa frase.

Adapt: mantém a assinatura do kinetic-type-beats — a troca de token no lugar é o beat —, mas o token que troca fica embaixo de um número que não se mexe, porque o argumento é "o número continua, o que muda é o que ele significa".

Scene 1 (0.0–2.4s): campo creme cheio, fio taupe horizontal atravessando o terço inferior. Rótulo `micro` laranja "MONTE O SEU PACOTE" entra por revelação por palavra (`dynamic-content-sequencing`) no alto; logo abaixo o número **R$ 36.000** em `display` Playfair, tinta, entra com assentamento de cauda longa (`spring-pop-entrance`, registro suave). Ancorado à esquerda na margem da página, o número ocupa ~55% da largura. Nada mais no quadro.
Scene 2 (2.4–4.6s): quando a narração chega em "não é uma sentença", a linha sob o número troca de token no lugar por corte duro (`discrete-text-sequence`): **PACOTE FECHADO** → **PONTO DE PARTIDA**, em `label` laranja tracked. O número não se move; só a palavra debaixo dele muda — a troca é a piada.
Scene 3 (4.6–7.083s): o fio taupe se desenha da esquerda para a direita sob o par (`svg-path-draw`) e o quadro para. Lockup Nerds na Estrada × Álamo em escala pequena no canto superior esquerdo. Leitura parada; no máximo jitter de baixa amplitude (`sine-wave-loop`, registro mínimo) no número.

## Frame 2 — Monte o seu pacote

- scene: A calculadora inteira entra em cena; o cursor pousa e o cartão de resumo acende
- type: product_intro
- blueprint: cursor-ui-demo (Reproduce — variante Product_Intro, palco travado)
- duration: 9.067s
- poster: 6s
- transition_in: crossfade
- status: animated
- voiceover: "Logo abaixo da oferta tem uma calculadora. Cada linha da esquerda é um controle. O cartão da direita refaz a conta na hora, pelos mesmos valores de tabela."
- asset_candidates: assets/img/pagina-calculadora.png (a seção real "Monte o seu pacote", referência de layout 1:1)
- focal: o palco inteiro da calculadora
- roles: pagina-calculadora.png = supporting (referência de layout; a UI é reconstruída em HTML, não a imagem)
- handoff_out: cartão "O seu pacote" em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 36.000
- src: compositions/frames/02-monte-o-pacote.html

Primeira olhada guiada na superfície: dois lados, controles e resultado. Ninguém precisa entender a conta — precisa entender que ela é sua.

Scene 1 (0.0–2.6s): o palco chega inteiro — coluna de controles à esquerda (grupos "Peças por mês", "Stories por mês", "Duração do contrato") e cartão "O seu pacote" à direita — por handoff de escala vindo do quadro anterior (`scale-swap-transition`), assentando em escala 1. O cartão entra com o laranja rebaixado, quase cinza: ele ainda não é o assunto. Assimétrico 62/38, três camadas (fundo creme, cartões, fios).
Scene 2 (2.6–5.6s): na deixa "cada linha da esquerda é um controle", as três linhas de "Peças por mês" acendem em sequência (`asr-keyword-glow`), cada uma com seu stepper ganhando contorno laranja por um instante. O cursor entra pela borda inferior direita e sobe (`cursor-click-ripple`, só a fase de deslocamento) sem clicar em nada.
Scene 3 (5.6–9.067s): na deixa "o cartão da direita refaz a conta", o cursor pousa na borda do cartão; a borda laranja do cartão sobe para a intensidade real, o selo "PLANO RECOMENDADO" dá um pop (`spring-pop-entrance`) e o total **R$ 36.000** — que já estava lá, porque o cartão real nunca aparece sem valor — acende no laranja cheio e volta (`asr-keyword-glow`), com a linha "R$ 3.000 por mês · 92 peças no período" escurecendo junto. Assenta e segura parado.

## Frame 3 — Peças por mês

- scene: O cursor tira um Reel no stepper e o total desaba de R$ 36.000 para R$ 22.800
- type: feature_showcase
- blueprint: panel-edit-live-sync (Reproduce)
- duration: 10.517s
- poster: 8s
- transition_in: cut
- status: animated
- voiceover: "Comece pelas peças por mês. Se o Reel nas quatro plataformas não faz sentido agora, é só tirar. O total cai para vinte e dois mil e oitocentos, e o mês vira mil e novecentos reais."
- asset_candidates: assets/img/pagina-calculadora.png (grupo "Peças por mês" e o cartão de resumo)
- focal: o stepper da linha "Reel nas quatro plataformas"
- roles: pagina-calculadora.png = supporting (referência de layout do grupo e do cartão)
- handoff_in: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 36.000
- handoff_out: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 22.800
- src: compositions/frames/03-pecas-por-mes.html

Primeira prova, e a mais literal: mexeu num lugar, mudou no outro, sem pedir orçamento novo.

Scene 1 (0.0–2.6s): o grupo "Peças por mês" ocupa a esquerda em escala maior (as três linhas com nome, detalhe, preço unitário e stepper), o cartão segue à direita, imóvel, exatamente onde estava. O cursor já está em quadro, vindo da posição em que o Frame 2 o deixou, e desliza até o "−" da linha "Reel nas quatro plataformas" (`cursor-click-ripple`, fase de deslocamento).
Scene 2 (2.6–4.6s): na deixa "é só tirar", o clique acontece — cursor e botão comprimem juntos e uma anilha se abre do ponto do clique (`cursor-click-ripple` + `press-release-spring`). O contador do stepper vai de **1** para **0** por corte, e a linha perde o estado ativo: o nome sai do azul-marinho para o taupe.
Scene 3 (4.6–8.0s): o par causal — no MESMO label do clique, o cartão reescreve (`control-target-sync`): "Produção" desce de R$ 24.000 para **R$ 10.800** e o total desce de R$ 36.000 para **R$ 22.800** com o dígito rolando (`counting-dynamic-scale`, `tabular-nums`). A linha de baixo troca por corte para "R$ 1.900 por mês · 80 peças no período" e "Por peça de conteúdo" vira **R$ 285**.
Scene 4 (8.0–10.517s): o valor do total ganha um fio laranja desenhado por baixo (`svg-path-draw`) e o quadro para. Sem câmera, sem deriva.

## Frame 4 — Gavetas de story

- scene: As opções 0 · 3 · 5 · 10 acendem uma a uma; a de 3 fica ativa e o resumo reescreve
- type: feature_showcase
- blueprint: cursor-ui-demo (Adapt — variante state tour, palco travado)
- duration: 7.488s
- poster: 5s
- transition_in: cut
- status: animated
- voiceover: "As gavetas de story vão por pacote: três, cinco ou dez por mês. Trocando cinco por três, o mês fica em mil setecentos e cinquenta."
- asset_candidates: assets/img/pagina-calculadora.png (grupo "Stories por mês" com as quatro opções)
- focal: a fileira de opções 0 · 3 · 5 · 10
- roles: pagina-calculadora.png = supporting (referência de layout das opções)
- handoff_in: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 22.800
- handoff_out: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 21.000
- src: compositions/frames/04-gavetas-de-story.html

Segundo ciclo do loop, em outro tipo de controle — para a tela mostrar que cada grupo se comporta do jeito dele.

Adapt: mantém a assinatura do cursor-ui-demo — cursor age, a UI responde no mesmo beat, câmera travada. O que muda é que a resposta não é um painel novo: é a transferência do estado ativo entre quatro pastilhas.

Scene 1 (0.0–2.2s): o grupo "Stories por mês" sobe para a esquerda com as quatro pastilhas (Nenhum · 3 · 5 · 10, cada uma com seu preço); a de **5** já está ativa, com moldura laranja e fundo lavado, como na tela real. O cartão continua parado à direita com R$ 22.800.
Scene 2 (2.2–4.4s): na deixa "trocando cinco por três", o cursor cruza da pastilha 5 para a 3 e clica (`cursor-click-ripple`). O estado ativo transfere por corte duro (`discrete-text-sequence`): a moldura laranja sai de uma e entra na outra no mesmo quadro — sem transição, porque é assim que a página faz.
Scene 3 (4.4–7.488s): no mesmo label, o cartão responde (`control-target-sync`): "Produção" vai a **R$ 9.000**, total a **R$ 21.000**, e a linha de baixo passa a "R$ 1.750 por mês · 56 peças no período". Assenta e segura.

## Frame 5 — Duração do contrato

- scene: O slider vai de 12 para 6 meses; nasce o selo +6% e a exclusividade deixa de ser "inclusa"
- type: feature_showcase
- blueprint: panel-edit-live-sync (Reproduce — variante scrub contínuo)
- duration: 13.568s
- poster: 9s
- transition_in: cut
- status: animated
- voiceover: "O slider da duração é o que mais mexe no preço. Em doze meses vale a tarifa de referência, e a exclusividade de categoria entra sem custo. Puxando para seis, aparece um prêmio de seis por cento — e a exclusividade passa a ser cobrada."
- asset_candidates: assets/img/pagina-calculadora.png (grupo "Duração do contrato" e as linhas do resumo)
- focal: o knob do slider de duração
- roles: pagina-calculadora.png = supporting (referência de layout do slider e do cartão)
- handoff_in: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 21.000
- handoff_out: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 17.724
- src: compositions/frames/05-duracao-do-contrato.html

O beat mais importante do vídeo: é aqui que o preço deixa de parecer arbitrário. Contrato curto custa mais por peça, e a tela mostra exatamente onde isso entra na conta.

Scene 1 (0.0–2.8s): o grupo "Duração do contrato" toma a esquerda: trilho do slider com o knob na ponta direita, e ao lado o valor **12** em Playfair azul-marinho com "meses" em corpo pequeno. A nota da tela ("doze meses é a nossa tarifa de referência") aparece em `body-sm` taupe sob o trilho. Cartão parado à direita.
Scene 2 (2.8–5.4s): na deixa "a exclusividade de categoria entra sem custo", a linha "Exclusividade de categoria — INCLUSA" do cartão acende em laranja (`asr-keyword-glow`) e volta ao repouso. Nada mais se mexe: o quadro está mostrando o que se vai perder.
Scene 3 (5.4–9.2s): na deixa "puxando para seis", o cursor agarra o knob e arrasta para a esquerda em lockstep (`cursor-drag`, tweens casados: mesma posição, duração e ease). O número ao lado desce **12 → 6** por passos discretos travados no mesmo objeto de estado (`control-target-sync`, variante discreta), e ao chegar em 6 o selo **+6%** dá um pop laranja ao lado do valor (`spring-pop-entrance`).
Scene 4 (9.2–11.6s): o cartão reescreve no mesmo label do fim do arrasto (`control-target-sync`): "Produção" a **R$ 4.500**, e uma linha nova, "Tarifa de contrato · +6% — **R$ 270**", desce para o lugar empurrando as de baixo (`waterfall-entry`). A linha da exclusividade vira por corte de "INCLUSA" para **R$ 954** — é a única troca do vídeo que muda de cor: sai do laranja de "de graça" para a tinta de valor cobrado.
Scene 5 (11.6–13.568s): o total assenta em **R$ 17.724** com "R$ 2.954 por mês · 32 peças no período" e "Por peça de conteúdo R$ 553,88" (`counting-dynamic-scale`). Para. O contraste é o argumento: total menor, mês mais caro.

## Frame 6 — Direitos e exclusividade

- scene: O cursor escolhe "12 meses" nos direitos; a linha +30% entra no resumo
- type: feature_showcase
- blueprint: cursor-ui-demo (Adapt — variante state tour, palco travado)
- duration: 9.792s
- poster: 6s
- transition_in: cut
- status: animated
- voiceover: "Direitos de uso é o último ajuste. Liberar todo o material para mídia paga por doze meses acrescenta trinta por cento — e essa linha aparece separada no resumo."
- asset_candidates: assets/img/pagina-calculadora.png (grupo "Direitos de uso e impulsionamento")
- focal: a pastilha larga "12 meses · +30%"
- roles: pagina-calculadora.png = supporting (referência de layout das pastilhas largas)
- handoff_in: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 17.724
- handoff_out: cartão em x=1180, y=140, escala 1, opacidade 1, parado; total lendo R$ 19.441,20
- src: compositions/frames/06-direitos-e-exclusividade.html

Fecha o ciclo de demonstração com o adicional que a proposta deixou de fora de propósito — e que o time pode ligar sozinho para ver o custo.

Adapt: mesma assinatura do Frame 4 (cursor age, UI responde, câmera travada), mas com as pastilhas largas de três opções e uma linha nova entrando no cartão em vez de valores só trocando.

Scene 1 (0.0–2.6s): o grupo "Direitos de uso e impulsionamento" entra à esquerda com as três pastilhas largas — "Sem mídia paga" (ativa), "90 dias · +18%", "12 meses · +30%" — cada uma com nome e detalhe, como na tela. Cartão parado à direita.
Scene 2 (2.6–5.2s): na deixa "por doze meses", o cursor atravessa até a terceira pastilha e clica (`cursor-click-ripple`); o estado ativo transfere por corte duro (`discrete-text-sequence`) e o "+30%" acende em laranja (`asr-keyword-glow`).
Scene 3 (5.2–7.8s): no mesmo label, uma linha nova — "Direitos de uso — **R$ 1.717,20**" — desce para dentro do resumo empurrando o bloco do total para baixo (`waterfall-entry`), e o total sobe para **R$ 19.441,20** (`counting-dynamic-scale`).
Scene 4 (7.8–9.792s): "R$ 3.240,20 por mês · 32 peças no período" e "Por peça de conteúdo R$ 607,54" se resolvem embaixo. Para.

## Frame 7 — A conta inteira, aberta

- scene: Punch-in no cartão: cada linha do resumo se acende, o custo por peça conta até o valor
- type: benefit_highlight
- blueprint: dataviz-countup (Adapt)
- duration: 8.896s
- poster: 6s
- transition_in: crossfade
- status: animated
- voiceover: "O cartão nunca esconde a conta: produção, tarifa de contrato, exclusividade, direitos, avulsos. Com o custo por peça e a comparação com comprar avulso."
- asset_candidates: assets/img/pagina-calculadora.png (o cartão "O seu pacote" em tamanho real)
- focal: o cartão "O seu pacote"
- roles: pagina-calculadora.png = supporting (referência do cartão, suas linhas e o bloco comparativo)
- handoff_in: cartão entra em x=1180, y=140, escala 1, opacidade 1 e reenquadra para o centro (x=680, y=60, escala 1.10, origem no topo-centro) em 1,4s; o bloco comparativo abre no pé do cartão durante a mesma passagem
- handoff_out: cartão centrado em x=680, y=60, escala 1.10, opacidade 1, parado
- src: compositions/frames/07-a-conta-aberta.html

A prova da tese: não é um preço fechado numa caixa-preta, é uma composição que a marca consegue auditar linha por linha.

Adapt: mantém a assinatura do dataviz-countup — o número é o herói e a câmera pousa nele —, mas o "gráfico" é o próprio extrato do cartão; em vez de atravessar um anel, a câmera reenquadra o cartão para o centro e sobe a escala.

Scene 1 (0.0–1.6s): o cartão sai da coluna direita e reenquadra para o centro do quadro em escala 1,10 (`coordinate-target-zoom`), ocupando ~32% da largura e toda a altura útil. O resto do palco rebaixa para 16% de opacidade, sem sair de cena — o contexto continua ali.
Scene 2 (1.6–5.4s): a narração enumera e cada linha do extrato acende na sua deixa, uma a uma (`asr-keyword-glow` em cascata): Produção R$ 4.500 · Tarifa de contrato +6% R$ 270 · Exclusividade R$ 954 · Direitos de uso R$ 1.717,20 · Peças e produções avulsas R$ 12.000. Nada entra antes da palavra correspondente.
Scene 3 (5.4–7.4s): na deixa "custo por peça", **R$ 607,54** sai do azul-marinho para o laranja e volta (`asr-keyword-glow`) e, logo abaixo, o bloco "SE FOSSE CAMPANHA PONTUAL" revela o texto real da tela — a parte mensal contratada por um mês só sairia R$ 1.404 por mês, 13% mais caro que no contrato de 6 meses.
Scene 4 (7.4–8.896s): quadro parado, lendo. Nenhuma câmera, nenhum breathing; só jitter mínimo (`sine-wave-loop`) no valor do total.

## Frame 8 — Manda no WhatsApp

- scene: O cursor clica no botão laranja; a mensagem já sai escrita com o pacote montado
- type: cta
- blueprint: cta-morph-press (Reproduce)
- duration: 9.301s
- poster: 5s
- transition_in: cut
- status: animated
- voiceover: "Quando o pacote estiver do jeito de vocês, o botão abre o WhatsApp já com a configuração escrita. E se quiser voltar atrás, um clique devolve o pacote da proposta."
- asset_candidates: assets/img/logo-nne.png (marca Nerds na Estrada, para o fecho), assets/img/logo-alamo-navy.png (marca oficial da Álamo, para o fecho), assets/img/pagina-calculadora.png (o botão real do cartão)
- focal: o botão "Mandar esse pacote no WhatsApp"
- roles: logo-nne.png + logo-alamo-navy.png = cutout (lockup do fecho) · pagina-calculadora.png = supporting (referência do botão e do link de restaurar)
- handoff_in: cartão centrado em x=680, y=60, escala 1.10, opacidade 1, subido 160px para o quadro pegar a metade de baixo
- src: compositions/frames/08-manda-no-whatsapp.html

Fecha onde a seção fecha: o pacote montado vira uma conversa, não um pedido de orçamento.

Scene 1 (0.0–2.4s): o cartão continua centrado, no mesmo lugar e escala em que o Frame 7 o deixou, subido 160px para o quadro pegar a metade de baixo: o total, o custo por peça e o botão laranja de largura cheia. O cursor entra por baixo e sobe em direção ao botão (`cursor-click-ripple`, fase de deslocamento).
Scene 2 (2.4–5.0s): na deixa "o botão abre o WhatsApp", o clique acontece — botão comprime e volta com mola (`press-release-spring`), anilha do ponto do clique (`cursor-click-ripple`) — e à direita sobe uma bolha de mensagem com o texto que a página monta sozinha: "Contrato: 6 meses · 1× Inclusão em vídeo no YouTube por mês · 3 gavetas de story por mês · 8× Reel que vira anúncio · 3× brand day · Exclusividade de categoria · Direitos de uso: 12 meses · Total: R$ 19.441,20". As linhas entram em cascata por palavra (`waterfall-entry`), como mensagem sendo digitada.
Scene 3 (5.0–7.2s): na deixa "um clique devolve o pacote da proposta", o link "Voltar ao pacote da proposta" acende no pé do cartão (`asr-keyword-glow`) e o total volta por troca de escala para **R$ 36.000** com o selo "PLANO RECOMENDADO" reaparecendo (`scale-swap-transition`) — o vídeo termina onde começou, de propósito.
Scene 4 (7.2–9.301s): a bolha e o cartão rebaixam e o lockup Nerds na Estrada × Álamo assenta ao centro com o endereço da seção em `micro` laranja. Único quadro com saída: acomoda e segura até o fim.
