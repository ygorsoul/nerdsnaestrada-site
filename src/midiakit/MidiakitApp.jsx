import './midiakit.css'
import useReveal from '../alamo/useReveal'
import MkNav from './components/MkNav'
import MkHero from './components/MkHero'
import MkTabela from './components/MkTabela'
import MkCondicoes from './components/MkCondicoes'
import MkContato from './components/MkContato'
import MkFooter from './components/MkFooter'
import textos from './textos'

// Tabela de valores do Nerds na Estrada. Página fechada, com noindex: é o link
// que a gente manda para quem pede preço, e não uma seção da home.
export default function MidiakitApp() {
  useReveal()

  return (
    <>
      <MkNav />
      <MkHero />
      {textos.blocos.map((b) => (
        <MkTabela key={b.id} bloco={b} />
      ))}
      <MkCondicoes />
      <MkContato />
      <MkFooter />
    </>
  )
}
