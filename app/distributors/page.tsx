import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import DistributorMapClient from '@/components/DistributorMapClient'
import { distributors, seekingDistributors } from '@/lib/distributors'

export const metadata: Metadata = {
  title: 'Become a Distributor',
  description:
    'Join the ULTRASTAT distributor network. We\'re looking for partners across the UK and internationally. Proven demo-led sales model, marketing support included.',
}

const pitch = [
  {
    title: 'Proven UK traction',
    body: 'Already selling through major UK paint distributors. A track record you can build on.',
  },
  {
    title: 'Demo-led sales model',
    body: 'The product sells itself in a hands-on demonstration. High conversion, low pressure.',
  },
  {
    title: 'Marketing support',
    body: 'We provide campaign assets, product training, and ongoing UK HQ support for all distributor partners.',
  },
  {
    title: 'Global opportunity',
    body: 'We are actively seeking importers and distributors across Europe, North America, Australasia, and beyond.',
  },
]

export default function DistributorsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#1A1A2E] py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-orange-400 font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                International growth
              </p>
              <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
                Become an<br />
                <span className="text-orange-400">ULTRASTAT distributor.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed">
                We&apos;re building a global network of trusted distributors and importers. If you supply bodyshop products and
                want to add a high-performing, certified anti-static solution to your range, we&apos;d like to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Why partner with us</p>
              <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight">Built for distribution.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pitch.map(({ title, body }) => (
                <div key={title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-slate-900 font-semibold text-base mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Our network</p>
              <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-4">Current coverage</h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                Click a pin to see distributor details. White space on the map is opportunity — we&apos;re actively seeking
                partners in the regions below.
              </p>
            </div>

            <DistributorMapClient distributors={distributors} />

            <div className="mt-12">
              <h3 className="text-slate-900 font-semibold text-base mb-4">Seeking distributors in:</h3>
              <div className="flex flex-wrap gap-2">
                {seekingDistributors.map((country) => (
                  <span
                    key={country}
                    className="border border-orange-200 bg-orange-50 text-orange-700 text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Get in touch</p>
              <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-4">Distributor enquiry</h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
                Tell us about yourself and your market. We&apos;ll get back to you within 2 working days.
              </p>
            </div>
            <ContactForm squeezePage="distributor-enquiry" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
