import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Download the ULTRASTAT technical data sheet and product resources.',
}

const downloads = [
  {
    title: 'Technical Data Sheet (TDS)',
    description: 'Full product specifications, safety data, and ATEX certification details.',
    href: 'https://www.ultrastat.co.uk/_files/ugd/03950d_24312b1a2b1c4ad79dc0d63782c1b6e3.pdf',
    label: 'Download PDF',
    badge: 'PDF',
  },
]

export default function DownloadsPage() {
  return (
    <>
      <Nav />
      <main className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Resources</p>
            <h1 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight">Downloads</h1>
          </div>

          <div className="space-y-4 max-w-2xl">
            {downloads.map(({ title, description, href, badge }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <span className="bg-orange-50 text-orange-500 text-xs font-bold px-2 py-1 rounded flex-shrink-0 mt-0.5">
                    {badge}
                  </span>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm group-hover:text-orange-600 transition-colors duration-200">
                      {title}
                    </p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{description}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors duration-200 flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
