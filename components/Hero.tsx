'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
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
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(13,15,18,0.68) 0%, rgba(26,26,46,0.58) 55%, rgba(13,15,18,0.72) 100%), url('https://static.wixstatic.com/media/03950d_79b73c0b15b9458a968790d534f55667f000.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <p className="fade-up text-orange-400 font-semibold text-xs tracking-[0.2em] uppercase mb-6">
            Cordless &nbsp;·&nbsp; Lightweight &nbsp;·&nbsp; ATEX Certified
          </p>

          <h1 className="fade-up text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
            Flawless finishes,<br />
            <span className="text-orange-400">every time.</span>
          </h1>

          <p className="fade-up text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            The ULTRASTAT anti-static gun neutralises static on any surface instantly — cordless, powerful, and ATEX
            certified for safe use in every spray booth.
          </p>

          <div className="fade-up flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold text-base px-8 py-4 rounded-md transition-colors duration-200 shadow-cta-lg text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Request my free demo
            </Link>
            <a
              href="https://www.instagram.com/ultrastatgun/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-md transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              See it in action
            </a>
          </div>

          <p className="fade-up text-white/45 text-sm mt-8 flex items-center gap-2">
            <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                clipRule="evenodd"
              />
            </svg>
            ATEX Certified: approved for safe use in spray booths
          </p>
        </div>
      </div>
    </section>
  )
}
