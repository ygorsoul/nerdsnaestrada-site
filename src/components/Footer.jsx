import { MapPin, MessageCircle, Mail, Heart } from 'lucide-react'
import logo from '../assets/logo.png'

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
  </svg>
)

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
  </svg>
)

const navLinks = [
  { label: 'Nossa História', href: '#historia' },
  { label: 'O Projeto',      href: '#projeto'  },
  { label: 'Parceiros',      href: '#parceiros'},
  { label: 'Números',        href: '#numeros'  },
]

export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer id="contato" aria-label="Contato e Rodapé" style={{ background: '#1e1a12' }}>

      {/* CTA section */}
      <div className="border-b border-stone-700">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Vamos juntos?</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-stone-50 leading-tight mb-4">
              Sua marca faz parte<br />
              <em>da próxima aventura</em>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Patrocínios, permutas, eventos — a gente conversa. O que não negociamos é a autenticidade.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5521990974226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-amber-500 text-stone-900 font-semibold rounded-full hover:bg-amber-400 active:scale-95 hover:scale-105 transition-all duration-200 shadow-lg shadow-amber-900/20 text-sm sm:text-base"
            >
              <MessageCircle size={17} className="flex-shrink-0" />
              WhatsApp: (21) 99097-4226
            </a>
            <a
              href="mailto:nerdsnaestrada@hotmail.com"
              className="flex items-center justify-center gap-3 px-6 py-4 border border-stone-600 text-stone-300 font-medium rounded-full hover:border-stone-400 hover:text-stone-50 active:scale-95 transition-all duration-200 text-sm sm:text-base break-all text-center"
            >
              <Mail size={17} className="flex-shrink-0" />
              nerdsnaestrada@hotmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <img src={logo} alt="Nerds na Estrada" className="h-16 w-auto mb-4 invert opacity-80" />
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Do Brasil ao Alasca, documentando cada quilômetro com tecnologia, propósito e muito amor pela estrada.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-widest font-medium mb-5">Navegar</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-stone-500 hover:text-stone-200 text-sm transition-colors cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-widest font-medium mb-5">Nos siga</p>
            <div className="space-y-3">
              {[
                { icon: InstagramIcon, label: '@NerdsNaEstradaOficial', href: 'https://www.instagram.com/NerdsNaEstradaOficial' },
                { icon: TikTokIcon,    label: '@NerdsNaEstradaOficial', href: 'https://www.tiktok.com/@NerdsNaEstradaOficial' },
                { icon: YoutubeIcon,   label: 'Nerds na Estrada',       href: 'https://www.youtube.com/@NerdsNaEstrada' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-500 hover:text-stone-200 transition-colors group text-sm"
                >
                  <span className="group-hover:scale-110 transition-transform"><Icon size={15} /></span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-600 text-xs">© 2025 Nerds na Estrada. Todos os direitos reservados.</p>
          <p className="text-stone-600 text-xs flex items-center gap-1.5">
            Feito com <Heart size={11} className="text-amber-600 fill-amber-600" /> para quem sonha em viajar
          </p>
        </div>
      </div>
    </footer>
  )
}
