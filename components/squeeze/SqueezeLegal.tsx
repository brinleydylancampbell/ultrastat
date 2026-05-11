import Link from 'next/link'

export default function SqueezeLegal() {
  return (
    <footer className="bg-[#1A1A2E] py-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-4 flex-wrap justify-center">
          {['ATEX II 2G', 'CE', 'UKCA', 'FCC'].map((cert) => (
            <span key={cert} className="border border-white/20 text-white/40 text-xs font-semibold px-2.5 py-1 rounded-full">
              {cert}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-white/30 text-xs">
          <Link href="/privacy" className="hover:text-white/60 transition-colors duration-200">
            Privacy Policy
          </Link>
          <span>&copy; {new Date().getFullYear()} ULTRASTAT</span>
        </div>
      </div>
    </footer>
  )
}
