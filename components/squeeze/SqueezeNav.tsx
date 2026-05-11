import Link from 'next/link'

export default function SqueezeNav() {
  return (
    <nav className="bg-[#1A1A2E] h-14 flex items-center px-4 sm:px-6">
      <Link
        href="/"
        className="text-white font-extrabold text-lg tracking-tight hover:text-orange-400 transition-colors duration-200"
        aria-label="ULTRASTAT home"
      >
        ULTRASTAT
      </Link>
    </nav>
  )
}
