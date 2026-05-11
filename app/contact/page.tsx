import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Request a Free Demo',
  description:
    'Request a free ULTRASTAT anti-static gun demo through your local paint distributor. No cost, no commitment — in your own spray booth.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Free demo</p>
            <h1 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-4">
              Request your free demo
            </h1>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
              Fill in your details and we&apos;ll arrange a hands-on demonstration at your bodyshop through your preferred paint
              distributor. No cost. No commitment.
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
