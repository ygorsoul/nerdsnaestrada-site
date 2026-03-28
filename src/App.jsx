import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import TrailerSection from './components/TrailerSection'
import NumbersStats from './components/NumbersStats'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f3' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <TrailerSection />
        <NumbersStats />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}

export default App
