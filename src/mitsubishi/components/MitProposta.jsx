import Dia, { Watermark } from './Dia'

const entregamos = [
  'Identidade visual Mitsubishi aplicada à Pajero durante toda a expedição — plotagem seguindo o manual de marca de vocês',
  'Diário de bordo em vídeo mostrando o desempenho real da Pajero em cada território',
  'Conteúdo multiplataforma semanal — Reels, TikTok, YouTube Shorts, Stories',
  'Testemunho contínuo de durabilidade: motor diesel de 2008 atravessando dois continentes',
  'Presença de marca em eventos e comunidades 4x4 / overland pelo caminho',
  'Direitos de uso de todo o material bruto e editado para campanhas próprias da Mitsubishi, sem custo adicional',
  'Exclusividade de categoria: nenhuma outra montadora aparece na expedição',
  'Acesso direto a uma audiência qualificada de +200 mil pessoas interessadas em carros e aventura',
]

// Um pedido só, em dois momentos da mesma linha do tempo — por isso vira uma
// trilha contínua na tela, e não dois cards soltos que pedem escolha.
const pedido = [
  {
    quando: 'Antes da largada',
    titulo: 'Revisão inicial completa',
    texto: 'Preparação e revisão preventiva completa da Pajero antes da largada, feita na rede Mitsubishi do Brasil, garantindo que ela saia em condição ideal para os mais de dez países pela frente.',
  },
  {
    quando: 'Ao longo da estrada',
    titulo: 'Apoio financeiro mensal',
    texto: 'Um valor mensal ao longo da expedição, para cobrir manutenção corretiva, peças e imprevistos mecânicos fora do Brasil — nos dando autonomia para resolver rápido em qualquer país do trajeto.',
  },
]

const tambemAjuda = [
  'Peças e componentes genuínos Mitsubishi disponibilizados para a preparação inicial',
  'Indicações de contatos em concessionárias parceiras nos países onde a Mitsubishi tiver rede',
  'Co-criação de uma campanha de mídia em torno da expedição',
]

export default function MitProposta() {
  return (
    <section id="proposta">
      <Watermark side="left" />
      <div className="wrap">
        <div className="eyebrow">09 · A proposta</div>
        <h2 className="section-title">O que entregamos, o que buscamos.</h2>
        <p className="section-lead">Uma parceria pensada para gerar prova social real de resistência e engenharia Mitsubishi, com contrapartidas claras dos dois lados.</p>

        <div className="two-col reveal">
          <div className="col-panel offer">
            <h3>O que entregamos</h3>
            <ul className="check-list">
              {entregamos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-panel ask">
            <h3>O que buscamos</h3>
            <p className="ask-intro">Sabemos que a Mitsubishi do Brasil não necessariamente tem alcance direto sobre a rede credenciada em todos os países do trajeto. Por isso o apoio que a gente busca acompanha a expedição do começo ao fim: prepara a Pajero para a largada e mantém ela rodando no mundo.</p>

            <div className="ask-plan">
              <div className="plan-head"><Dia /> O apoio, da garagem ao Ártico</div>
              <div className="plan-steps">
                {pedido.map((p) => (
                  <div className="plan-step" key={p.titulo}>
                    <div className="when">{p.quando}</div>
                    <h4>{p.titulo}</h4>
                    <p>{p.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ask-extra-label">Também nos ajuda</div>
            <ul className="check-list">
              {tambemAjuda.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
