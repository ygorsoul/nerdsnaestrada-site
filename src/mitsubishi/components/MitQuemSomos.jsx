const pessoas = [
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
]

export default function MitQuemSomos() {
  return (
    <section id="quem-somos">
      <div className="wrap">
        <div className="eyebrow">03 · Quem somos</div>
        <h2 className="section-title">Um casal, uma estrada, uma câmera sempre ligada.</h2>
        <p className="section-lead">Somos o Nerds na Estrada: conteúdo real sobre viagem de carro, perrengue e liberdade, para um público jovem-adulto que quer viajar mais e gastar menos — e confia na gente pra saber com o que vale a pena rodar.</p>

        <div className="people">
          {pessoas.map((p) => (
            <div className="person reveal" key={p.nome}>
              <div className="who">{p.nome}</div>
              <div className="role">{p.papel}</div>
              <p>{p.bio}</p>
            </div>
          ))}
        </div>

        <div className="quote reveal">
          "Viajar é desbloquear um novo mapa da vida, dentro de si mesmo. Você não precisa zerar o mundo, só precisa jogar sua melhor versão em cada fase."
          <cite>— Ygor, no nosso livro</cite>
        </div>
      </div>
    </section>
  )
}
