import './alamo.css'
import useReveal from './useReveal'
import AlaSprite from './components/AlaSprite'
import AlaNav from './components/AlaNav'
import AlaHero from './components/AlaHero'
import AlaTese from './components/AlaTese'
import AlaQuemSomos from './components/AlaQuemSomos'
import AlaPortfolio from './components/AlaPortfolio'
import AlaMarca from './components/AlaMarca'
import AlaRota from './components/AlaRota'
import AlaEntregaveis from './components/AlaEntregaveis'
import AlaNumeros from './components/AlaNumeros'
import AlaEquipamentos from './components/AlaEquipamentos'
import AlaInvestimento from './components/AlaInvestimento'
import AlaContato from './components/AlaContato'
import AlaFooter from './components/AlaFooter'

// Proposta comercial para a Álamo Benefícios: parceria de 12 meses, em
// português. Página fechada — não é linkada em lugar nenhum do site e sai com
// noindex/nofollow, então só chega aqui quem receber a URL /alamo.
export default function AlamoApp() {
  useReveal()

  return (
    <>
      <AlaSprite />
      <AlaNav />
      <AlaHero />
      <AlaTese />
      <AlaQuemSomos />
      <AlaPortfolio />
      <AlaMarca />
      <AlaRota />
      <AlaEntregaveis />
      <AlaNumeros />
      <AlaEquipamentos />
      <AlaInvestimento />
      <AlaContato />
      <AlaFooter />
    </>
  )
}
