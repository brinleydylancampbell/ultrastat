import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Knowledge Base',
  description: 'Guides, FAQs, and how-to articles for bodyshop painters — eliminating static, improving paint finishes, and getting the most from ULTRASTAT.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes static build-up in a spray booth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Static builds up through friction — when panels are sanded, wiped, or moved through the air. In a spray booth, this attracts airborne dust and contamination directly to the surface you\'re about to paint.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the ULTRASTAT gun work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ULTRASTAT uses high-output ionization to neutralise the static charge on any surface. Pointed at the panel before painting, it eliminates the charge that attracts dust — leaving a clean, contamination-free surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ULTRASTAT safe to use in a spray booth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ULTRASTAT is ATEX II 2G certified — independently approved for use in explosive atmospheres, including spray booths. It is also CE, UKCA, FCC, and Canada certified.',
      },
    },
  ],
}

const articles = [
  {
    slug: 'what-causes-static-in-spray-booth',
    title: 'What causes static build-up in a spray booth?',
    summary: 'Static builds up through friction during preparation. Here\'s exactly what causes it and why it ruins paint finishes.',
    category: 'Paint defects',
  },
  {
    slug: 'how-ultrastat-works',
    title: 'How does the ULTRASTAT anti-static gun work?',
    summary: 'A plain-English explanation of ionization and why it eliminates static instantly on any surface.',
    category: 'Product guide',
  },
  {
    slug: 'reducing-dust-nibs',
    title: 'How to reduce dust nibs in your spray booth',
    summary: 'Dust nibs in paint are almost always caused by contamination at the panel level. Here\'s how to tackle it systematically.',
    category: 'Paint defects',
  },
  {
    slug: 'atex-certification-explained',
    title: 'What does ATEX certified mean for spray booth equipment?',
    summary: 'ATEX certification explained — why it matters for safety and what it means for equipment approval in a spray booth.',
    category: 'Safety',
  },
]

export default function KnowledgeBasePage() {
  return (
    <>
      <SchemaScript data={faqSchema} />
      <Nav />
      <main className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.18em] uppercase mb-3">Resources</p>
            <h1 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mb-4">Knowledge Base</h1>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              Practical guides for bodyshop painters — eliminating static, improving paint finishes, and getting cleaner results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
            {articles.map(({ slug, title, summary, category }) => (
              <Link
                key={slug}
                href={`/knowledge-base/${slug}`}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-orange-500 font-semibold text-xs tracking-wider uppercase">{category}</span>
                <h2 className="text-slate-900 font-semibold text-base mt-2 mb-2 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
                  {title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">{summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
