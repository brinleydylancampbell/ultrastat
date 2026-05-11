interface Props {
  quote: string
  name: string
  role: string
  location: string
}

export default function SqueezeTestimonial({ quote, name, role, location }: Props) {
  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <figure className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <blockquote className="text-slate-700 text-lg leading-relaxed mb-4">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-200 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-slate-900 text-sm font-semibold">{name}</p>
              <p className="text-slate-500 text-xs">
                {role} &middot; {location}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
