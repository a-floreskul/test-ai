export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, oklch(0.55 0.24 264) 0%, oklch(0.65 0.21 200) 100%)' }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-white">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm text-white/30">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onNavigate('privacy')}
            className="px-3 py-1.5 text-sm text-white/30 hover:text-white/70 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
          >
            Privacy
          </button>
          {['Terms', 'Contact'].map((label) => (
            <a
              key={label}
              href="#"
              className="px-3 py-1.5 text-sm text-white/30 hover:text-white/70 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
