const equipamentos = [
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
    texto: 'Captura de todos os ângulos ao redor do carro em um único take, ideal para mostrar a Pajero em cada cenário.',
  },
  {
    eyebrow: 'Registro aéreo',
    nome: 'DJI Mini 3',
    texto: 'Imagens aéreas da Pajero cruzando cordilheira, deserto e estrada — os planos que mostram a escala real da expedição.',
  },
]

export default function MitEquipamentos() {
  return (
    <section id="equipamentos">
      <div className="wrap">
        <div className="eyebrow">08 · Equipamentos</div>
        <h2 className="section-title">Conteúdo com padrão de marca, não de improviso.</h2>
        <p className="section-lead">O setup de captação garante que a Pajero e a marca Mitsubishi apareçam com qualidade profissional em qualquer terreno.</p>

        <div className="gear-grid reveal">
          {equipamentos.map((e) => (
            <div className="gear-card" key={e.nome}>
              <div className="g-eyebrow mono">{e.eyebrow}</div>
              <h4>{e.nome}</h4>
              <p>{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
