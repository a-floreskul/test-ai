import FormField from './FormField'
import StepHeader from './StepHeader'

const SenderIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const RecipientIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M11 12L12.5 13.5L15 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)


const VARIANTS = {
  sender: {
    stepLabel: 'Крок 1 з 4',
    title: 'Дані відправника',
    addressLabel: 'Адреса відправлення',
    accentBg: 'oklch(0.55 0.24 264 / 0.18)',
    accentColor: 'oklch(0.75 0.18 264)',
    icon: SenderIcon,
  },
  recipient: {
    stepLabel: 'Крок 2 з 4',
    title: 'Дані отримувача',
    addressLabel: 'Адреса доставки',
    accentBg: 'oklch(0.65 0.21 200 / 0.18)',
    accentColor: 'oklch(0.75 0.18 200)',
    icon: RecipientIcon,
  },
}

export default function StepPersonInfo({ role, data, onChange, errors }) {
  const { stepLabel, title, addressLabel, accentBg, accentColor, icon } = VARIANTS[role]
  return (
    <div className="space-y-5">
      <StepHeader stepLabel={stepLabel} title={title} accentBg={accentBg} accentColor={accentColor} icon={icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="ПІБ" value={data.fullName} onChange={v => onChange('fullName', v)} placeholder="Іваненко Іван Іванович" error={errors?.fullName} />
        <FormField label="Email" type="email" value={data.email} onChange={v => onChange('email', v)} placeholder="email@example.com" error={errors?.email} />
        <FormField label="Номер телефону" type="tel" value={data.phone} onChange={v => onChange('phone', v)} placeholder="+380 XX XXX XXXX" error={errors?.phone} />
        <FormField label={addressLabel} value={data.address} onChange={v => onChange('address', v)} placeholder="вул. Хрещатик, 1, Київ" error={errors?.address} />
      </div>
    </div>
  )
}
