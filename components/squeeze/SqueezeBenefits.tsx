interface Props {
  benefits: [string, string, string]
}

export default function SqueezeBenefits({ benefits }: Props) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ul className="space-y-4">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
