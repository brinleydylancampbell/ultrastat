'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: 'The difference in finish quality was immediate. We now use it on every single panel before painting.',
    name: 'Vehicle Refinishing Professional',
    location: 'UK Bodyshop',
  },
  {
    quote: 'Paid for itself within the first week. Fewer reworks, cleaner panels, less wasted paint.',
    name: 'Bodyshop Owner',
    location: 'UK Bodyshop',
  },
]

export default function TrustSection() {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="fade-up">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Why professionals use it</p>
            <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-6 leading-tight">
              Essential for<br />every bodyshop.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Static electricity pulls dust and contamination onto surfaces during preparation and painting. The ULTRASTAT
              eliminates it before it becomes a problem — cleaner panels, fewer reworks, better results.
            </p>

            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
              <svg className="w-9 h-9 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div>
                <p className="text-slate-900 font-semibold text-sm mb-1">ATEX II 2G Certified</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Independently certified for explosive atmospheres. The only cordless anti-static gun approved for every spray booth environment.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {testimonials.map(({ quote, name, location }, i) => (
              <figure key={i} className="fade-up bg-slate-50 rounded-xl p-6 border border-slate-100">
                <blockquote className="text-slate-700 text-base leading-relaxed mb-4">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-slate-900 text-sm font-semibold">{name}</p>
                    <p className="text-slate-500 text-xs">{location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
