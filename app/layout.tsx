import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import AnalyticsScripts from '@/components/AnalyticsScripts'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ULTRASTAT — Anti-Static Gun for Bodyshops | ATEX Certified',
    template: '%s | ULTRASTAT',
  },
  description:
    'The ULTRASTAT anti-static gun eliminates static for flawless paint finishes. Cordless, ATEX certified, available through UK paint distributors. Request a free demo.',
  openGraph: {
    type: 'website',
    siteName: 'ULTRASTAT',
    locale: 'en_GB',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
        <CookieBanner />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
