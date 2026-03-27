const PERSON_LABELS = {
  fullName: 'ПІБ',
  email: 'Email',
  phone: 'Телефон',
  address: 'Адреса',
}

function SummaryCard({ title, data, accentColor, icon }) {
  return (
    <div className="p-5 rounded-2xl glass-card">
      {/* Card header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${accentColor}20`, color: accentColor }}
        >
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      </div>

      <dl className="space-y-2.5">
        {Object.entries(PERSON_LABELS).map(([key, label]) => (
          <div key={key} className="flex gap-3 text-sm">
            <dt className="text-white/30 w-20 shrink-0 text-xs leading-5">{label}</dt>
            <dd className="text-white/75 break-all text-xs leading-5 font-medium">
              {data[key] || <span className="text-white/20">—</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const SenderIcon = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const RecipientIcon = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M11 12L12.5 13.5L15 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function StepSummary({ formData }) {
  const { sender, recipient, attachments, files } = formData

  return (
    <div className="space-y-5">
      {/* Step header */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'oklch(0.70 0.18 50 / 0.18)', color: 'oklch(0.80 0.16 50)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4L8 1L14 4V12L8 15L2 12V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-medium text-white/40 uppercase tracking-wider">Крок 4 з 4</p>
          <p className="text-sm font-semibold text-white/80">Перевірте дані перед відправкою</p>
        </div>
      </div>

      {/* People cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SummaryCard
          title="Відправник"
          data={sender}
          accentColor="oklch(0.65 0.21 264)"
          icon={SenderIcon}
        />
        <SummaryCard
          title="Отримувач"
          data={recipient}
          accentColor="oklch(0.70 0.18 200)"
          icon={RecipientIcon}
        />
      </div>

      {/* Attachments */}
      <div className="p-5 rounded-2xl glass-card">
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'oklch(0.72 0.19 290 / 0.20)', color: 'oklch(0.78 0.17 290)' }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5 8H11M5 5.5H11M5 10.5H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-white/80">
            Вкладення
            <span className="ml-2 text-xs font-normal text-white/30">({attachments.length} шт.)</span>
          </h3>
        </div>

        <div className="space-y-2">
          {attachments.map((att, i) => (
            <div key={att.id} className="flex items-center gap-3 py-2 px-3 rounded-xl" style={{ background: 'oklch(1 0 0 / 0.03)' }}>
              <span
                className="text-[10px] font-bold w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: 'oklch(0.72 0.19 290 / 0.2)', color: 'oklch(0.78 0.17 290)' }}
              >
                {i + 1}
              </span>
              <div className="flex gap-4 text-xs">
                {[
                  { label: 'В', value: att.height },
                  { label: 'Ш', value: att.width },
                  { label: 'Д', value: att.length },
                ].map(({ label, value }) => (
                  <span key={label} className="text-white/40">
                    {label}:{' '}
                    <strong className="text-white/75 font-semibold">{value || '—'}</strong>
                    <span className="text-white/25 ml-0.5">см</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Files */}
      <div className="p-5 rounded-2xl glass-card">
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'oklch(0.70 0.18 200 / 0.20)', color: 'oklch(0.75 0.17 200)' }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M9 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-white/80">
            Файли
            <span className="ml-2 text-xs font-normal text-white/30">({files.length} шт.)</span>
          </h3>
        </div>

        <div className="space-y-2">
          {files.map((f) => (
            <div key={f.id} className="flex items-center gap-3 py-2 px-3 rounded-xl" style={{ background: 'oklch(1 0 0 / 0.03)' }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="flex-shrink-0" style={{ color: 'oklch(0.70 0.18 200)' }}>
                <path d="M9 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium text-white/70 flex-1 truncate">
                {f.name || <span className="text-white/30 font-normal">(без назви)</span>}
              </span>
              <span className="text-xs text-white/25 truncate max-w-32">
                {f.file ? f.file.name : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ready indicator */}
      <div
        className="flex items-center gap-3 p-4 rounded-2xl"
        style={{ background: 'oklch(0.55 0.24 264 / 0.08)', border: '1px solid oklch(0.55 0.24 264 / 0.2)' }}
      >
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'oklch(0.55 0.24 264 / 0.25)', color: 'oklch(0.80 0.18 264)' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xs text-white/50">
          Усі дані заповнені. Натисніть <strong className="text-white/75 font-semibold">Відправити</strong>, щоб підтвердити.
        </p>
      </div>
    </div>
  )
}
