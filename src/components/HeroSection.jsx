import { ArrowDown } from 'lucide-react'
import logo from '../assets/logo.png'

export default function HeroSection() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="inicio"
      aria-label="Início — Nerds na Estrada"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #fdfcf9 0%, #f5f0e6 40%, #ede5d4 100%)' }}
    >
      {/* Decoração sutil de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full bg-amber-400/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-[600px] sm:h-[600px] rounded-full bg-green-400/5 blur-3xl" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute left-0 right-0 h-px"
            style={{ top: `${18 + i * 16}%`, background: `rgba(176,163,144,${0.06 - i * 0.01})` }} />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 pt-24 pb-20 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8 sm:mb-10 animate-fade-up">
          <img
            src={logo}
            alt="Nerds na Estrada"
            className="h-32 sm:h-52 lg:h-64 w-auto opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-3xl sm:text-5xl lg:text-6xl text-stone-800 leading-[1.15] mb-5 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Do Brasil ao{' '}
          <em className="not-italic text-amber-500">Alasca</em>
          <br />
          <span className="text-stone-500 text-2xl sm:text-4xl lg:text-5xl font-normal">
            dentro de um trailer.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="text-stone-500 text-base sm:text-xl max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Dois criadores de conteúdo transformando a América em
          histórias reais — com câmera, código e muita estrada pela frente.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <button
            onClick={() => go('#historia')}
            className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 text-stone-50 font-medium rounded-full hover:bg-stone-900 active:scale-95 hover:scale-105 transition-all duration-200 shadow-sm cursor-pointer"
          >
            Nossa Jornada
          </button>
          <a
            href="https://www.instagram.com/NerdsNaEstradaOficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-stone-300 text-stone-700 font-medium rounded-full hover:border-stone-500 active:bg-stone-100 hover:bg-cream-200 transition-all duration-200 text-center"
          >
            @NerdsNaEstradaOficial
          </a>
        </div>

        {/* Números */}
        <div
          className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {[
            { num: '+150 mil', label: 'seguidores'    },
            { num: '+60 mi',   label: 'de views'      },
            { num: '+3 mi',    label: 'likes'          },
            { num: '4 países', label: 'já visitados'  },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl text-stone-800 font-semibold">{s.num}</div>
              <div className="text-stone-400 text-xs uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => go('#historia')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Explorar</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-amber-500 transition-colors" />
      </button>
    </section>
  )
}
