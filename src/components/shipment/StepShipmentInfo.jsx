import FormField from './FormField'
import StepHeader from './StepHeader'

const DIM_LABELS = { height: 'Висота', width: 'Ширина', length: 'Довжина' }
const DIM_ENTRIES = Object.entries(DIM_LABELS)

const ShipmentIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M5 8H11M5 5.5H11M5 10.5H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

function AddItemButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 glass hover:bg-white/[0.07] transition-all duration-200 border-dashed border border-white/10 hover:border-white/20 w-full justify-center"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {label}
    </button>
  )
}

function RemoveRowButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-6 h-6 rounded-lg flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-400/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

export default function StepShipmentInfo({
  attachments, onUpdateAttachment, onAddAttachment, onRemoveAttachment,
  files, onUpdateFile, onAddFile, onRemoveFile,
  attachmentErrors, fileErrors,
}) {
  return (
    <div className="space-y-8">
      <StepHeader
        stepLabel="Крок 3 з 4"
        title="Вкладення та файли"
        accentBg="oklch(0.72 0.19 290 / 0.18)"
        accentColor="oklch(0.78 0.17 290)"
        icon={ShipmentIcon}
      />

      {/* Attachments */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white/70 flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold"
              style={{ background: 'oklch(0.72 0.19 290 / 0.25)', color: 'oklch(0.78 0.17 290)' }}
            >
              {attachments.length}
            </span>
            Вкладення
          </h3>
        </div>

        <div className="space-y-3">
          {attachments.map((att, i) => {
            const errs = attachmentErrors?.[i] ?? {}
            return (
              <div
                key={att.id}
                className="relative p-4 rounded-2xl glass transition-all duration-200 hover:bg-white/[0.06] group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-white/30">#{i + 1}</span>
                  <div className="flex-1 h-px" style={{ background: 'oklch(1 0 0 / 0.06)' }} />
                  <RemoveRowButton onClick={() => onRemoveAttachment(att.id)} disabled={attachments.length === 1} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {DIM_ENTRIES.map(([dim, dimLabel]) => (
                    <FormField
                      key={dim}
                      label={dimLabel}
                      type="number"
                      min="0"
                      unit="см"
                      compact
                      value={att[dim]}
                      onChange={v => onUpdateAttachment(att.id, dim, v)}
                      error={errs[dim]}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <AddItemButton onClick={onAddAttachment} label="Додати вкладення" />
      </section>

      {/* Files */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white/70 flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold"
              style={{ background: 'oklch(0.70 0.18 200 / 0.25)', color: 'oklch(0.75 0.17 200)' }}
            >
              {files.length}
            </span>
            Файли
          </h3>
        </div>

        <div className="space-y-3">
          {files.map((f, i) => {
            const errs = fileErrors?.[i] ?? {}
            return (
              <div key={f.id} className="p-4 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-white/30">#{i + 1}</span>
                  <div className="flex-1 h-px" style={{ background: 'oklch(1 0 0 / 0.06)' }} />
                  <RemoveRowButton onClick={() => onRemoveFile(f.id)} disabled={files.length === 1} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Назва"
                    value={f.name}
                    onChange={v => onUpdateFile(f.id, 'name', v)}
                    placeholder="Назва документа"
                    error={errs.name}
                    compact
                  />

                  {/* File upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Файл</label>
                    <label
                      className={`flex items-center gap-2 w-full rounded-xl px-4 py-2.5 text-sm cursor-pointer transition-all duration-200 input-dark hover:bg-white/[0.08] ${
                        errs.file ? 'input-dark-error' : ''
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-white/30">
                        <path d="M7 1V9M7 1L4.5 3.5M7 1L9.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 11V12C1 12.5523 1.44772 13 2 13H12C12.5523 13 13 12.5523 13 12V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                      <span className={`truncate ${f.file ? 'text-white/70' : 'text-white/30'}`}>
                        {f.file ? f.file.name : 'Оберіть файл...'}
                      </span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={e => {
                          onUpdateFile(f.id, 'file', e.target.files[0] ?? null)
                          e.target.value = ''
                        }}
                      />
                    </label>
                    {errs.file && (
                      <p className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'oklch(0.70 0.20 20)' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M6 4V6.5M6 8V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        {errs.file}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <AddItemButton onClick={onAddFile} label="Додати файл" />
      </section>
    </div>
  )
}
