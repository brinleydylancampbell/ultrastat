interface Props {
  headline: string
  subheadline: string
}

export default function SqueezeHero({ headline, subheadline }: Props) {
  return (
    <section className="bg-[#1A1A2E] py-16 lg:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
          {headline}
        </h1>
        <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg mx-auto">{subheadline}</p>
        <a
          href="#demo-form"
          className="inline-block bg-orange-500 hover:bg-[#EA6C00] text-white font-semibold text-base px-8 py-4 rounded-md transition-colors duration-200 shadow-cta-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Request my free demo
        </a>
        <p className="text-white/35 text-xs mt-4">Free. No commitment. Through your local distributor.</p>
      </div>
    </section>
  )
}
