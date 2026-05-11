'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const specs = [
  { label: 'Battery life', value: 'Up to 10 hours' },
  { label: 'Surfaces covered', value: 'Metal, plastic, fibre, glass' },
  { label: 'Power source', value: 'Rechargeable battery' },
  { label: 'Certification', value: 'ATEX II 2G' },
]

export default function CredentialsPanel() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#1A1A2E] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-7 h-7 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-white font-bold text-base">ATEX II 2G Certified</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Independently certified for use in explosive atmospheres. Safe in every spray booth, every time — no exceptions.
            </p>
            <div className="flex gap-3 mt-5 flex-wrap">
              {['CE', 'UKCA', 'FCC', 'Canada'].map((cert) => (
                <span key={cert} className="border border-white/20 text-white/50 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up">
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">Key specifications</p>
            <dl className="divide-y divide-white/10">
              {specs.map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2.5 text-sm">
                  <dt className="text-white/55">{label}</dt>
                  <dd className="text-white font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="fade-up">
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">Where to get it</p>
            <p className="text-white font-semibold text-base mb-2">Available through all major UK paint distributors.</p>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Request a free demo through your preferred distributor — no purchase required. We&apos;ll arrange everything.
            </p>
            <Link href="/contact" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors duration-200">
              Request your demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
