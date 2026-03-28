import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
const logo = '/ico.png'

const navLinks = [
  { label: 'Nossa História', href: '#historia' },
  { label: 'O Projeto',      href: '#projeto' },
  { label: 'Parceiros',      href: '#parceiros' },
  { label: 'Contato',        href: '#contato' },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-md border-b border-cream-300 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src={logo}
              alt="Nerds na Estrada"
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xs font-medium text-stone-900 self-end mb-1 transition-colors duration-300">.com</span>
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 tracking-wide transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5521990974226"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-stone-800 text-stone-50 text-sm font-medium rounded-full hover:bg-stone-900 hover:scale-105 transition-all duration-200 shadow-sm"
            >
              Seja Parceiro
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-700 p-1 hover:text-stone-900 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-cream-100/98 backdrop-blur-md border-b border-cream-300 px-5 pb-5 pt-2 flex flex-col gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-left py-3 text-stone-700 font-medium border-b border-cream-300 last:border-0 hover:text-stone-900 transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/5521990974226"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-center py-3 bg-stone-800 text-stone-50 font-medium rounded-full"
          >
            Seja Parceiro
          </a>
        </div>
      </div>
    </nav>
  )
}
