export default function Hero({ onNavigate }) {
  return (
    <section className="relative px-6 pt-28 pb-32 overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8 glass text-xs font-medium text-white/70 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          New · Version 1.0 is live
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          <span className="text-white">Build something</span>
          <br />
          <span className="gradient-text">amazing</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-white/45 mb-12 max-w-lg mx-auto leading-relaxed">
          A modern React + Tailwind starter to help you ship faster. Clean, simple, and ready to customize.
        </p>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('create-shipment')}
            className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] glow-brand"
            style={{ background: 'linear-gradient(135deg, oklch(0.55 0.24 264) 0%, oklch(0.50 0.26 280) 100%)' }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white/60 hover:text-white/90 glass hover:bg-white/[0.08] transition-all duration-300"
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60">
              <path d="M7 3L7 11M7 11L3.5 7.5M7 11L10.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30 text-xs">
          {[
            { value: '10k+', label: 'Projects shipped' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 50ms', label: 'Build time' },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-white/70 font-semibold text-sm">{value}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
