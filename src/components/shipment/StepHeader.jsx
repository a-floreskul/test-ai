export default function StepHeader({ stepLabel, title, accentBg, accentColor, icon }) {
  return (
    <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: accentBg, color: accentColor }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-white/40 uppercase tracking-wider">{stepLabel}</p>
        <p className="text-sm font-semibold text-white/80">{title}</p>
      </div>
    </div>
  )
}
