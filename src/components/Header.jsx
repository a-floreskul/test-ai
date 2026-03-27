export default function Header({ onNavigate, currentPage }) {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center glow-sm transition-all duration-300 group-hover:glow-brand"
            style={{ background: 'linear-gradient(135deg, oklch(0.55 0.24 264) 0%, oklch(0.65 0.21 200) 100%)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
            MyApp
          </span>
        </button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Features', href: '#features' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 text-sm text-white/50 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => onNavigate('create-shipment')}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
              currentPage === 'create-shipment'
                ? 'text-white/90 bg-white/[0.08]'
                : 'text-white/50 hover:text-white/90 hover:bg-white/[0.05]'
            }`}
          >
            Нове відправлення
          </button>
        </nav>

        {/* CTA */}
        <button
          onClick={() => onNavigate('create-shipment')}
          className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] glow-sm hover:glow-brand"
          style={{ background: 'linear-gradient(135deg, oklch(0.55 0.24 264) 0%, oklch(0.50 0.26 280) 100%)' }}
        >
          <span>Get Started</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-80">
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
