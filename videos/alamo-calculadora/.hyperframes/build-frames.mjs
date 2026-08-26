// Gera os oito sub-composições de compositions/frames/. Um builder, e não oito
// arquivos escritos à mão, porque do Frame 2 ao Frame 8 o palco é literalmente o
// mesmo objeto — a calculadora reconstruída com o CSS real da /alamo. Escrever o
// cartão de resumo oito vezes seria oito chances de ele se mexer entre quadros,
// que é exatamente o que o storyboard proíbe.
//
// Escala: a seção real tem ~1070px de largura de conteúdo; aqui ela ocupa 1590px
// de um quadro de 1920. Todo tamanho de fonte é o da tela × 1,5.
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const DIR = process.argv[2]
const OUT = join(DIR, 'compositions', 'frames')
mkdirSync(OUT, { recursive: true })

// ---------------------------------------------------------------- tokens
const T = {
  cream50: '#fdfcf9', cream100: '#faf8f3', cream200: '#f5f0e6', cream300: '#ede5d4', cream400: '#e0d4bc',
  stone300: '#c8bfae', stone400: '#b0a390', stone500: '#8c7d6a', stone600: '#6b5d4a', stone700: '#4d4030', stone800: '#332c20',
  navy: '#14477F', ala: '#EF6C1F', alaDeep: '#D2551A', alaText: '#A8461A', alaWash: 'rgba(239,108,31,0.08)',
}

const FONTS = `
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:block;
  src:url('assets/fonts/inter-latin-ext.woff2') format('woff2');
  unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:block;
  src:url('assets/fonts/inter-latin.woff2') format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
@font-face{font-family:'Playfair Display';font-style:normal;font-weight:600;font-display:block;
  src:url('assets/fonts/playfair-600-latin-ext.woff2') format('woff2');
  unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'Playfair Display';font-style:normal;font-weight:600;font-display:block;
  src:url('assets/fonts/playfair-600-latin.woff2') format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
`

// CSS comum: são as classes da própria seção (.calc-grupo, .stepper, .opcao,
// .resumo-*) com os tamanhos multiplicados por 1,5. Root sempre por #root.
const CSS = `
${FONTS}
#root{position:absolute;inset:0;width:1920px;height:1080px;overflow:hidden;
  font-family:'Inter',system-ui,sans-serif;color:${T.stone700};}
.clip{position:absolute;inset:0;}
.ground{background:${T.cream100};}
.ground-tex{position:absolute;inset:0;opacity:0.06;object-fit:cover;width:1920px;height:1080px;}

.stage{position:absolute;left:0;top:0;width:1920px;height:1080px;}
.col{position:absolute;left:150px;width:970px;}
.grupo{background:#fff;border:1.5px solid ${T.cream300};border-radius:24px;padding:33px 36px;}
.grupo-titulo{font-size:17px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${T.stone600};margin-bottom:21px;}
.linha{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:16px 0;border-top:1.5px solid ${T.cream200};}
.linha.primeira{border-top:none;padding-top:0;}
.linha .info strong{display:block;font-size:22px;font-weight:600;color:${T.stone600};}
.linha .info span{display:block;margin-top:3px;font-size:19px;color:${T.stone600};line-height:1.45;}
.linha.ativa .info strong{color:${T.navy};}

.stepper{display:flex;align-items:center;gap:3px;flex-shrink:0;border:1.5px solid ${T.cream400};
  border-radius:99px;padding:5px;background:${T.cream100};}
.stepper .sb{width:42px;height:42px;border-radius:50%;background:transparent;color:${T.navy};
  font-size:26px;line-height:1;display:flex;align-items:center;justify-content:center;}
.stepper .sb.off{color:${T.stone300};}
.stepper .qtd{min-width:36px;text-align:center;font-size:22px;font-weight:600;color:${T.stone800};
  font-variant-numeric:tabular-nums;}

.opcoes{display:flex;gap:12px;}
.opcao{flex:1;text-align:center;border:1.5px solid ${T.cream400};border-radius:18px;background:${T.cream50};padding:17px 15px;}
.opcao b{display:block;font-size:22px;font-weight:600;color:${T.stone700};}
.opcao span{display:block;margin-top:5px;font-size:17px;color:${T.stone600};}
.opcao.ativa{border-color:${T.ala};background:${T.alaWash};}
.opcao.ativa b{color:${T.alaText};}
.opcoes.largas .opcao{text-align:left;padding:20px 22px;}

.duracao{display:flex;align-items:center;gap:27px;}
.trilho{position:relative;flex:1;height:6px;border-radius:3px;background:${T.cream400};}
.trilho .fill{position:absolute;left:0;top:0;height:6px;border-radius:3px;background:${T.ala};}
.knob{position:absolute;top:-13px;width:32px;height:32px;border-radius:50%;background:#fff;
  border:3px solid ${T.ala};margin-left:-16px;}
.dvalor{display:flex;align-items:baseline;gap:9px;flex-shrink:0;}
.dvalor b{font-family:'Playfair Display',Georgia,serif;font-size:44px;font-weight:600;color:${T.navy};line-height:1;
  font-variant-numeric:tabular-nums;min-width:56px;text-align:right;display:inline-block;}
.dvalor span{font-size:18px;color:${T.stone600};}
.dvalor em{font-style:normal;font-size:17px;font-weight:600;color:${T.alaText};background:${T.alaWash};
  border-radius:99px;padding:5px 12px;margin-left:3px;}
.nota{margin-top:18px;font-size:19px;color:${T.stone600};line-height:1.6;max-width:820px;}

.card{position:absolute;left:1180px;width:560px;background:#fff;border:3px solid ${T.ala};
  border-radius:24px;padding:39px 36px;}
.card-top{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:24px;}
.card-eyebrow{font-size:17px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${T.alaText};}
.selo{background:${T.alaText};color:#fff;border-radius:99px;padding:6px 16px;font-size:14px;letter-spacing:0.1em;font-weight:600;white-space:nowrap;}
.rls{display:flex;flex-direction:column;gap:13px;padding-bottom:24px;border-bottom:1.5px solid ${T.cream300};}
.rl{display:flex;align-items:baseline;justify-content:space-between;gap:21px;font-size:21px;}
.rl span{color:${T.stone600};}
.rl b{color:${T.stone800};font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums;}
.rl.oculta{opacity:0;}
.rl b.gratis{color:${T.alaText};font-size:18px;text-transform:uppercase;letter-spacing:0.08em;}
.total{padding:27px 0 21px;border-bottom:1.5px solid ${T.cream300};}
.total .rot{font-size:17px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${T.stone600};}
.total .val{font-family:'Playfair Display',Georgia,serif;font-size:66px;font-weight:600;color:${T.alaText};
  line-height:1.05;margin:9px 0 6px;font-variant-numeric:tabular-nums;}
.total .por{font-size:19px;color:${T.stone600};}
.peca{display:flex;align-items:baseline;justify-content:space-between;gap:18px;padding:21px 0;font-size:20px;}
.peca span{color:${T.stone600};}
.peca b{color:${T.navy};font-weight:600;font-variant-numeric:tabular-nums;}
.comp{border:1.5px dashed ${T.stone300};border-radius:18px;padding:21px 24px;background:${T.cream100};margin-bottom:27px;}
.comp .lbl{font-size:16px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${T.alaText};margin-bottom:9px;}
.comp p{margin:0;font-size:20px;color:${T.stone600};line-height:1.6;}
.btn{display:flex;align-items:center;justify-content:center;background:${T.alaText};color:#fff;
  font-size:22px;font-weight:600;padding:23px 39px;border-radius:18px;border:1.5px solid ${T.alaText};}
.restaurar{margin-top:18px;font-size:18px;color:${T.stone600};text-align:center;}

.cursor{position:absolute;left:0;top:0;width:52px;height:52px;z-index:60;pointer-events:none;}
.ripple{position:absolute;width:120px;height:120px;border-radius:50%;border:3px solid ${T.ala};
  margin-left:-60px;margin-top:-60px;opacity:0;z-index:55;pointer-events:none;}

.eyebrow{display:flex;align-items:center;gap:15px;font-size:18px;font-weight:600;
  text-transform:uppercase;letter-spacing:0.16em;color:${T.alaText};}
.eyebrow .risco{width:36px;height:3px;background:${T.ala};border-radius:3px;}
.lockup{display:flex;align-items:center;gap:22px;}
.lockup img{height:54px;width:auto;}
.lockup .x{font-size:24px;color:${T.stone400};}
`

const CURSOR_SVG = `<svg class="cursor" id="ID-cursor" viewBox="0 0 24 24" fill="none">
  <path d="M5 2.5 L5 20 L9.6 15.6 L12.5 21.6 L15.7 20.1 L12.9 14.3 L19 14.1 Z"
        fill="${T.stone800}" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg>`

// ---------------------------------------------------------------- o cartão
// Um só gerador para todos os quadros: o cartão nunca é redesenhado, só recebe
// linhas diferentes. `extras` liga comparativo e botão (Frames 7 e 8).
function card(pid, { top = 140, left = 1180, transform = null, overflowOk = false, rows, total, por, peca, selo = true, comp = null, cta = false, restaurar = false }) {
  const rl = rows.map((r) =>
    `      <div class="rl${r.oculta ? ' oculta' : ''}" id="${pid}-rl-${r.k}"><span>${r.rot}</span><b class="${r.gratis ? 'gratis' : ''}" id="${pid}-v-${r.k}">${r.val}</b></div>`,
  ).join('\n')
  return `  <div class="card" id="${pid}-card"${overflowOk ? ' data-layout-allow-overflow data-layout-allow-occlusion' : ''} style="top:${top}px;left:${left}px${transform ? `;transform:${transform};transform-origin:50% 0%` : ''}">
    <div class="card-top">
      <span class="card-eyebrow">O seu pacote</span>
      ${selo ? `<span class="selo" id="${pid}-selo">Plano recomendado</span>` : ''}
    </div>
    <div class="rls" id="${pid}-rls">
${rl}
    </div>
    <div id="${pid}-tail">
    <div class="total">
      <div class="rot">Total do contrato</div>
      <div class="val" id="${pid}-total">${total}</div>
      <div class="por" id="${pid}-por">${por}</div>
    </div>
    <div class="peca"><span>Por peça de conteúdo</span><b id="${pid}-peca">${peca}</b></div>
${comp ? `    <div class="comp" id="${pid}-comp"><div class="lbl">${comp.lbl}</div><p>${comp.txt}</p></div>` : ''}
${cta ? `    <div class="btn" id="${pid}-btn">Mandar esse pacote no WhatsApp</div>` : ''}
${restaurar ? `    <div class="restaurar" id="${pid}-restaurar">Você mudou o pacote proposto. Voltar ao pacote da proposta</div>` : ''}
    </div>
  </div>`
}

const ROWS_S0 = [
  { k: 'prod', rot: 'Produção', val: 'R$ 24.000' },
  { k: 'excl', rot: 'Exclusividade de categoria', val: 'Inclusa', gratis: true },
  { k: 'avul', rot: 'Peças e produções avulsas', val: 'R$ 12.000' },
  { k: 'assi', rot: '2× Momento assinatura', val: 'Inclusos', gratis: true },
]

// ---------------------------------------------------------------- moldura
function frame(id, duration, body, js) {
  return `<template>
  <style>${CSS}</style>
  <div id="root" data-composition-id="${id}" data-width="1920" data-height="1080" data-duration="${duration}">
    <div class="clip ground" id="f${id}-ground" data-start="0" data-duration="${duration}" data-track-index="0">
${body}
    </div>
  </div>
  <script>
    window.__timelines = window.__timelines || {};
    (function () {
      const tl = gsap.timeline({ paused: true });
      const $ = (s) => document.querySelector(s);
      const brl = (n) => {
        const v = Math.round(n * 100) / 100;
        return 'R$ ' + v.toLocaleString('pt-BR', {
          minimumFractionDigits: Number.isInteger(v) ? 0 : 2, maximumFractionDigits: 2,
        });
      };
      // Linha nova no resumo: ela já existe no DOM (invisível) e tudo que vem
      // depois começa deslocado para cima pela altura dela, então revelar é
      // devolver os de baixo para y=0 — sem tween de height, que não é seek-safe.
      const abrir = (linhaSel, abaixoSels, at) => {
        const alvo = $(linhaSel);
        const H = alvo.offsetHeight + 13;
        gsap.set(abaixoSels, { y: -H });
        tl.to(abaixoSels, { y: 0, duration: 0.45, ease: 'power3.out' }, at);
        tl.fromTo(linhaSel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, at);
      };
      const conta = (sel, de, para, at, dur) => {
        const o = { v: de }, el = $(sel);
        tl.to(o, { v: para, duration: dur, ease: 'power2.inOut',
          onUpdate: () => { el.textContent = brl(o.v); } }, at);
      };
${js}
      window.__timelines["${id}"] = tl;
    })();
  </script>
</template>
`
}

const write = (name, html) => { writeFileSync(join(OUT, name + '.html'), html); console.log('✓', name) }

// ================================================================ Frame 1
{
  const id = '01-proposta-nao-fechada'
  const pid = 'f' + id
  const body = `      <img class="ground-tex" src="assets/img/pagina-oferta.png" alt="" />
      <div class="stage">
        <div class="lockup" id="${pid}-lockup" style="position:absolute;left:150px;top:96px">
          <img src="assets/img/logo-nne.png" alt="Nerds na Estrada" />
          <span class="x">×</span>
          <img src="assets/img/logo-alamo-navy.png" alt="Álamo Benefícios" />
        </div>
        <div class="eyebrow" id="${pid}-eyebrow" style="position:absolute;left:150px;top:296px">
          <span class="risco"></span><span>Monte o seu pacote</span>
        </div>
        <div id="${pid}-num" style="position:absolute;left:150px;top:352px;
             font-family:'Playfair Display',Georgia,serif;font-size:210px;font-weight:600;
             color:${T.stone800};line-height:1;letter-spacing:-0.02em">R$ 36.000</div>
        <svg id="${pid}-fio" width="1620" height="4" viewBox="0 0 1620 4"
             style="position:absolute;left:150px;top:610px">
          <path id="${pid}-fio-p" d="M0 2 H1620" stroke="${T.stone300}" stroke-width="3" fill="none"/>
        </svg>
        <div id="${pid}-tok-a" style="position:absolute;left:150px;top:666px;font-size:40px;font-weight:600;
             letter-spacing:0.14em;text-transform:uppercase;color:${T.alaText}">Pacote fechado</div>
        <div id="${pid}-tok-b" style="position:absolute;left:150px;top:666px;font-size:40px;font-weight:600;
             letter-spacing:0.14em;text-transform:uppercase;color:${T.alaText};opacity:0">Ponto de partida</div>
      </div>`
  const js = `
      gsap.set('#${pid}-tok-a', { opacity: 0 });
      tl.fromTo('#${pid}-lockup', { opacity: 0, y: -18 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.1);
      tl.fromTo('#${pid}-eyebrow', { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }, 0.45);
      tl.fromTo('#${pid}-num', { opacity: 0, y: 40, scale: 0.965 },
        { opacity: 1, y: 0, scale: 1, duration: 1.05, ease: 'power3.out' }, 0.75);
      // Scene 2 — troca de token no lugar, corte duro
      tl.set('#${pid}-tok-a', { opacity: 1 }, 2.4);
      tl.set('#${pid}-tok-a', { opacity: 0 }, 3.55);
      tl.set('#${pid}-tok-b', { opacity: 1 }, 3.55);
      // Scene 3 — o fio se desenha e o quadro para
      const fio = $('#${pid}-fio-p'), L = fio.getTotalLength();
      gsap.set(fio, { strokeDasharray: L, strokeDashoffset: L });
      tl.to(fio, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out' }, 4.6);
      tl.fromTo('#${pid}-num', { y: 0 }, { y: -3, duration: 1.2, ease: 'sine.inOut' }, 5.7);
`
  write(id, frame(id, 7.083, body, js))
}

// ================================================================ Frame 2
{
  const id = '02-monte-o-pacote'
  const pid = 'f' + id
  const body = `      <div class="stage">
        <div class="col" id="${pid}-col" style="top:120px">
          <div class="grupo" id="${pid}-g1">
            <div class="grupo-titulo">Peças por mês</div>
            <div class="linha primeira ativa" id="${pid}-l1">
              <div class="info"><strong>Inclusão em vídeo no YouTube</strong><span>Bloco de 60 a 90s dentro de um vlog do canal · R$ 500</span></div>
              <div class="stepper"><div class="sb">−</div><div class="qtd">1</div><div class="sb">+</div></div>
            </div>
            <div class="linha ativa" id="${pid}-l2">
              <div class="info"><strong>Reel nas quatro plataformas</strong><span>Instagram, TikTok, YouTube e Facebook · R$ 1.100</span></div>
              <div class="stepper"><div class="sb">−</div><div class="qtd">1</div><div class="sb">+</div></div>
            </div>
            <div class="linha" id="${pid}-l3">
              <div class="info"><strong>Review completo</strong><span>Vídeo inteiro dedicado — título, thumb e roteiro · R$ 1.350</span></div>
              <div class="stepper"><div class="sb off">−</div><div class="qtd">0</div><div class="sb">+</div></div>
            </div>
          </div>
          <div class="grupo" id="${pid}-g2" style="margin-top:27px">
            <div class="grupo-titulo">Stories por mês</div>
            <div class="opcoes">
              <div class="opcao"><b>Nenhum</b></div>
              <div class="opcao"><b>3</b><span>R$ 250</span></div>
              <div class="opcao ativa"><b>5</b><span>R$ 400</span></div>
              <div class="opcao"><b>10</b><span>R$ 750</span></div>
            </div>
          </div>
          <div class="grupo" id="${pid}-g3" style="margin-top:27px">
            <div class="grupo-titulo">Duração do contrato</div>
            <div class="duracao">
              <div class="trilho"><div class="fill" style="width:100%"></div><div class="knob" style="left:100%"></div></div>
              <div class="dvalor"><b>12</b><span>meses</span></div>
            </div>
          </div>
        </div>
${card(pid, { rows: ROWS_S0, total: 'R$ 36.000', por: 'R$ 3.000 por mês · 92 peças no período', peca: 'R$ 391,30' })}
        <div class="ripple" id="${pid}-rip" style="left:1460px;top:300px"></div>
        ${CURSOR_SVG.replace(/ID/g, pid)}
      </div>`
  const js = `
      gsap.set('#${pid}-cursor', { x: 1680, y: 1010, opacity: 0 });
      gsap.set(['#${pid}-selo'], { opacity: 0 });
      gsap.set('#${pid}-card', { borderColor: '${T.cream400}' });
      // Scene 1 — o palco chega inteiro
      tl.fromTo(['#${pid}-g1', '#${pid}-g2', '#${pid}-g3'], { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.14 }, 0.1);
      tl.fromTo('#${pid}-card', { opacity: 0, y: 30, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, 0.35);
      // Scene 2 — cada linha é um controle
      ['#${pid}-l1', '#${pid}-l2', '#${pid}-l3'].forEach((s, i) => {
        tl.fromTo(s, { backgroundColor: 'rgba(239,108,31,0)' },
          { backgroundColor: 'rgba(239,108,31,0.10)', duration: 0.28, ease: 'power2.out' }, 2.7 + i * 0.62);
        tl.to(s, { backgroundColor: 'rgba(239,108,31,0)', duration: 0.5, ease: 'power2.in' }, 3.05 + i * 0.62);
      });
      tl.to('#${pid}-cursor', { opacity: 1, duration: 0.25 }, 3.6);
      tl.to('#${pid}-cursor', { x: 1210, y: 470, duration: 1.5, ease: 'power2.inOut' }, 3.7);
      // Scene 3 — o cartão é o assunto
      tl.to('#${pid}-cursor', { x: 1156, y: 300, duration: 0.8, ease: 'power2.inOut' }, 5.5);
      tl.to('#${pid}-card', { borderColor: '${T.ala}', duration: 0.5, ease: 'power2.out' }, 5.7);
      tl.fromTo('#${pid}-selo', { opacity: 0, scale: 0.86 },
        { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' }, 6.0);
      tl.fromTo('#${pid}-total', { color: '${T.alaText}' }, { color: '${T.ala}', duration: 0.4, ease: 'power2.out' }, 6.2);
      tl.to('#${pid}-total', { color: '${T.alaText}', duration: 0.8, ease: 'power2.inOut' }, 6.7);
      tl.fromTo('#${pid}-por', { color: '${T.stone600}' }, { color: '${T.stone800}', duration: 0.4, ease: 'power2.out' }, 6.6);
      tl.to('#${pid}-por', { color: '${T.stone600}', duration: 0.6, ease: 'power2.inOut' }, 7.2);
`
  write(id, frame(id, 9.067, body, js))
}

// ================================================================ Frame 3
{
  const id = '03-pecas-por-mes'
  const pid = 'f' + id
  const body = `      <div class="stage">
        <div class="col" id="${pid}-col" style="top:230px">
          <div class="grupo" id="${pid}-g1">
            <div class="grupo-titulo">Peças por mês</div>
            <div class="linha primeira ativa">
              <div class="info"><strong>Inclusão em vídeo no YouTube</strong><span>Bloco de 60 a 90s dentro de um vlog do canal · R$ 500</span></div>
              <div class="stepper"><div class="sb">−</div><div class="qtd">1</div><div class="sb">+</div></div>
            </div>
            <div class="linha ativa" id="${pid}-alvo">
              <div class="info"><strong id="${pid}-alvo-nome">Reel nas quatro plataformas</strong><span>Instagram, TikTok, YouTube e Facebook · R$ 1.100</span></div>
              <div class="stepper"><div class="sb" id="${pid}-menos">−</div><div class="qtd" id="${pid}-qtd">1</div><div class="sb">+</div></div>
            </div>
            <div class="linha">
              <div class="info"><strong>Review completo</strong><span>Vídeo inteiro dedicado — título, thumb e roteiro · R$ 1.350</span></div>
              <div class="stepper"><div class="sb off">−</div><div class="qtd">0</div><div class="sb">+</div></div>
            </div>
          </div>
        </div>
${card(pid, { rows: ROWS_S0, total: 'R$ 36.000', por: 'R$ 3.000 por mês · 92 peças no período', peca: 'R$ 391,30' })}
        <div class="ripple" id="${pid}-rip" style="left:876px;top:396px"></div>
        ${CURSOR_SVG.replace(/ID/g, pid)}
        <svg id="${pid}-sub" width="420" height="6" viewBox="0 0 420 6" style="position:absolute;left:1216px;top:531px">
          <path id="${pid}-sub-p" d="M0 3 H420" stroke="${T.ala}" stroke-width="4" fill="none"/>
        </svg>
      </div>`
  const js = `
      gsap.set('#${pid}-cursor', { x: 1156, y: 300 });
      const subp = $('#${pid}-sub-p'), SL = subp.getTotalLength();
      gsap.set(subp, { strokeDasharray: SL, strokeDashoffset: SL });
      // Scene 1 — o cursor vem do lugar em que o Frame 2 o deixou
      tl.fromTo('#${pid}-g1', { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, 0);
      tl.to('#${pid}-cursor', { x: 862, y: 382, duration: 1.5, ease: 'power2.inOut' }, 0.9);
      // Scene 2 — o clique
      tl.to('#${pid}-cursor', { scale: 0.85, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 }, 2.7);
      tl.to('#${pid}-menos', { scale: 0.94, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 }, 2.7);
      tl.set('#${pid}-rip', { opacity: 1 }, 2.74);
      tl.fromTo('#${pid}-rip', { scale: 0, opacity: 0.9 },
        { scale: 3.4, opacity: 0, duration: 0.75, ease: 'power2.out', immediateRender: false }, 2.74);
      tl.set('#${pid}-qtd', { textContent: '0' }, 2.9);
      tl.set('#${pid}-alvo-nome', { color: '${T.stone600}' }, 2.9);
      tl.set('#${pid}-menos', { attr: { class: 'sb off' } }, 2.9);
      // Scene 3 — o par causal: o cartão responde no mesmo gesto
      conta('#${pid}-v-prod', 24000, 10800, 2.9, 1.2);
      conta('#${pid}-total', 36000, 22800, 2.9, 1.2);
      tl.set('#${pid}-por', { textContent: 'R$ 1.900 por mês · 80 peças no período' }, 4.1);
      tl.fromTo('#${pid}-por', { opacity: 0.25 }, { opacity: 1, duration: 0.4, ease: 'power2.out', immediateRender: false }, 4.1);
      conta('#${pid}-peca', 391.3, 285, 4.3, 0.8);
      // Scene 4 — o fio laranja sob o total e o quadro para
      tl.to(subp, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out' }, 8.0);
`
  write(id, frame(id, 10.517, body, js))
}

// ================================================================ Frame 4
{
  const id = '04-gavetas-de-story'
  const pid = 'f' + id
  const rows = ROWS_S0.map((r) => (r.k === 'prod' ? { ...r, val: 'R$ 10.800' } : r))
  const body = `      <div class="stage">
        <div class="col" id="${pid}-col" style="top:300px">
          <div class="grupo" id="${pid}-g1">
            <div class="grupo-titulo">Stories por mês</div>
            <div class="opcoes">
              <div class="opcao" id="${pid}-o0"><b>Nenhum</b></div>
              <div class="opcao" id="${pid}-o3"><b>3</b><span>R$ 250</span></div>
              <div class="opcao ativa" id="${pid}-o5"><b>5</b><span>R$ 400</span></div>
              <div class="opcao" id="${pid}-o10"><b>10</b><span>R$ 750</span></div>
            </div>
          </div>
        </div>
${card(pid, { rows, total: 'R$ 22.800', por: 'R$ 1.900 por mês · 80 peças no período', peca: 'R$ 285' })}
        <div class="ripple" id="${pid}-rip" style="left:610px;top:404px"></div>
        ${CURSOR_SVG.replace(/ID/g, pid)}
      </div>`
  const js = `
      gsap.set('#${pid}-cursor', { x: 842, y: 404 });
      // Scene 1 — as quatro pastilhas, com a de 5 ativa
      tl.fromTo('#${pid}-g1', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0);
      // Scene 2 — o cursor cruza de 5 para 3 e o estado ativo transfere por corte
      tl.to('#${pid}-cursor', { x: 596, y: 390, duration: 1.1, ease: 'power2.inOut' }, 1.5);
      tl.to('#${pid}-cursor', { scale: 0.85, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 }, 2.8);
      tl.to('#${pid}-o3', { scale: 0.97, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 }, 2.8);
      tl.set('#${pid}-rip', { opacity: 1 }, 2.84);
      tl.fromTo('#${pid}-rip', { scale: 0, opacity: 0.9 },
        { scale: 3.2, opacity: 0, duration: 0.7, ease: 'power2.out', immediateRender: false }, 2.84);
      tl.set('#${pid}-o5', { attr: { class: 'opcao' } }, 3.0);
      tl.set('#${pid}-o3', { attr: { class: 'opcao ativa' } }, 3.0);
      // Scene 3 — o cartão responde
      conta('#${pid}-v-prod', 10800, 9000, 3.0, 1.0);
      conta('#${pid}-total', 22800, 21000, 3.0, 1.0);
      tl.set('#${pid}-por', { textContent: 'R$ 1.750 por mês · 56 peças no período' }, 4.0);
      tl.fromTo('#${pid}-por', { opacity: 0.25 }, { opacity: 1, duration: 0.4, ease: 'power2.out', immediateRender: false }, 4.0);
      conta('#${pid}-peca', 285, 375, 4.2, 0.7);
`
  write(id, frame(id, 7.488, body, js))
}

// ================================================================ Frame 5
{
  const id = '05-duracao-do-contrato'
  const pid = 'f' + id
  const rows = [
    { k: 'prod', rot: 'Produção', val: 'R$ 9.000' },
    { k: 'tar', rot: 'Tarifa de contrato · +6%', val: 'R$ 270', oculta: true },
    { k: 'excl', rot: 'Exclusividade de categoria', val: 'Inclusa', gratis: true },
    { k: 'avul', rot: 'Peças e produções avulsas', val: 'R$ 12.000' },
    { k: 'assi', rot: '2× Momento assinatura', val: 'Inclusos', gratis: true },
  ]
  const body = `      <div class="stage">
        <div class="col" id="${pid}-col" style="top:270px">
          <div class="grupo" id="${pid}-g1">
            <div class="grupo-titulo">Duração do contrato</div>
            <div class="duracao">
              <div class="trilho" id="${pid}-trilho">
                <div class="fill" id="${pid}-fill" style="width:640px;transform-origin:0% 50%"></div>
                <div class="knob" id="${pid}-knob" style="left:0px"></div>
              </div>
              <div class="dvalor"><b id="${pid}-meses">12</b><span>meses</span><em id="${pid}-selo6">+6%</em></div>
            </div>
            <div class="nota">Doze meses é a nossa tarifa de referência. Contratos mais curtos custam mais por peça, porque planejamento, alinhamento de roteiro e aprovação não se diluem numa campanha pontual.</div>
          </div>
        </div>
${card(pid, { rows, total: 'R$ 21.000', por: 'R$ 1.750 por mês · 56 peças no período', peca: 'R$ 375' })}
        ${CURSOR_SVG.replace(/ID/g, pid)}
      </div>`
  // Trilho com 640px úteis: 12 meses = ponta direita, 6 meses = metade.
  const js = `
      gsap.set('#${pid}-knob', { x: 640 });
      gsap.set('#${pid}-cursor', { x: 806, y: 348 });
      gsap.set('#${pid}-selo6', { opacity: 0, scale: 0.8 });
      const abaixo5 = ['#${pid}-rl-excl', '#${pid}-rl-avul', '#${pid}-rl-assi', '#${pid}-tail'];
      // Scene 1 — o grupo entra
      tl.fromTo('#${pid}-g1', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0);
      // Scene 2 — a exclusividade inclusa acende no cartão
      tl.fromTo('#${pid}-rl-excl', { backgroundColor: 'rgba(239,108,31,0)' },
        { backgroundColor: 'rgba(239,108,31,0.14)', duration: 0.35, ease: 'power2.out' }, 3.1);
      tl.to('#${pid}-rl-excl', { backgroundColor: 'rgba(239,108,31,0)', duration: 0.7, ease: 'power2.in' }, 3.9);
      // Scene 3 — o arrasto: cursor, knob e trilho em lockstep (mesma posição, duração e ease)
      const DRAG_AT = 5.6, DRAG_DUR = 1.7, EASE = 'power1.inOut';
      tl.to('#${pid}-cursor', { scale: 0.88, duration: 0.1, ease: 'power2.in', yoyo: true, repeat: 1 }, 5.3);
      tl.fromTo('#${pid}-knob', { x: 640 }, { x: 320, duration: DRAG_DUR, ease: EASE, immediateRender: false }, DRAG_AT);
      tl.fromTo('#${pid}-cursor', { x: 806, y: 348 }, { x: 486, y: 348, duration: DRAG_DUR, ease: EASE, immediateRender: false }, DRAG_AT);
      tl.fromTo('#${pid}-fill', { scaleX: 1 }, { scaleX: 0.5, duration: DRAG_DUR, ease: EASE, immediateRender: false }, DRAG_AT);
      // O número acompanha em passos discretos, lidos do mesmo objeto de estado do arrasto
      const passos = [12, 11, 10, 9, 8, 7, 6];
      const drv = { t: 0 }; const mesesEl = $('#${pid}-meses'); let ult = null;
      tl.to(drv, { t: 1, duration: DRAG_DUR, ease: EASE, onUpdate: () => {
        const i = Math.min(passos.length - 1, Math.floor(drv.t * passos.length));
        if (i !== ult) { mesesEl.textContent = passos[i]; ult = i; }
      } }, DRAG_AT);
      tl.fromTo('#${pid}-selo6', { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }, DRAG_AT + DRAG_DUR);
      // Scene 4 — o cartão reescreve no mesmo gesto
      conta('#${pid}-v-prod', 9000, 4500, 9.3, 0.9);
      abrir('#${pid}-rl-tar', abaixo5, 9.6);
      tl.set('#${pid}-v-excl', { attr: { class: '' }, textContent: 'R$ 954' }, 10.2);
      tl.fromTo('#${pid}-v-excl', { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', immediateRender: false }, 10.2);
      // Scene 5 — o total assenta: total menor, mês mais caro
      conta('#${pid}-total', 21000, 17724, 11.0, 1.0);
      tl.set('#${pid}-por', { textContent: 'R$ 2.954 por mês · 32 peças no período' }, 11.9);
      tl.fromTo('#${pid}-por', { opacity: 0.25 }, { opacity: 1, duration: 0.4, ease: 'power2.out', immediateRender: false }, 11.9);
      conta('#${pid}-peca', 375, 553.88, 12.0, 0.8);
`
  write(id, frame(id, 13.568, body, js))
}

// ================================================================ Frame 6
{
  const id = '06-direitos-e-exclusividade'
  const pid = 'f' + id
  const rows = [
    { k: 'prod', rot: 'Produção', val: 'R$ 4.500' },
    { k: 'tar', rot: 'Tarifa de contrato · +6%', val: 'R$ 270' },
    { k: 'excl', rot: 'Exclusividade de categoria', val: 'R$ 954' },
    { k: 'dir', rot: 'Direitos de uso', val: 'R$ 1.717,20', oculta: true },
    { k: 'avul', rot: 'Peças e produções avulsas', val: 'R$ 12.000' },
    { k: 'assi', rot: '2× Momento assinatura', val: 'Inclusos', gratis: true },
  ]
  const body = `      <div class="stage">
        <div class="col" id="${pid}-col" style="top:300px">
          <div class="grupo" id="${pid}-g1">
            <div class="grupo-titulo">Direitos de uso e impulsionamento</div>
            <div class="opcoes largas">
              <div class="opcao ativa" id="${pid}-d0"><b>Sem mídia paga</b><span>As peças ficam só nos nossos canais</span></div>
              <div class="opcao" id="${pid}-d90"><b>90 dias</b><span>+18%</span></div>
              <div class="opcao" id="${pid}-d12"><b>12 meses</b><span id="${pid}-d12s">+30%</span></div>
            </div>
          </div>
        </div>
${card(pid, { rows, total: 'R$ 17.724', por: 'R$ 2.954 por mês · 32 peças no período', peca: 'R$ 553,88', selo: false })}
        <div class="ripple" id="${pid}-rip" style="left:960px;top:434px"></div>
        ${CURSOR_SVG.replace(/ID/g, pid)}
      </div>`
  const js = `
      gsap.set('#${pid}-cursor', { x: 320, y: 430 });
      const abaixo6 = ['#${pid}-rl-avul', '#${pid}-rl-assi', '#${pid}-tail'];
      // Scene 1 — as três pastilhas largas
      tl.fromTo('#${pid}-g1', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0);
      // Scene 2 — o cursor atravessa e clica em "12 meses"
      tl.to('#${pid}-cursor', { x: 946, y: 420, duration: 1.4, ease: 'power2.inOut' }, 1.9);
      tl.to('#${pid}-cursor', { scale: 0.85, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 }, 3.5);
      tl.to('#${pid}-d12', { scale: 0.98, duration: 0.09, ease: 'power2.in', yoyo: true, repeat: 1 }, 3.5);
      tl.set('#${pid}-rip', { opacity: 1 }, 3.54);
      tl.fromTo('#${pid}-rip', { scale: 0, opacity: 0.9 },
        { scale: 3.2, opacity: 0, duration: 0.7, ease: 'power2.out', immediateRender: false }, 3.54);
      tl.set('#${pid}-d0', { attr: { class: 'opcao' } }, 3.7);
      tl.set('#${pid}-d12', { attr: { class: 'opcao ativa' } }, 3.7);
      tl.fromTo('#${pid}-d12s', { scale: 1, color: '${T.stone400}' },
        { scale: 1.25, color: '${T.alaText}', duration: 0.35, ease: 'power2.out' }, 3.7);
      tl.to('#${pid}-d12s', { scale: 1, duration: 0.6, ease: 'power2.inOut' }, 4.15);
      // Scene 3 — a linha nova desce para dentro do resumo
      abrir('#${pid}-rl-dir', abaixo6, 5.4);
      conta('#${pid}-total', 17724, 19441.2, 5.9, 1.1);
      // Scene 4 — mês e custo por peça se resolvem
      tl.set('#${pid}-por', { textContent: 'R$ 3.240,20 por mês · 32 peças no período' }, 7.2);
      tl.fromTo('#${pid}-por', { opacity: 0.25 }, { opacity: 1, duration: 0.4, ease: 'power2.out', immediateRender: false }, 7.2);
      conta('#${pid}-peca', 553.88, 607.54, 7.5, 0.8);
`
  write(id, frame(id, 9.792, body, js))
}

// ================================================================ Frame 7
const ROWS_FINAL = [
  { k: 'prod', rot: 'Produção', val: 'R$ 4.500' },
  { k: 'tar', rot: 'Tarifa de contrato · +6%', val: 'R$ 270' },
  { k: 'excl', rot: 'Exclusividade de categoria', val: 'R$ 954' },
  { k: 'dir', rot: 'Direitos de uso', val: 'R$ 1.717,20' },
  { k: 'avul', rot: 'Peças e produções avulsas', val: 'R$ 12.000' },
  { k: 'assi', rot: '2× Momento assinatura', val: 'Inclusos', gratis: true },
]
const COMP = {
  lbl: 'Se fosse campanha pontual',
  txt: 'A parte mensal deste pacote, contratada por um mês só, sairia R$ 1.404 por mês — 13% mais caro que no contrato de 6 meses.',
}
{
  const id = '07-a-conta-aberta'
  const pid = 'f' + id
  const body = `      <div class="stage">
        <div class="col" id="${pid}-col" style="top:300px">
          <div class="grupo">
            <div class="grupo-titulo">Direitos de uso e impulsionamento</div>
            <div class="opcoes largas">
              <div class="opcao"><b>Sem mídia paga</b><span>As peças ficam só nos nossos canais</span></div>
              <div class="opcao"><b>90 dias</b><span>+18%</span></div>
              <div class="opcao ativa"><b>12 meses</b><span>+30%</span></div>
            </div>
          </div>
        </div>
${card(pid, { top: 60, left: 680, rows: ROWS_FINAL, total: 'R$ 19.441,20', por: 'R$ 3.240,20 por mês · 32 peças no período', peca: 'R$ 607,54', selo: false, comp: COMP })}
      </div>`
  // O cartão mora em left:680 (centrado quando escalado 1,1 com origem no topo)
  // e o fromTo o devolve, no primeiro frame, exatamente para onde o Frame 6 o
  // deixou: left 1180, top 140, escala 1.
  const js = `
      const linhas7 = ['prod', 'tar', 'excl', 'dir', 'avul', 'assi'];
      linhas7.forEach((k) => gsap.set('#${pid}-rl-' + k, { opacity: 0.28 }));
      gsap.set('#${pid}-comp', { opacity: 0 });
      // Scene 1 — o cartão reenquadra para o centro; o palco atrás rebaixa
      tl.fromTo('#${pid}-card', { x: 500, y: 80, scale: 1 },
        { x: 0, y: 0, scale: 1.1, duration: 1.4, ease: 'power3.out', transformOrigin: '50% 0%' }, 0);
      tl.fromTo('#${pid}-col', { opacity: 1 }, { opacity: 0.16, duration: 1.2, ease: 'power2.out' }, 0);
      // Scene 2 — cada linha acende na sua deixa
      linhas7.forEach((k, i) => {
        tl.to('#${pid}-rl-' + k, { opacity: 1, duration: 0.35, ease: 'power2.out' }, 1.7 + i * 0.6);
        tl.fromTo('#${pid}-rl-' + k, { backgroundColor: 'rgba(239,108,31,0)' },
          { backgroundColor: 'rgba(239,108,31,0.13)', duration: 0.28, ease: 'power2.out' }, 1.7 + i * 0.6);
        tl.to('#${pid}-rl-' + k, { backgroundColor: 'rgba(239,108,31,0)', duration: 0.55, ease: 'power2.in' }, 2.05 + i * 0.6);
      });
      // Scene 3 — custo por peça conta e a comparação com avulso entra
      tl.fromTo('#${pid}-peca', { color: '${T.navy}' },
        { color: '${T.alaText}', duration: 0.4, ease: 'power2.out', immediateRender: false }, 5.4);
      tl.to('#${pid}-peca', { color: '${T.navy}', duration: 0.7, ease: 'power2.inOut' }, 5.9);
      tl.fromTo('#${pid}-comp', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 6.4);
      // Scene 4 — leitura parada
      tl.fromTo('#${pid}-total', { y: 0 }, { y: -2.5, duration: 1.2, ease: 'sine.inOut' }, 7.5);
`
  write(id, frame(id, 8.896, body, js))
}

// ================================================================ Frame 8
{
  const id = '08-manda-no-whatsapp'
  const pid = 'f' + id
  const msg = [
    'Contrato: 6 meses',
    '1× Inclusão em vídeo no YouTube por mês',
    '3 gavetas de story por mês',
    '8× Reel que vira anúncio',
    '3× brand day',
    'Exclusividade de categoria',
    'Direitos de uso: 12 meses',
    'Total: R$ 19.441,20 (R$ 3.240,20/mês)',
  ]
  const body = `      <div class="stage">
${card(pid, { top: 60, left: 680, transform: 'translateY(-160px) scale(1.1)', overflowOk: true, rows: ROWS_FINAL, total: 'R$ 19.441,20', por: 'R$ 3.240,20 por mês · 32 peças no período', peca: 'R$ 607,54', selo: false, comp: COMP, cta: true, restaurar: true })}
        <div id="${pid}-bolha" style="position:absolute;left:1330px;top:210px;width:500px;background:#fff;
             border:1.5px solid ${T.cream300};border-left:7px solid #25D366;border-radius:20px;padding:30px 32px">
          <div style="font-size:16px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${T.stone600};margin-bottom:16px">WhatsApp · mensagem pronta</div>
${msg.map((l, i) => `          <div class="msg-l" id="${pid}-m${i}" style="font-size:20px;color:${T.stone700};line-height:1.75">${l}</div>`).join('\n')}
        </div>
        <div id="${pid}-fecho" style="position:absolute;left:0;top:430px;width:1920px;display:flex;
             flex-direction:column;align-items:center;gap:26px;opacity:0">
          <div class="lockup">
            <img src="assets/img/logo-nne.png" alt="Nerds na Estrada" />
            <span class="x">×</span>
            <img src="assets/img/logo-alamo-navy.png" alt="Álamo Benefícios" />
          </div>
          <div class="eyebrow"><span class="risco"></span><span>nerdsnaestrada.com/alamo</span></div>
        </div>
        <div class="ripple" id="${pid}-rip" style="left:960px;top:752px"></div>
        ${CURSOR_SVG.replace(/ID/g, pid)}
      </div>`
  // O cartão continua no lugar em que o Frame 7 o deixou (centro, escala 1,1),
  // só que subido 160px: o quadro pega a metade de baixo, onde está o botão.
  const js = `
      gsap.set('#${pid}-cursor', { x: 1000, y: 1030 });
      gsap.set('#${pid}-restaurar', { opacity: 0 });
      ${msg.map((_, i) => `gsap.set('#${pid}-m${i}', { opacity: 0 });`).join('\n      ')}
      gsap.set('#${pid}-bolha', { opacity: 0 });
      // Scene 1 — o cursor sobe até o botão
      tl.to('#${pid}-cursor', { x: 940, y: 736, duration: 1.5, ease: 'power2.inOut' }, 0.5);
      // Scene 2 — o clique abre a mensagem que a página já monta sozinha
      tl.to('#${pid}-cursor', { scale: 0.85, duration: 0.1, ease: 'power2.in', yoyo: true, repeat: 1 }, 2.5);
      tl.to('#${pid}-btn', { scale: 0.97, duration: 0.1, ease: 'power2.in', yoyo: true, repeat: 1 }, 2.5);
      tl.set('#${pid}-rip', { opacity: 1 }, 2.55);
      tl.fromTo('#${pid}-rip', { scale: 0, opacity: 0.9 },
        { scale: 4, opacity: 0, duration: 0.8, ease: 'power2.out', immediateRender: false }, 2.55);
      tl.fromTo('#${pid}-bolha', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, 2.75);
      tl.to('.msg-l', { opacity: 1, duration: 0.22, ease: 'power2.out', stagger: 0.13 }, 3.0);
      // Scene 3 — voltar ao pacote da proposta
      tl.to('#${pid}-restaurar', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 5.0);
      tl.fromTo('#${pid}-restaurar', { color: '${T.stone600}' }, { color: '${T.alaText}', duration: 0.4, ease: 'power2.out' }, 5.3);
      tl.to('#${pid}-total', { scale: 0.94, opacity: 0, duration: 0.3, ease: 'power2.in' }, 5.7);
      tl.set('#${pid}-total', { textContent: 'R$ 36.000' }, 6.0);
      tl.set('#${pid}-por', { textContent: 'R$ 3.000 por mês · 92 peças no período' }, 6.0);
      tl.set('#${pid}-peca', { textContent: 'R$ 391,30' }, 6.0);
      tl.fromTo('#${pid}-total', { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out', immediateRender: false }, 6.0);
      // Scene 4 — o fecho (único quadro com saída)
      tl.to(['#${pid}-bolha', '#${pid}-card'], { opacity: 0.14, duration: 0.7, ease: 'power2.inOut' }, 7.4);
      tl.to('#${pid}-cursor', { opacity: 0, duration: 0.4 }, 7.4);
      tl.fromTo('#${pid}-fecho', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' }, 7.8);
`
  write(id, frame(id, 9.301, body, js))
}
