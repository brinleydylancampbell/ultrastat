'use client'

import { useEffect, useRef } from 'react'

/*
  Replace placeholder tiles with real Instagram content.
  Simplest approach: paste 6 Instagram post URLs into the `posts` array
  below and use native Instagram embed iframes (no API key needed).
  For autoplay video in the hero, self-host the MP4 in /public/videos/.
*/
const posts = Array(6).fill(null)

export default function InstagramSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'))
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
    <section ref={ref} className="bg-[#1A1A2E] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 fade-up">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <p className="text-orange-400 font-semibold text-xs tracking-[0.18em] uppercase">@ultrastatgun</p>
            </div>
            <h2 className="text-white font-bold text-3xl lg:text-4xl tracking-tight">See it in action.</h2>
          </div>
          <a
            href="https://www.instagram.com/ultrastatgun/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 border border-white/25 hover:border-orange-400 text-white/60 hover:text-orange-400 font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 fade-up">
          {posts.map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/ultrastatgun/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Instagram"
              className={`aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-[#16213e] to-[#1a1a2e] group ${i >= 4 ? 'hidden md:block' : ''}`}
            >
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/30 group-hover:text-orange-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
