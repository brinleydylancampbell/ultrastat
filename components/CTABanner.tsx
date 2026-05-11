'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function CTABanner() {
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
    <section ref={ref} className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="fade-up text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
          Available through your paint distributor
        </p>
        <h2 className="fade-up text-slate-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          Try it in your<br />bodyshop for free.
        </h2>
        <p className="fade-up text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Request a demo through your local distributor. No cost, no commitment — see the results on your own surfaces.
        </p>
        <Link
          href="/contact"
          className="fade-up inline-block bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold text-base px-10 py-4 rounded-md transition-colors duration-200 shadow-cta-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Request my free demo
        </Link>
      </div>
    </section>
  )
}
