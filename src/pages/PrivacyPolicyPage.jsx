const sections = [
  { id: 'introduction',       num: '01', title: 'Introduction' },
  { id: 'data-we-collect',    num: '02', title: 'Information We Collect' },
  { id: 'how-we-use',         num: '03', title: 'How We Use Your Information' },
  { id: 'sharing',            num: '04', title: 'Sharing of Information' },
  { id: 'cookies',            num: '05', title: 'Cookies & Tracking' },
  { id: 'data-retention',     num: '06', title: 'Data Retention' },
  { id: 'your-rights',        num: '07', title: 'Your Rights' },
  { id: 'security',           num: '08', title: 'Security' },
  { id: 'third-parties',      num: '09', title: 'Third-Party Services' },
  { id: 'children',           num: '10', title: "Children's Privacy" },
  { id: 'changes',            num: '11', title: 'Changes to This Policy' },
  { id: 'contact',            num: '12', title: 'Contact Us' },
]

function SectionHeading({ id, num, title }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-4 scroll-mt-8">
      <span className="text-xs font-mono text-white/20 select-none">{num}</span>
      <h2 className="text-base font-semibold text-white/90">{title}</h2>
    </div>
  )
}

function DataCard({ icon, label, items }) {
  return (
    <div className="glass-card rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</span>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/55">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function RightCard({ icon, title, description }) {
  return (
    <div className="glass rounded-xl p-4 flex gap-3">
      <span className="text-xl shrink-0">{icon}</span>
      <div>
        <p className="text-sm font-medium text-white/80 mb-0.5">{title}</p>
        <p className="text-xs text-white/40 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div className="relative min-h-screen">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Back button */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-sm text-white/35 hover:text-white/65 transition-colors mb-14 group"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </button>

        {/* Hero header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 glass text-xs font-medium text-white/50 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Legal · Privacy
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            <span className="text-white">Privacy </span>
            <span className="gradient-text">Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/30 mt-4">
            <span>Last updated: January 1, 2025</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Effective: January 1, 2025</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Version 1.0</span>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Table of contents — sticky sidebar */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-8 glass-card rounded-2xl p-4">
              <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3 px-1">Contents</p>
              <nav className="space-y-0.5">
                {sections.map(({ id, num, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-white/40 hover:text-white/75 hover:bg-white/[0.05] transition-all group"
                  >
                    <span className="font-mono text-[10px] text-white/20 group-hover:text-white/35 w-5 shrink-0">{num}</span>
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 space-y-10 text-sm leading-relaxed text-white/55">

            {/* 01 Introduction */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="introduction" num="01" title="Introduction" />
              <p className="mb-3">
                Welcome to <span className="text-white/80 font-medium">MyApp</span>. We are committed to protecting your personal data and your right to privacy. This Privacy Policy describes how we collect, use, store, and share your information when you interact with our platform, website, and services.
              </p>
              <p>
                By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you disagree with any part of this policy, please discontinue use of our services.
              </p>
            </section>

            {/* 02 Information We Collect */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="data-we-collect" num="02" title="Information We Collect" />
              <p className="mb-5">We collect information in several ways depending on how you interact with us:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <DataCard
                  icon="👤"
                  label="Identity Data"
                  items={['Full name', 'Email address', 'Phone number', 'Username or handle']}
                />
                <DataCard
                  icon="📦"
                  label="Shipment Data"
                  items={['Sender & recipient addresses', 'Package dimensions and weight', 'Delivery instructions', 'Tracking history']}
                />
                <DataCard
                  icon="📊"
                  label="Usage Data"
                  items={['Pages visited and time spent', 'Features and actions used', 'Search queries within the app', 'Error and crash reports']}
                />
                <DataCard
                  icon="💻"
                  label="Device & Technical Data"
                  items={['IP address and location', 'Browser type and version', 'Operating system', 'Cookies and session tokens']}
                />
              </div>
            </section>

            {/* 03 How We Use */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="how-we-use" num="03" title="How We Use Your Information" />
              <p className="mb-4">We use collected data for the following purposes:</p>
              <div className="space-y-2.5">
                {[
                  { icon: '⚡', title: 'Service delivery', desc: 'Operate, maintain, and improve the core features of our platform.' },
                  { icon: '📬', title: 'Communications', desc: 'Send transactional emails, support responses, and important service notices.' },
                  { icon: '🛡️', title: 'Fraud prevention', desc: 'Detect, investigate, and prevent fraudulent activity and abuse.' },
                  { icon: '📈', title: 'Analytics', desc: 'Analyse usage patterns to improve UX and prioritise new features.' },
                  { icon: '⚖️', title: 'Legal compliance', desc: 'Meet our obligations under applicable laws and regulations.' },
                  { icon: '🎯', title: 'Personalisation', desc: 'Remember your preferences and tailor the experience to your needs.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-3 py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-base shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <span className="font-medium text-white/75">{title}</span>
                      <span className="text-white/40"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 04 Sharing */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="sharing" num="04" title="Sharing of Information" />
              <p className="mb-3">
                We do <span className="text-white/80 font-semibold">not sell</span> your personal information to third parties. We may share data only in these limited circumstances:
              </p>
              <ul className="space-y-2.5 pl-1">
                {[
                  'With trusted service providers (hosting, analytics, payments) under strict data-processing agreements.',
                  'With logistics partners strictly to fulfil your shipment requests.',
                  'With law-enforcement or regulators when required by applicable law or a valid legal order.',
                  'In the event of a merger or acquisition — you will be notified before your data is transferred.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-400/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 05 Cookies */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="cookies" num="05" title="Cookies & Tracking" />
              <p className="mb-4">We use cookies and similar technologies to provide and improve our services. Here is what we use and why:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-white/30 border-b border-white/[0.07]">
                      <th className="text-left pb-2 pr-4 font-medium">Category</th>
                      <th className="text-left pb-2 pr-4 font-medium">Purpose</th>
                      <th className="text-left pb-2 font-medium">Can opt out?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {[
                      { cat: 'Essential', purpose: 'Authentication and session management', opt: 'No' },
                      { cat: 'Functional', purpose: 'Remembering preferences and settings', opt: 'Yes' },
                      { cat: 'Analytics', purpose: 'Understanding feature usage', opt: 'Yes' },
                      { cat: 'Marketing', purpose: 'Showing relevant promotions', opt: 'Yes' },
                    ].map(({ cat, purpose, opt }) => (
                      <tr key={cat}>
                        <td className="py-2.5 pr-4 text-white/70 font-medium">{cat}</td>
                        <td className="py-2.5 pr-4 text-white/45">{purpose}</td>
                        <td className={`py-2.5 font-medium ${opt === 'Yes' ? 'text-emerald-400/70' : 'text-white/30'}`}>{opt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-white/40 text-xs">
                You can control cookies through your browser settings. Disabling essential cookies may affect service functionality.
              </p>
            </section>

            {/* 06 Data Retention */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="data-retention" num="06" title="Data Retention" />
              <p className="mb-3">
                We retain personal data only for as long as necessary to provide our services and meet our legal obligations.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                {[
                  { period: '30 days', label: 'Session & log data' },
                  { period: '2 years', label: 'Account activity' },
                  { period: '7 years', label: 'Financial records (legal)' },
                ].map(({ period, label }) => (
                  <div key={label} className="glass rounded-xl p-4 text-center">
                    <p className="text-xl font-bold gradient-text mb-1">{period}</p>
                    <p className="text-xs text-white/40">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                When data is no longer required, we securely delete or anonymise it so that it can no longer be linked to you.
              </p>
            </section>

            {/* 07 Your Rights */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="your-rights" num="07" title="Your Rights" />
              <p className="mb-4">
                Depending on your location (EEA, UK, California, and other jurisdictions), you may exercise the following rights:
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                <RightCard icon="👁️" title="Access" description="Request a copy of the personal data we hold about you." />
                <RightCard icon="✏️" title="Rectification" description="Ask us to correct inaccurate or incomplete data." />
                <RightCard icon="🗑️" title="Erasure" description='Request deletion of your data (the "right to be forgotten").' />
                <RightCard icon="⛔" title="Restriction" description="Ask us to limit how we process your data in certain cases." />
                <RightCard icon="📤" title="Portability" description="Receive your data in a structured, machine-readable format." />
                <RightCard icon="🚫" title="Object" description="Object to processing based on legitimate interests or marketing." />
              </div>
              <p className="mt-4 text-white/40 text-xs">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:privacy@myapp.com" className="text-white/60 underline underline-offset-2 hover:text-white/80 transition-colors">
                  privacy@myapp.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            {/* 08 Security */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="security" num="08" title="Security" />
              <p className="mb-4">
                We apply industry-standard technical and organisational measures to protect your information:
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  { icon: '🔐', label: 'AES-256 encryption at rest' },
                  { icon: '🔒', label: 'TLS 1.3 encryption in transit' },
                  { icon: '🛡️', label: 'Regular third-party security audits' },
                  { icon: '👮', label: 'Role-based access controls' },
                  { icon: '📋', label: 'SOC 2 Type II compliance' },
                  { icon: '🔔', label: '72-hour breach notification' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 glass rounded-lg px-3 py-2.5">
                    <span>{icon}</span>
                    <span className="text-xs text-white/60">{label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-white/40 text-xs">
                No method of internet transmission is 100% secure. We cannot guarantee absolute security, but we continuously improve our safeguards.
              </p>
            </section>

            {/* 09 Third-Party Services */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="third-parties" num="09" title="Third-Party Services" />
              <p className="mb-3">
                Our platform integrates with third-party services to provide core functionality. Each has its own privacy policy governing how it handles your data:
              </p>
              <ul className="space-y-2">
                {[
                  { name: 'Stripe', role: 'Payment processing' },
                  { name: 'Google Analytics', role: 'Usage analytics' },
                  { name: 'Intercom', role: 'Customer support chat' },
                  { name: 'AWS', role: 'Cloud infrastructure & storage' },
                  { name: 'SendGrid', role: 'Transactional email delivery' },
                ].map(({ name, role }) => (
                  <li key={name} className="flex items-center justify-between py-1.5 border-b border-white/[0.05] last:border-0">
                    <span className="font-medium text-white/70">{name}</span>
                    <span className="text-xs text-white/35">{role}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 10 Children */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="children" num="10" title="Children's Privacy" />
              <p>
                Our services are not directed to children under the age of <span className="text-white/80 font-medium">13</span> (or 16 in the EEA). We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us immediately and we will delete it promptly.
              </p>
            </section>

            {/* 11 Changes */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="changes" num="11" title="Changes to This Policy" />
              <p className="mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will:
              </p>
              <ul className="space-y-1.5 pl-1">
                {[
                  'Post the updated policy on this page with a new "Last updated" date.',
                  'Send an email notification to registered users at least 14 days before changes take effect.',
                  'Display an in-app banner for 30 days after the update.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-400/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                Continued use of our services after the effective date constitutes your acceptance of the revised policy.
              </p>
            </section>

            {/* 12 Contact */}
            <section className="glass-card rounded-2xl p-6">
              <SectionHeading id="contact" num="12" title="Contact Us" />
              <p className="mb-5">
                For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out through any of the following channels:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: '📧', label: 'Email', value: 'privacy@myapp.com', href: 'mailto:privacy@myapp.com' },
                  { icon: '🏢', label: 'Mailing address', value: '123 Main St, San Francisco, CA 94105', href: null },
                  { icon: '⏱️', label: 'Response time', value: 'Within 30 business days', href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>{icon}</span>
                      <span className="text-xs font-semibold text-white/30 uppercase tracking-wider">{label}</span>
                    </div>
                    {href ? (
                      <a href={href} className="text-sm text-white/70 underline underline-offset-2 hover:text-white/90 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/60">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}
