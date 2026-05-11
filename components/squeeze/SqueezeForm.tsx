'use client'

import { useEffect } from 'react'
import ContactForm from '@/components/ContactForm'

interface Props {
  heading: string
  squeezePage: string
}

export default function SqueezeForm({ heading, squeezePage }: Props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utm: Record<string, string> = {}
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
      const v = params.get(k)
      if (v) utm[k] = v
    })
    if (Object.keys(utm).length) sessionStorage.setItem('utm_params', JSON.stringify(utm))
  }, [])

  return (
    <section id="demo-form" className="bg-slate-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Free demo</p>
          <h2 className="text-slate-900 font-bold text-2xl lg:text-3xl tracking-tight">{heading}</h2>
        </div>
        <ContactForm squeezePage={squeezePage} />
      </div>
    </section>
  )
}
