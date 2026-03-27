import { useState } from 'react'
import StepIndicator from '../components/shipment/StepIndicator'
import StepPersonInfo from '../components/shipment/StepPersonInfo'
import StepShipmentInfo from '../components/shipment/StepShipmentInfo'
import StepSummary from '../components/shipment/StepSummary'

const emptyPerson = () => ({ fullName: '', email: '', phone: '', address: '' })
const emptyAttachment = () => ({ id: crypto.randomUUID(), height: '', width: '', length: '' })
const emptyFile = () => ({ id: crypto.randomUUID(), name: '', file: null })

const STEP_TITLES = {
  1: 'Інформація про відправника',
  2: 'Інформація про отримувача',
  3: 'Вкладення та файли',
  4: 'Огляд відправлення',
}

export default function CreateShipmentPage({ onNavigate }) {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    sender: emptyPerson(),
    recipient: emptyPerson(),
    attachments: [emptyAttachment()],
    files: [emptyFile()],
  })

  const updateSender = (field, value) =>
    setFormData(prev => ({ ...prev, sender: { ...prev.sender, [field]: value } }))

  const updateRecipient = (field, value) =>
    setFormData(prev => ({ ...prev, recipient: { ...prev.recipient, [field]: value } }))

  const addAttachment = () =>
    setFormData(prev => ({ ...prev, attachments: [...prev.attachments, emptyAttachment()] }))

  const removeAttachment = (id) =>
    setFormData(prev => ({ ...prev, attachments: prev.attachments.filter(a => a.id !== id) }))

  const updateAttachment = (id, field, value) =>
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.map(a => a.id === id ? { ...a, [field]: value } : a),
    }))

  const addFile = () =>
    setFormData(prev => ({ ...prev, files: [...prev.files, emptyFile()] }))

  const removeFile = (id) =>
    setFormData(prev => ({ ...prev, files: prev.files.filter(f => f.id !== id) }))

  const updateFile = (id, field, value) =>
    setFormData(prev => ({
      ...prev,
      files: prev.files.map(f => f.id === id ? { ...f, [field]: value } : f),
    }))

  const validateStep = (stepNum) => {
    const errs = {}
    const person = stepNum === 1 ? formData.sender : formData.recipient
    if (stepNum === 1 || stepNum === 2) {
      if (!person.fullName.trim()) errs.fullName = "Обов'язкове поле"
      if (!person.email.trim()) {
        errs.email = "Обов'язкове поле"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email)) {
        errs.email = 'Невірний формат email'
      }
      if (!person.phone.trim()) {
        errs.phone = "Обов'язкове поле"
      } else if (!/^\+?[\d\s\-()]{7,15}$/.test(person.phone.trim())) {
        errs.phone = 'Невірний формат номера телефону'
      }
      if (!person.address.trim()) errs.address = "Обов'язкове поле"
    }
    if (stepNum === 3) {
      const attachmentErrors = formData.attachments.map(att => {
        const e = {}
        if (!att.height) e.height = "Обов'язкове"
        if (!att.width) e.width = "Обов'язкове"
        if (!att.length) e.length = "Обов'язкове"
        return e
      })
      if (attachmentErrors.some(e => Object.keys(e).length > 0)) {
        errs.attachments = attachmentErrors
      }
      const fileErrors = formData.files.map(f => {
        const e = {}
        if (!f.name.trim()) e.name = "Обов'язкове"
        if (!f.file) e.file = "Обов'язкове"
        return e
      })
      if (fileErrors.some(e => Object.keys(e).length > 0)) {
        errs.files = fileErrors
      }
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) setStep(s => s + 1)
  }

  const handleBack = () => {
    setErrors({})
    setStep(s => s - 1)
  }

  const handleSubmit = () => {
    const payload = {
      sender: formData.sender,
      recipient: formData.recipient,
      attachments: formData.attachments,
      files: formData.files.map(f => ({
        name: f.name,
        fileName: f.file?.name ?? null,
        fileSize: f.file?.size ?? null,
        fileType: f.file?.type ?? null,
      })),
    }
    console.log('Shipment payload:', payload)
  }

  const stepContent = {
    1: <StepPersonInfo role="sender" data={formData.sender} onChange={updateSender} errors={errors} />,
    2: <StepPersonInfo role="recipient" data={formData.recipient} onChange={updateRecipient} errors={errors} />,
    3: (
      <StepShipmentInfo
        attachments={formData.attachments}
        onUpdateAttachment={updateAttachment}
        onAddAttachment={addAttachment}
        onRemoveAttachment={removeAttachment}
        files={formData.files}
        onUpdateFile={updateFile}
        onAddFile={addFile}
        onRemoveFile={removeFile}
        attachmentErrors={errors.attachments}
        fileErrors={errors.files}
      />
    ),
    4: <StepSummary formData={formData} />,
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Back button + page title */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/70 mb-6 transition-colors duration-200 group"
          >
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Повернутись
          </button>

          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, oklch(0.55 0.24 264 / 0.3) 0%, oklch(0.50 0.26 280 / 0.3) 100%)',
                border: '1px solid oklch(0.55 0.24 264 / 0.3)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: 'oklch(0.75 0.20 264)' }}>
                <path d="M9 1L17 5V13L9 17L1 13V5L9 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M9 1V17M1 5L17 13M17 5L1 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-white/30 uppercase tracking-wider">Нове відправлення</p>
              <h1 className="text-xl font-bold text-white/90 leading-tight">{STEP_TITLES[step]}</h1>
            </div>
          </div>
        </div>

        {/* Step indicator */}
        <StepIndicator currentStep={step} />

        {/* Form card */}
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: 'oklch(1 0 0 / 0.04)',
            border: '1px solid oklch(1 0 0 / 0.08)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {stepContent[step]}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-5 gap-3">
          <button
            onClick={step === 1 ? () => onNavigate('home') : handleBack}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white/50 hover:text-white/80 rounded-xl glass hover:bg-white/[0.07] transition-all duration-200 border border-white/[0.07] hover:border-white/[0.12]"
          >
            {step === 1 ? (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Скасувати
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Назад
              </>
            )}
          </button>

          {/* Step dots */}
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map(s => (
              <div
                key={s}
                className="rounded-full transition-all duration-300"
                style={{
                  width: s === step ? '20px' : '6px',
                  height: '6px',
                  background: s === step
                    ? 'oklch(0.65 0.21 264)'
                    : s < step
                    ? 'oklch(0.55 0.24 264 / 0.5)'
                    : 'oklch(1 0 0 / 0.12)',
                }}
              />
            ))}
          </div>

          {step < 4 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] glow-sm hover:glow-brand"
              style={{ background: 'linear-gradient(135deg, oklch(0.55 0.24 264) 0%, oklch(0.50 0.26 280) 100%)' }}
            >
              Далі
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, oklch(0.50 0.22 160) 0%, oklch(0.55 0.20 180) 100%)',
                boxShadow: '0 0 24px oklch(0.50 0.22 160 / 0.4)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Відправити
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
