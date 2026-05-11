import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/client'
import { articleQuery, articleSlugsQuery } from '@/sanity/lib/queries'

interface Article {
  title: string
  slug: string
  summary: string
  category: string
  publishedAt: string
  content: unknown[]
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(articleSlugsQuery)
  return (slugs ?? []).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await sanityFetch<Article>(articleQuery, { slug })
  if (!article) return {}
  return { title: article.title, description: article.summary }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await sanityFetch<Article>(articleQuery, { slug })
  if (!article) notFound()

  return (
    <>
      <Nav />
      <main className="bg-white py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-2">
            <Link href="/knowledge-base" className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-200">
              ← Knowledge Base
            </Link>
          </div>
          <span className="text-orange-500 font-semibold text-xs tracking-wider uppercase">{article.category}</span>
          <h1 className="text-slate-900 font-bold text-3xl lg:text-4xl tracking-tight mt-2 mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-slate-500 text-sm mb-10">
            {new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          {article.content ? (
            <div className="prose prose-slate max-w-none text-base leading-relaxed">
              {/* Portable text renderer — install @portabletext/react when needed */}
              <p className="text-slate-600">{article.summary}</p>
            </div>
          ) : (
            <p className="text-slate-600 text-base leading-relaxed">{article.summary}</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
