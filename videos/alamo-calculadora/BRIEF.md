---
workflow: product-launch-video
flow: automation
storyboard: no
message: "O pacote não é fechado: mexa nos controles e o preço acompanha na hora"
destination: embed
aspect: 1920x1080
language: pt-BR
audience: "Time da Álamo Benefícios que recebeu a proposta /alamo"
length: 75s
angle: tour
---

## Intent

Tutorial em vídeo de como usar a calculadora de preço da seção "Monte o seu
pacote" da página /alamo (proposta comercial fechada da Nerds na Estrada para a
Álamo Benefícios). O objetivo é o mesmo da seção dentro da página: responder o
"nossa, é caro" com "dá pra ajustar" — mostrando, controle por controle, que a
marca pode tirar peças, encurtar ou esticar o contrato e ver o total mudar na
hora, sem pedir orçamento novo.

Tour show-it-as-is: o vídeo apresenta a tela real da calculadora, com o CSS e os
valores de tabela do próprio projeto, não uma interpretação estilizada.

Passo a passo detalhado, na ordem em que a pessoa usa a tela: peças por mês
(steppers) → gavetas de story → itens únicos (ad code, brand day, momento
assinatura) → slider de duração com o prêmio de contrato curto → direitos de uso
→ exclusividade de categoria → cartão de resumo (total, R$/mês, custo por peça,
comparativo) → botão do WhatsApp que já sai com o pacote montado.

## Assets

- src/alamo/components/AlaCalculadora.jsx — a fonte de verdade da UI e do cálculo.
- src/alamo/textos.js — rótulos, preços de tabela e o pacote proposto (estado inicial).
- src/alamo/alamo.css — o CSS real da seção; a UI do vídeo usa ele, não uma releitura.
- capture/ — captura da página em localhost para tokens de marca e a tela real.

## Customizations

- A calculadora é o único componente reconstruído em HTML dentro da composição,
  porque é o que precisa se mexer (steppers, slider, total recalculando). Todo o
  resto da página entra como tela capturada.
- Cursor animado guiando cada interação, com o total do resumo recalculando na
  hora — o número é a prova da tese, então todo movimento termina nele.
- Todos os valores exibidos vêm da tabela real de src/alamo/textos.js.

## Notes

- Narração em português do Brasil.
- Página fechada (noindex, não linkada): o vídeo é material para o cliente, não peça pública.
- Nada de linguagem de anúncio ("revolucione", "descubra agora") — é uma proposta
  comercial entre duas empresas que já conversam.
