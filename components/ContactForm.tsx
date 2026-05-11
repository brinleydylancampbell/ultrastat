'use client'

import { useState, useEffect } from 'react'
import { getSupabase } from '@/lib/supabase'

interface FormData {
  name: string
  company: string
  postcode: string
  email: string
  phone: string
  distributor: string
}

const empty: FormData = { name: '', company: '', postcode: '', email: '', phone: '', distributor: '' }

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const stored = sessionStorage.getItem('utm_params')
  const fromSession = stored ? JSON.parse(stored) : {}
  const fromUrl: Record<string, string> = {}
  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
    const v = params.get(k)
    if (v) fromUrl[k] = v
  })
  return { ...fromSession, ...fromUrl }
}

export default function ContactForm({ squeezePage }: { squeezePage?: string }) {
  const [form, setForm] = useState<FormData>(empty)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utm: Record<string, string> = {}
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
      const v = params.get(k)
      if (v) utm[k] = v
    })
    if (Object.keys(utm).length) sessionStorage.setItem('utm_params', JSON.stringify(utm))
  }, [])

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.postcode.trim()) e.postcode = 'Postcode is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    const payload = {
      ...form,
      ...getUtmParams(),
      squeeze_page: squeezePage ?? null,
      submitted_at: new Date().toISOString(),
    }

    try {
      const { error } = await getSupabase().from('demo_requests').insert(payload)
      if (error) throw error

      if (typeof window !== 'undefined') {
        const w = window as Window & { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void }
        w.gtag?.('event', 'demo_request_submitted')
        w.fbq?.('track', 'Lead')
      }

      setStatus('success')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  const field = (
    id: keyof FormData,
    label: string,
    type = 'text',
    placeholder = ''
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={form[id]}
        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
        placeholder={placeholder}
        className={`w-full border rounded-md px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 ${errors[id] ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        aria-invalid={!!errors[id]}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="text-red-600 text-xs mt-1" role="alert">
          {errors[id]}
        </p>
      )}
    </div>
  )

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10 text-center">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-slate-900 font-bold text-xl mb-2">Demo request received</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          We&apos;ll be in touch shortly to arrange your free demo through your preferred distributor. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field('name', 'Full name', 'text', 'Your name')}
        {field('company', 'Company name', 'text', 'Bodyshop or business name')}
        {field('postcode', 'Postcode', 'text', 'e.g. TN22 1AA')}
        {field('phone', 'Phone number', 'tel', '+44 …')}
        <div className="sm:col-span-2">
          {field('email', 'Email address', 'email', 'you@example.com')}
        </div>
        <div className="sm:col-span-2">
          {field('distributor', 'Preferred paint distributor', 'text', 'e.g. Standox, Glasurit, PPG…')}
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 text-red-600 text-sm" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full bg-orange-500 hover:bg-[#EA6C00] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-md transition-colors duration-200 shadow-cta focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        {status === 'submitting' ? 'Sending…' : 'Request my free demo'}
      </button>

      <p className="text-slate-400 text-xs text-center mt-4 leading-relaxed">
        By submitting this form you agree to us sharing your details with your nearest ULTRASTAT distributor to arrange your demo.{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-slate-600">Privacy Policy</a>
      </p>
    </form>
  )
}
