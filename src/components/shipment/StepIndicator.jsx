const STEPS = ['Відправник', 'Отримувач', 'Вкладення', 'Огляд']

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-between mb-10 px-2">
      {STEPS.map((label, index) => {
        const stepNum = index + 1
        const isCompleted = stepNum < currentStep
        const isCurrent = stepNum === currentStep

        return (
          <div key={stepNum} className="flex items-center flex-1">
            {/* Step node */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div
                className={`relative w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                  isCompleted
                    ? 'text-white'
                    : isCurrent
                    ? 'text-white ring-2 ring-offset-2'
                    : 'text-white/30'
                }`}
                style={{
                  background: isCompleted
                    ? 'linear-gradient(135deg, oklch(0.55 0.24 264), oklch(0.65 0.21 200))'
                    : isCurrent
                    ? 'linear-gradient(135deg, oklch(0.55 0.24 264), oklch(0.50 0.26 280))'
                    : 'oklch(1 0 0 / 0.06)',
                  ringColor: isCurrent ? 'oklch(0.55 0.24 264 / 0.3)' : 'transparent',
                  ringOffsetColor: 'oklch(0.08 0.02 264)',
                  boxShadow: isCurrent
                    ? '0 0 0 2px oklch(0.08 0.02 264), 0 0 0 4px oklch(0.55 0.24 264 / 0.4)'
                    : isCompleted
                    ? '0 0 12px oklch(0.55 0.24 264 / 0.4)'
                    : 'none',
                }}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-[11px] font-medium transition-colors duration-300 hidden sm:block ${
                  isCurrent
                    ? 'text-white/80'
                    : isCompleted
                    ? 'text-white/40'
                    : 'text-white/25'
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector */}
            {stepNum < STEPS.length && (
              <div className="flex-1 mx-2 mb-5">
                <div className="h-px w-full rounded-full overflow-hidden" style={{ background: 'oklch(1 0 0 / 0.08)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: stepNum < currentStep ? '100%' : '0%',
                      background: 'linear-gradient(90deg, oklch(0.55 0.24 264), oklch(0.65 0.21 200))',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
