'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/distributors', label: 'Distributors' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/knowledge-base', label: 'Knowledge Base' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#1A1A2E] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_12px_rgba(0,0,0,0.30)]' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-white font-extrabold text-xl tracking-tight hover:text-orange-400 transition-colors duration-200"
            aria-label="ULTRASTAT home"
          >
            ULTRASTAT
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-white font-semibold border-b-2 border-orange-500 pb-0.5'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-200 shadow-cta focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#1A1A2E]"
            >
              Request free demo
            </Link>
          </div>

          <button
            id="menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-white/10 bg-[#1A1A2E] overflow-hidden transition-all duration-250 ease-out ${menuOpen ? 'max-h-[480px]' : 'max-h-0'}`}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium px-3 py-2.5 rounded-md transition-colors duration-200 ${
                  active ? 'text-white font-semibold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold text-sm px-5 py-3 rounded-md text-center transition-colors duration-200 shadow-cta"
          >
            Request free demo
          </Link>
        </div>
      </div>
    </nav>
  )
}
