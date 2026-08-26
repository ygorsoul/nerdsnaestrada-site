import Navbar from './components/Navbar'
import CalculadoraHero from './components/CalculadoraHero'
import Calculadora from './components/Calculadora'
import Footer from './components/Footer'

function CalculadoraApp() {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f3' }}>
      <Navbar />
      <main>
        <CalculadoraHero />
        <Calculadora />
      </main>
      <Footer />
    </div>
  )
}

export default CalculadoraApp
