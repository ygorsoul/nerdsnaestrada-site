import Dia, { Watermark } from './Dia'

const cards = [
  {
    n: '01',
    titulo: 'O clássico abrindo caminho para o novo',
    paragrafos: [
      <>Uma Pajero de 2008 provando que ainda encara tudo é o melhor argumento possível para a geração atual: <strong>"se essa aguenta, imagina a nova"</strong>.</>,
      <>O Pilar 04 da estratégia de conteúdo (logo abaixo) já nasce reservado para isso — espaço pronto para encaixar o lançamento.</>,
    ],
  },
  {
    n: '02',
    titulo: 'O carro já está na garagem',
    paragrafos: [
      <>A Pajero é nossa, já roda e já vai para a estrada. Não é um veículo emprestado que precisa ser cedido, plotado e devolvido — é o carro em que a gente mora.</>,
      <>Isso muda o tom do conteúdo: o que aparece na tela não é um test-drive patrocinado, é rotina real de uso.</>,
    ],
  },
  {
    n: '03',
    titulo: 'Durabilidade não se diz, se prova',
    paragrafos: [
      <>Toda montadora fala em resistência. Aqui o teste é público e contínuo: <strong>o mesmo motor diesel original de 2008</strong>, atravessando dois extremos do continente, filmado sem corte de conveniência.</>,
      <>É o tipo de prova que nenhum comercial de estúdio consegue comprar.</>,
    ],
  },
  {
    n: '04',
    titulo: 'Herança de expedição, no lugar certo',
    paragrafos: [
      <>A Pajero construiu o nome dela fora do asfalto, em prova de resistência de longa distância — e é esse imaginário que a placa Mitsubishi carrega no Brasil até hoje.</>,
      <>Rio de Janeiro → Ushuaia → Alasca é exatamente esse terreno narrativo: <strong>cordilheira, deserto, selva e gelo</strong>, na sequência.</>,
    ],
  },
]

export default function MitMarca() {
  return (
    <section id="a-marca" className="why-mit">
      <Watermark side="right" />
      <div className="wrap">
        <div className="eyebrow">04 · A marca no capô</div>
        <h2 className="section-title">A Pajero não é o veículo da viagem. Ela é o argumento dela.</h2>
        <p className="section-lead">Fechando essa parceria, a expedição inteira será desenhada em cima de uma Mitsubishi Pajero Full 2008 GLS Diesel. Não um carro escolhido depois — o ponto de partida da história, e o que essa viagem vai se propor a provar do primeiro ao último quilômetro.</p>

        <div className="why-grid reveal">
          {cards.map((c) => (
            <div className="why-card" key={c.n}>
              <div className="why-n"><Dia /> {c.n}</div>
              <h4>{c.titulo}</h4>
              {c.paragrafos.map((texto, i) => (
                <p key={i}>{texto}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="exclusive-strip reveal">
          <Dia />
          <div className="txt">
            <div className="lbl">O teste</div>
            <p>Rio de Janeiro → Ushuaia → Alasca, com o <b>mesmo motor diesel de 2008</b>, sem troca de veículo e sem estrada fácil. Se a Pajero chegar, a história se conta sozinha.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
