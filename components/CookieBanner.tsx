'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    window.dispatchEvent(new Event('cookie_consent_accepted'))
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-60 bg-[#1A1A2E] border-t border-white/10 px-4 py-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-white/75 text-sm leading-relaxed max-w-2xl">
          We use cookies to measure ad performance and improve your experience.{' '}
          <Link href="/privacy" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="border border-white/25 text-white/70 hover:text-white hover:border-white/50 text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-orange-500 hover:bg-[#EA6C00] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200 shadow-cta focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
