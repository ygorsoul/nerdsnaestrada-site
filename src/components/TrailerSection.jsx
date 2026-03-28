import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import BR from 'country-flag-icons/react/3x2/BR'
import UY from 'country-flag-icons/react/3x2/UY'
import PY from 'country-flag-icons/react/3x2/PY'
import AR from 'country-flag-icons/react/3x2/AR'
import CL from 'country-flag-icons/react/3x2/CL'
import BO from 'country-flag-icons/react/3x2/BO'
import PE from 'country-flag-icons/react/3x2/PE'
import EC from 'country-flag-icons/react/3x2/EC'
import CO from 'country-flag-icons/react/3x2/CO'
import PA from 'country-flag-icons/react/3x2/PA'
import CR from 'country-flag-icons/react/3x2/CR'
import NI from 'country-flag-icons/react/3x2/NI'
import HN from 'country-flag-icons/react/3x2/HN'
import SV from 'country-flag-icons/react/3x2/SV'
import GT from 'country-flag-icons/react/3x2/GT'
import BZ from 'country-flag-icons/react/3x2/BZ'
import MX from 'country-flag-icons/react/3x2/MX'
import US from 'country-flag-icons/react/3x2/US'
import CA from 'country-flag-icons/react/3x2/CA'
import { TbDrone } from 'react-icons/tb'
import { Md360, MdOutlineVideocam, MdPhotoCameraFront, MdFiberManualRecord } from 'react-icons/md'
import { BsCameraVideo } from 'react-icons/bs'

const flagMap = { BR, UY, PY, AR, CL, BO, PE, EC, CO, PA, CR, NI, HN, SV, GT, BZ, MX, US, CA }

const route = [
  { place: 'Brasil',         code: 'BR', active: true,  label: 'Partida'           },
  { place: 'Uruguai',        code: 'UY', active: false                              },
  { place: 'Paraguai',       code: 'PY', active: false                              },
  { place: 'Argentina',      code: 'AR', active: false, label: 'Carretera Austral' },
  { place: 'Chile',          code: 'CL', active: false, label: 'Carretera Austral' },
  { place: 'Bolívia',        code: 'BO', active: false                              },
  { place: 'Peru',           code: 'PE', active: false                              },
  { place: 'Equador',        code: 'EC', active: false                              },
  { place: 'Colômbia',       code: 'CO', active: false                              },
  { place: 'Panamá',         code: 'PA', active: false, label: 'Barco (Darién Gap)'},
  { place: 'Costa Rica',     code: 'CR', active: false                              },
  { place: 'Nicarágua',      code: 'NI', active: false                              },
  { place: 'Honduras',       code: 'HN', active: false                              },
  { place: 'El Salvador',    code: 'SV', active: false                              },
  { place: 'Guatemala',      code: 'GT', active: false                              },
  { place: 'Belize',         code: 'BZ', active: false                              },
  { place: 'México',         code: 'MX', active: false                              },
  { place: 'Estados Unidos', code: 'US', active: false                              },
  { place: 'Canadá',         code: 'CA', active: false                              },
  { place: 'Alasca',         code: 'US', active: false, label: 'Destino Final', isAlaska: true },
]

const specs = [
  { label: 'Custo do trailer',   value: 'R$ 13.000',  note: 'Food Truck zero km'   },
  { label: 'Distância prevista', value: '~20.000 km', note: 'Brasil → Alasca'      },
  { label: 'Países planejados',  value: '19',         note: 'Toda a América'        },
  { label: 'Viagem anterior',    value: 'R$ 700',     note: 'Ford Ka que viralizou' },
]

const equipment = [
  { Icon: TbDrone,           name: 'Drone DJI Mini 3',    spec: '4K aéreo'            },
  { Icon: Md360,             name: 'Akaso 360 4K',         spec: '360° de ação'        },
  { Icon: BsCameraVideo,     name: 'Osmo Pocket DJI',      spec: 'Estabilização'       },
  { Icon: MdPhotoCameraFront,name: '2× iPhone 17 Pro Max', spec: '48MP'                },
]

export default function TrailerSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projeto"
      aria-label="O Projeto — Trailer Brasil ao Alasca"
      className="py-16 sm:py-24"
      style={{ background: 'linear-gradient(170deg, #f5f0e6 0%, #ede5d4 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">O Grande Projeto</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-4">
            Um trailer, dois nerds<br />
            <em>e um continente inteiro</em>
          </h2>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed">
            Transformamos um Food Truck em motorhome para realizar a viagem mais ambiciosa das nossas vidas. Cada parafuso, cada painel solar — documentado em tempo real.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Rota */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-stone-700 font-semibold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <MapPin size={13} className="text-amber-500" />
              A Rota — Brasil ao Alasca
            </h3>

            {/* Lista de países em 2 colunas no mobile */}
            <div className="relative pl-5">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400 via-stone-300 to-stone-200" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-6">
                {route.map((stop, i) => {
                  const F = !stop.isAlaska ? flagMap[stop.code] : null
                  return (
                    <div key={stop.place} className="flex items-center gap-2.5 relative">
                      {/* Dot — só na col 1 no layout 2-col */}
                      <div className={`flex-shrink-0 w-2.5 h-2.5 rounded-full border-2 ${
                        stop.active
                          ? 'bg-amber-500 border-amber-400 shadow-[0_0_6px_rgba(180,120,30,0.4)]'
                          : i === route.length - 1
                          ? 'bg-stone-300 border-stone-400'
                          : 'bg-stone-100 border-stone-300'
                      }`} />

                      {/* Flag */}
                      <span className="w-6 flex-shrink-0">
                        {stop.isAlaska
                          ? <span className="text-sm">🏔️</span>
                          : <F className="w-6 rounded-sm" />
                        }
                      </span>

                      {/* Nome */}
                      <span className={`text-sm font-medium flex-1 min-w-0 ${
                        stop.active ? 'text-stone-800' : i === route.length - 1 ? 'text-stone-600' : 'text-stone-400'
                      }`}>
                        {stop.place}
                      </span>

                      {/* Label — só em telas md+ */}
                      {stop.label && (
                        <span className={`hidden sm:inline-flex text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                          stop.active
                            ? 'bg-amber-500/15 text-amber-600 border border-amber-400/30'
                            : i === route.length - 1
                            ? 'bg-stone-100 text-stone-500 border border-stone-200'
                            : 'bg-green-500/10 text-green-700 border border-green-400/20'
                        }`}>
                          {stop.label}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Equipamentos */}
            <div className="mt-8 pt-7 border-t border-stone-200">
              <p className="text-stone-400 text-xs uppercase tracking-widest mb-3 font-medium">Produção</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6">
                {equipment.map((e) => (
                  <div key={e.name} className="flex items-center gap-3 py-2.5 border-b border-stone-200 last:border-0">
                    <e.Icon size={18} className="text-amber-500 flex-shrink-0" />
                    <span className="text-stone-700 font-medium text-sm flex-1 min-w-0 truncate">{e.name}</span>
                    <span className="text-stone-400 text-xs flex-shrink-0">{e.spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Números + Card */}
          <div className={`transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {specs.map((s) => (
                <div key={s.label} className="bg-white/60 border border-stone-200 rounded-2xl p-4 sm:p-5 hover:border-amber-400/40 transition-colors duration-200">
                  <div className="font-display text-xl sm:text-2xl lg:text-3xl text-stone-800 font-semibold mb-1 leading-tight">{s.value}</div>
                  <div className="text-stone-600 text-xs sm:text-sm font-medium">{s.label}</div>
                  <div className="text-stone-400 text-xs mt-0.5">{s.note}</div>
                </div>
              ))}
            </div>

            {/* Card Instagram */}
            <div className="bg-stone-800 text-stone-50 rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <MdFiberManualRecord size={20} className="text-red-500 mt-0.5 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-stone-50 text-sm sm:text-base">Acompanhe em tempo real</p>
                  <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                    A transformação do trailer, os testes e as conquistas — tudo no Instagram antes de qualquer outro lugar.
                  </p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/NerdsNaEstradaOficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-amber-400 text-sm font-medium hover:text-amber-300 active:text-amber-200 transition-colors"
              >
                @NerdsNaEstradaOficial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
