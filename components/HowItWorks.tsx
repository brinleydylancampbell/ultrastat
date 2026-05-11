'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const steps = [
  {
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Comes to you',
    body: 'Arranged through your existing paint distributor — the rep you already deal with. No travel, no showroom visit.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01-2.12 2.247 24.323 24.323 0 01-7.36 0 2.25 2.25 0 01-2.12-2.247m0 0a2.25 2.25 0 012.12-2.247 24.3 24.3 0 017.36 0 2.25 2.25 0 012.12 2.247" />
      </svg>
    ),
    title: 'In your booth, on your panels',
    body: 'A real hands-on demonstration on your actual surfaces — not a scripted sales pitch. You see exactly what it does before you decide anything.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'No obligation to buy',
    body: "The demo is completely free and without commitment. If it doesn't convince you, walk away. We're confident it will.",
  },
]

export default function HowItWorks() {
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
    <section ref={ref} className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Try before you buy</p>
            <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-6 leading-tight">
              One request.<br />We&apos;ll sort the rest.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Tell us your preferred paint distributor and where you&apos;re based. We&apos;ll coordinate with your rep to arrange a
              hands-on demonstration at your booth, at a time that works for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold text-base px-8 py-4 rounded-md transition-colors duration-200 shadow-cta focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Request my free demo
            </Link>
          </div>

          <div className="divide-y divide-slate-200">
            {steps.map(({ icon, title, body }, i) => (
              <div key={i} className="flex items-start gap-5 py-6 fade-up">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mt-0.5">
                  {icon}
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold text-base mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
