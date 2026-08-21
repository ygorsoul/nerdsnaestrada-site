import Dia from './Dia'

const links = [
  { href: '#pajero',      label: 'A Pajero'    },
  { href: '#post-pajero', label: 'O post'      },
  { href: '#quem-somos',  label: 'Quem somos'  },
  { href: '#a-marca',     label: 'A marca'     },
  { href: '#rota',        label: 'A rota'      },
  { href: '#conteudo',    label: 'Conteúdo'    },
  { href: '#numeros',     label: 'Números'     },
  { href: '#proposta',    label: 'Proposta'    },
  { href: '#contato',     label: 'Contato'     },
]

export default function MitNav() {
  return (
    <nav>
      <div className="brand">
        <a
          href="https://nerdsnaestrada.com/"
          target="_blank"
          rel="noopener"
          style={{ display: 'flex', alignItems: 'center', gap: '13px', textDecoration: 'none' }}
        >
          <img className="nav-logo" src="/mitsubishi/logo-nne.png" alt="Nerds na Estrada" />
        </a>
        <span className="nav-x">×</span>
        <Dia className="dia nav-dia" />
        <span className="nav-name">Mitsubishi Motors</span>
      </div>
      <div className="nav-right">
        <div className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
