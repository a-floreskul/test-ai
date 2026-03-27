export default function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10 group"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Home
      </button>

      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-white/30 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-10 text-white/60 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">1. Introduction</h2>
          <p>
            Welcome to MyApp. We respect your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><span className="text-white/80">Personal identifiers</span> — name, email address, phone number</li>
            <li><span className="text-white/80">Usage data</span> — pages visited, time spent, actions taken</li>
            <li><span className="text-white/80">Device information</span> — browser type, OS, IP address</li>
            <li><span className="text-white/80">Shipment data</span> — addresses, package details you provide</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">3. How We Use Your Information</h2>
          <p className="mb-3">Your information is used to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Provide, operate, and maintain our services</li>
            <li>Process transactions and send related information</li>
            <li>Improve and personalize user experience</li>
            <li>Communicate with you about updates, support, and promotions</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">4. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share data with trusted third-party service
            providers who assist us in operating our platform, subject to confidentiality agreements.
            We may also disclose information when required by law or to protect our rights.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience. You can instruct
            your browser to refuse all cookies or to indicate when a cookie is being sent. Some features
            of our service may not function properly without cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">6. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary to fulfill the purposes outlined in this
            policy, or as required by law. When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">7. Your Rights</h2>
          <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">8. Security</h2>
          <p>
            We implement industry-standard security measures to protect your information. However, no
            method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes
            by posting the new policy on this page with an updated date. Continued use of our service
            after changes constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white/90 mb-3">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a
              href="mailto:privacy@myapp.com"
              className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
            >
              privacy@myapp.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
