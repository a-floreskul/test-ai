export default function FormField({ label, type = 'text', value, onChange, placeholder, error, unit, min, compact }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
        {label}{unit && <span className="normal-case text-white/25 ml-1">({unit})</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        className={`input-dark w-full rounded-xl text-sm transition-all duration-200 ${compact ? 'px-3 py-2.5' : 'px-4 py-3'} ${
          error ? 'input-dark-error' : ''
        }`}
      />
      {error && (
        <p className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'oklch(0.70 0.20 20)' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 4V6.5M6 8V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}
