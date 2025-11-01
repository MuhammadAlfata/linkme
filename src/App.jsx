import { useEffect, useMemo, useState } from 'react'
import { Globe, Instagram, Github, Mail, Link as LinkIcon } from 'lucide-react'

const THEME_KEY = 'linkinbio_theme'

  const defaultConfig = {
    profile: {
      name: 'Muhammad Alfata',
      handle: 'Instructional Designer | eLearning Developer |',
      bio: 'providing educational advice and collaborating with stakeholders to develop high-quality learning solutions. Focused on enhancing student academic success through digital learning',
      avatarUrl: 'https://drive.google.com/file/d/1raKi7JJTogzpRI0Zz1-7LMdpUxtXhkMd/view',
      accent: 'from-indigo-500 via-sky-500 to-emerald-400',
      socials: [
        { type: 'website', label: 'Website', url: 'https://example.com' },
        { type: 'instagram', label: 'Instagram', url: 'https://instagram.com/muhata_' },
      { type: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-alfata-8322561a4/'}
      ],
    },
  links: [
    { id: '1', title: 'Random IELTS Speaking Question Generator', url: 'https://speakinggenerator.vercel.app/', emoji: '🎤', badge: 'Free' },
    { id: '2', title: 'IELTS Mastery Hub (Coming Soon)', url: 'https://waitlist.example', emoji: '🚀', badge: 'Beta' },
  ],
}

function SocialIcon({ type, className = 'w-4 h-4' }) {
  switch (type) {
    case 'website':
      return <Globe className={className} aria-hidden="true" />
    case 'instagram':
      return <Instagram className={className} aria-hidden="true" />
    case 'github':
      return <Github className={className} aria-hidden="true" />
    case 'email':
      return <Mail className={className} aria-hidden="true" />
    case 'linkedin':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.89-2.37-3.89-2.38 0-2.75 1.85-2.75 3.77V24h-4V8z"/></svg>
    case 'tiktok':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M16.5 3c.7 1.6 2.1 2.9 3.8 3.4v3.1c-1.6-.04-3.1-.51-4.4-1.3v6.7c0 3.7-3 6.6-6.7 6.6S2.5 18.6 2.5 15c0-3.7 3-6.6 6.7-6.6.47 0 .93.05 1.37.15v3.2c-.44-.17-.91-.26-1.37-.26-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.5 3.5-3.5V3h3.28z"/></svg>
    case 'x':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M18.244 2H21l-6.5 7.429L22 22h-6.828l-4.36-5.66L5.6 22H3l7.036-8.037L2 2h6.913l3.95 5.247L18.244 2zm-1.196 18h1.658L7.01 3.92H5.26L17.048 20z"/></svg>
    default:
      return <Globe className={className} aria-hidden="true" />
  }
}

// No edit/owner/DnD — static display only

export default function App() {
  const [config] = useState(defaultConfig)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 20)
    return () => clearTimeout(t)
  }, [])

  // no autosave; static

  // Force dark mode by default; persist choice
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    try { localStorage.setItem(THEME_KEY, 'dark') } catch {}
  }, [])

  const gradient = useMemo(() => {
    const accent = config?.profile?.accent || 'from-indigo-500 via-sky-500 to-emerald-400'
    return `bg-gradient-to-b ${accent}`
  }, [config?.profile?.accent])
  // no edit/import/export helpers

  // Theme is forced to dark; no toggle UI

  function safeHostname(u) {
    try {
      return new URL(u, window.location.href).hostname
    } catch {
      return ''
    }
  }

  function resolveAvatarUrl(url) {
    try {
      if (!url) return url
      const u = new URL(url)
      // Handle common Google Drive patterns
      if (u.hostname.includes('drive.google.com')) {
        let id = null
        const m = u.pathname.match(/\/file\/d\/([^/]+)/)
        if (m && m[1]) id = m[1]
        if (!id) id = u.searchParams.get('id')
        // Prefer lh3 CDN for direct image serving; fallback to uc
        if (id) return `https://lh3.googleusercontent.com/d/${id}=s512` // square thumbnail
      }
      return url
    } catch {
      return url
    }
  }

  return (
    <div className={`min-h-screen ${gradient} text-gray-900 dark:text-gray-100 transition-colors`}>
      <div className="min-h-screen">
        <main className={`mx-auto max-w-xl px-4 sm:px-6 py-8 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className={`h-2 mb-4 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '60ms' }} />

          {/* Profile */}
          <section className={`text-center mb-6 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '100ms' }}>
            <img src={resolveAvatarUrl(config.profile.avatarUrl)} alt="Avatar" className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-white/50 shadow" referrerPolicy="no-referrer" />
            <div className="mt-4">
              <h1 className="text-2xl font-semibold">{config.profile.name}</h1>
              <p className="text-black/60 dark:text-white/70">{config.profile.handle}</p>
              <p className="mt-2 text-sm text-black/70 dark:text-white/80">{config.profile.bio}</p>
            </div>
          </section>

          {/* Socials */}
          <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '140ms' }}>
            {config.profile.socials?.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip chip-tilt"
                aria-label={s.label}
                onMouseMove={(e) => {
                  const el = e.currentTarget
                  const r = el.getBoundingClientRect()
                  const x = (e.clientX - r.left) / r.width
                  const y = (e.clientY - r.top) / r.height
                  el.style.setProperty('--mx', x.toFixed(3))
                  el.style.setProperty('--my', y.toFixed(3))
                  el.style.setProperty('--x', `${(x * 100).toFixed(1)}%`)
                  el.style.setProperty('--y', `${(y * 100).toFixed(1)}%`)
                  el.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`)
                  el.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`)
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.removeProperty('--mx')
                  el.style.removeProperty('--my')
                  el.style.removeProperty('--x')
                  el.style.removeProperty('--y')
                  el.style.removeProperty('--shine-x')
                  el.style.removeProperty('--shine-y')
                }}
              >
                <span className="chip-shine" aria-hidden="true" />
                <SocialIcon type={s.type} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>

          {/* Links list */}
          <section className="space-y-3">
            {config.links.map((link, index) => (
              <div
                key={link.id}
                className={`group rounded-2xl liquid-card liquid-tilt overflow-hidden transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} liquid-breathe`}
                style={{ transitionDelay: `${180 + index * 60}ms` }}
                onMouseMove={(e) => {
                  const el = e.currentTarget
                  const r = el.getBoundingClientRect()
                  const x = (e.clientX - r.left) / r.width
                  const y = (e.clientY - r.top) / r.height
                  el.style.setProperty('--mx', x.toFixed(3))
                  el.style.setProperty('--my', y.toFixed(3))
                  el.style.setProperty('--x', `${(x * 100).toFixed(1)}%`)
                  el.style.setProperty('--y', `${(y * 100).toFixed(1)}%`)
                  el.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`)
                  el.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`)
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.removeProperty('--mx')
                  el.style.removeProperty('--my')
                  el.style.removeProperty('--x')
                  el.style.removeProperty('--y')
                  el.style.removeProperty('--shine-x')
                  el.style.removeProperty('--shine-y')
                }}
              >
                <span className="liquid-shine" aria-hidden="true" />
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="liquid-content glass-text flex items-center justify-between gap-3 p-4 transition-transform group-hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">{link.emoji || '🔗'}</span>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {link.title}
                        {link.badge ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-600 text-white">{link.badge}</span>
                        ) : null}
                      </div>
                      <div className="text-xs text-white/80">{safeHostname(link.url)}</div>
                    </div>
                  </div>
                  <LinkIcon className="w-4 h-4 text-white/80" aria-hidden="true" />
                </a>
              </div>
            ))}
          </section>

          {/* Footer removed as requested */}
        </main>
      </div>
    </div>
  )
}
