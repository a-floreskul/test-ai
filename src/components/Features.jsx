const features = [
  {
    title: 'Fast by Default',
    description: 'Built on Vite for lightning-fast dev server and optimized production builds.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 12H11L9 20L19 10H11L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'oklch(0.75 0.18 50)',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first styling that lets you build any design directly in your markup.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 5C8.5 5 7 6.25 6.5 8.75C7.25 7.5 8.25 7.0 9.5 7.25C10.2175 7.4138 10.7301 7.9338 11.2989 8.5106C12.2114 9.4356 13.275 10.5 15.5 10.5C18 10.5 19.5 9.25 20 6.75C19.25 8 18.25 8.5 17 8.25C16.2825 8.0862 15.7699 7.5662 15.2011 6.9894C14.2886 6.0644 13.225 5 11 5ZM6.5 10.5C4 10.5 2.5 11.75 2 14.25C2.75 13 3.75 12.5 5 12.75C5.7175 12.9138 6.2301 13.4338 6.7989 14.0106C7.7114 14.9356 8.775 16 11 16C13.5 16 15 14.75 15.5 12.25C14.75 13.5 13.75 14 12.5 13.75C11.7825 13.5862 11.2699 13.0662 10.7011 12.4894C9.7886 11.5644 8.725 10.5 6.5 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'oklch(0.70 0.18 200)',
  },
  {
    title: 'React 19',
    description: 'The latest React with concurrent features and improved developer experience.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="11" cy="11" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="11" cy="11" rx="9" ry="3.5" transform="rotate(60 11 11)" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="11" cy="11" rx="9" ry="3.5" transform="rotate(120 11 11)" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accent: 'oklch(0.70 0.20 220)',
  },
  {
    title: 'Component Ready',
    description: 'Pre-built components to get you started quickly without the boilerplate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accent: 'oklch(0.72 0.19 290)',
  },
  {
    title: 'Responsive',
    description: 'Fully responsive layout that looks great on any device out of the box.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 19H14M11 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: 'oklch(0.70 0.18 160)',
  },
  {
    title: 'Easy to Extend',
    description: 'Clean structure makes it simple to add pages, components, and features.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3V19M3 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accent: 'oklch(0.72 0.20 30)',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-white/60 border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'oklch(0.70 0.18 264)' }} />
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            The modern stack,
            <span className="gradient-text"> fully configured</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-base">
            A solid foundation so you can focus on building your product, not the setup.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl glass-card hover:bg-white/[0.08] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 20% 20%, ${f.accent}18 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.accent}18`, color: f.accent }}
              >
                {f.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-base font-semibold text-white/90 mb-2">{f.title}</h3>
              <p className="relative text-sm text-white/40 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
