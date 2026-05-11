'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Slider {
  label: string
  min: number
  max: number
  default: number
  step: number
  format: (v: number) => string
}

const sliders: Slider[] = [
  { label: 'Cars painted per week', min: 1, max: 50, default: 10, step: 1, format: (v) => `${v} cars` },
  { label: 'Extra rework per car (dust / static)', min: 5, max: 120, default: 30, step: 5, format: (v) => `${v} min` },
  { label: 'Hourly charge-out rate', min: 20, max: 150, default: 60, step: 5, format: (v) => `£${v}/hr` },
]

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)

  useEffect(() => {
    const start = prev.current
    const end = value
    const diff = end - start
    if (diff === 0) return
    const duration = 400
    const startTime = performance.now()
    const raf = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(start + diff * eased))
      if (t < 1) requestAnimationFrame(raf)
      else prev.current = end
    }
    requestAnimationFrame(raf)
  }, [value])

  return <>{display.toLocaleString('en-GB')}</>
}

export default function ROICalculator() {
  const ref = useRef<HTMLElement>(null)
  const [cars, setCars] = useState(sliders[0].default)
  const [rework, setRework] = useState(sliders[1].default)
  const [rate, setRate] = useState(sliders[2].default)

  const hoursPerWeek = (cars * rework) / 60
  const savingsPerYear = Math.round(hoursPerWeek * rate * 52)

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

  const setters = [setCars, setRework, setRate]
  const values = [cars, rework, rate]

  return (
    <section ref={ref} className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 fade-up">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">The cost of static</p>
            <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-4">
              How much is static<br />costing your bodyshop?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
              Adjust the sliders to see your potential savings with ULTRASTAT.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 fade-up">
            <div className="space-y-8">
              {sliders.map(({ label, min, max, step, format }, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-slate-700 text-sm font-semibold">{label}</label>
                    <span className="text-orange-500 font-bold text-sm tabular-nums">{format(values[i])}</span>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={values[i]}
                    onChange={(e) => setters[i](Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-cta [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:border-0"
                    aria-label={label}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#1A1A2E] rounded-xl p-6">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">ULTRASTAT could save you</p>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-orange-400 text-5xl font-extrabold leading-none tabular-nums">
                  £<AnimatedNumber value={savingsPerYear} />
                </span>
                <span className="text-white/50 text-lg mb-0.5">per year</span>
              </div>
              <p className="text-white/40 text-sm">
                {hoursPerWeek.toFixed(1)} hours saved per week &mdash; at your current charge-out rate
              </p>
            </div>
          </div>

          <div className="text-center mt-8 fade-up">
            <p className="text-slate-600 text-sm mb-5">
              Ready to get that time back? Your local distributor can arrange a free demo.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 shadow-cta focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Request my free demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
