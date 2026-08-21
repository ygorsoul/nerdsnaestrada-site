import './mitsubishi.css'
import useReveal from './useReveal'
import MitSprite from './components/MitSprite'
import MitNav from './components/MitNav'
import MitHero from './components/MitHero'
import MitPajero from './components/MitPajero'
import MitPost from './components/MitPost'
import MitQuemSomos from './components/MitQuemSomos'
import MitMarca from './components/MitMarca'
import MitRota from './components/MitRota'
import MitConteudo from './components/MitConteudo'
import MitNumeros from './components/MitNumeros'
import MitEquipamentos from './components/MitEquipamentos'
import MitProposta from './components/MitProposta'
import MitContato from './components/MitContato'
import MitFooter from './components/MitFooter'

// Proposta comercial para a Mitsubishi Motors do Brasil. Página fechada: não
// é linkada em lugar nenhum do site e sai com noindex/nofollow — só chega
// aqui quem receber a URL /mitsubishi direto.
export default function MitsubishiApp() {
  useReveal()

  return (
    <>
      <MitSprite />
      <MitNav />
      <MitHero />
      <MitPajero />
      <MitPost />
      <MitQuemSomos />
      <MitMarca />
      <MitRota />
      <MitConteudo />
      <MitNumeros />
      <MitEquipamentos />
      <MitProposta />
      <MitContato />
      <MitFooter />
    </>
  )
}
