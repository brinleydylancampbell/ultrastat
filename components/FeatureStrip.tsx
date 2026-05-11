'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    num: '01',
    title: 'Powerful',
    body: 'High-output ionization neutralises static instantly on every surface — metal, plastic, fibre, and glass. Consistent results from the first pass, every panel.',
    tag: 'All surfaces',
  },
  {
    num: '02',
    title: 'Cordless',
    body: 'Up to 10 hours on a single charge. No cables restricting movement, no power outlets to hunt for — full freedom anywhere in the booth.',
    tag: '10h battery',
  },
  {
    num: '03',
    title: 'Lightweight',
    body: 'Ergonomic form factor designed for extended daily use. Less fatigue through long painting sessions, without any compromise on output or range.',
    tag: 'All-day use',
  },
  {
    num: '04',
    title: 'Affordable',
    body: 'Professional-grade technology priced for every painter, not just large operations. Fewer reworks and less wasted paint means it pays for itself fast.',
    tag: 'Free demo',
  },
]

export default function FeatureStrip() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
        <div className="mb-14 fade-up">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Why ULTRASTAT</p>
          <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight">Built for the bodyshop.</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {features.map(({ num, title, body, tag }) => (
            <div
              key={num}
              className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_10rem] items-start gap-x-6 py-8 group fade-up"
            >
              <span
                className="text-5xl font-extrabold text-slate-100 leading-none select-none group-hover:text-orange-100 transition-colors duration-300"
                aria-hidden="true"
              >
                {num}
              </span>
              <div>
                <h3 className="text-slate-900 font-bold text-xl mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-lg">{body}</p>
              </div>
              <div className="hidden md:flex items-center justify-end pt-1">
                <span className="text-orange-500 font-semibold text-sm">{tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
