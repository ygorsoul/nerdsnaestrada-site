import './alamo.css'
import useReveal from './useReveal'
import AlaSprite from './components/AlaSprite'
import AlaNav from './components/AlaNav'
import AlaHero from './components/AlaHero'
import AlaProposta from './components/AlaProposta'
import AlaTese from './components/AlaTese'
import AlaQuemSomos from './components/AlaQuemSomos'
import AlaPortfolio from './components/AlaPortfolio'
import AlaRota from './components/AlaRota'
import AlaEntregaveis from './components/AlaEntregaveis'
import AlaInvestimento from './components/AlaInvestimento'
import AlaCalculadora from './components/AlaCalculadora'
import AlaContato from './components/AlaContato'
import AlaFooter from './components/AlaFooter'

// Proposta comercial para a Álamo Benefícios: parceria de 12 meses, em
// português. Página fechada — não é linkada em lugar nenhum do site e sai com
// noindex/nofollow, então só chega aqui quem receber a URL /alamo.
//
// A ordem importa: a oferta inteira aparece na segunda tela (AlaProposta), e
// tudo depois dela é detalhe para quem quiser conferir. E nenhuma seção
// seguida repete o mesmo layout — foi o que fez a versão anterior parecer
// longa e monótona.
export default function AlamoApp() {
  useReveal()

  return (
    <>
      <AlaSprite />
      <AlaNav />
      <AlaHero />
      <AlaProposta />
      <AlaTese />
      <AlaQuemSomos />
      <AlaPortfolio />
      <AlaRota />
      <AlaEntregaveis />
      <AlaInvestimento />
      <AlaCalculadora />
      <AlaContato />
      <AlaFooter />
    </>
  )
}
