import Navbar from './components/Navbar'
import CuponsHero from './components/CuponsHero'
import CuponsSection from './components/CuponsSection'
import EquipamentosSection from './components/EquipamentosSection'
import Footer from './components/Footer'

function CuponsApp() {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f3' }}>
      <Navbar />
      <main>
        <CuponsHero />
        <CuponsSection />
        <EquipamentosSection />
      </main>
      <Footer />
    </div>
  )
}

export default CuponsApp
