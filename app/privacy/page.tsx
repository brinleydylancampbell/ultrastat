import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ULTRASTAT privacy policy — how we collect and use your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-white py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-slate-900 font-bold text-3xl tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: May 2026</p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-8">
            <section>
              <h2 className="text-slate-900 font-semibold text-lg mb-3">Who we are</h2>
              <p className="text-slate-600">
                ULTRASTAT is a product of Lean Air Ltd. This website is operated by Lean Air Ltd. References to
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; refer to Lean Air Ltd.
              </p>
            </section>

            <section>
              <h2 className="text-slate-900 font-semibold text-lg mb-3">What data we collect</h2>
              <p className="text-slate-600 mb-3">When you submit a demo request, we collect:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Your name and company name</li>
                <li>Email address and phone number</li>
                <li>Postcode and preferred paint distributor</li>
                <li>UTM parameters from any advertising campaign that brought you to this site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-slate-900 font-semibold text-lg mb-3">How we use your data</h2>
              <p className="text-slate-600">
                Your details are used solely to arrange your requested product demonstration through your nearest ULTRASTAT
                distributor. We may share your name, contact details, and postcode with the relevant distributor in order to
                fulfil your demo request. We do not sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-slate-900 font-semibold text-lg mb-3">Cookies and analytics</h2>
              <p className="text-slate-600">
                With your consent, we use Google Analytics (GA4) and Meta Pixel to measure website performance and advertising
                effectiveness. These tools may set cookies on your device. You can withdraw consent at any time by clearing
                your browser&apos;s local storage.
              </p>
            </section>

            <section>
              <h2 className="text-slate-900 font-semibold text-lg mb-3">Your rights</h2>
              <p className="text-slate-600">
                Under UK GDPR, you have the right to access, correct, or delete the personal data we hold about you. To
                exercise these rights, please contact us at{' '}
                <a href="mailto:info@ultrastat.co.uk" className="text-orange-500 hover:text-orange-600 underline underline-offset-2">
                  info@ultrastat.co.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-slate-900 font-semibold text-lg mb-3">Data retention</h2>
              <p className="text-slate-600">
                We retain demo request data for up to 2 years, or until you request deletion, whichever is sooner.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
