import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'
import { squeezePageQuery, squeezePageSlugsQuery } from '@/sanity/lib/queries'
import { squeezePages, getSqueezePageBySlug } from '@/lib/squeeze-pages'
import SqueezeNav from '@/components/squeeze/SqueezeNav'
import SqueezeHero from '@/components/squeeze/SqueezeHero'
import SqueezeVideo from '@/components/squeeze/SqueezeVideo'
import SqueezeBenefits from '@/components/squeeze/SqueezeBenefits'
import SqueezeTestimonial from '@/components/squeeze/SqueezeTestimonial'
import SqueezeForm from '@/components/squeeze/SqueezeForm'
import SqueezeLegal from '@/components/squeeze/SqueezeLegal'

interface SanityPage {
  slug: string
  headline: string
  subheadline: string
  videoSrc?: string
  benefits: string[]
  testimonial?: { quote: string; name: string; role: string; location: string }
  formHeading: string
  ctaLabel: string
  metaTitle: string
  metaDescription?: string
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<{ slug: string }[]>(squeezePageSlugsQuery)
  const sanitySet = new Set((sanitySlugs ?? []).map((s) => s.slug))
  const fallbackSlugs = squeezePages.filter((p) => !sanitySet.has(p.slug)).map((p) => ({ slug: p.slug }))
  return [...(sanitySlugs ?? []).map((s) => ({ slug: s.slug })), ...fallbackSlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await sanityFetch<SanityPage>(squeezePageQuery, { slug })
  const fallback = getSqueezePageBySlug(slug)
  const title = page?.metaTitle ?? fallback?.metaTitle
  const description = page?.metaDescription ?? fallback?.metaDescription
  if (!title) return {}
  return { title, description, robots: { index: false, follow: false } }
}

export default async function SqueezePage({ params }: Props) {
  const { slug } = await params
  const sanityPage = await sanityFetch<SanityPage>(squeezePageQuery, { slug })
  const fallback = getSqueezePageBySlug(slug)
  const page = sanityPage ?? (fallback ? { ...fallback, benefits: [...fallback.benefits] } : null)
  if (!page) notFound()

  const testimonial = page.testimonial ?? (fallback?.testimonial)

  return (
    <div className="min-h-screen flex flex-col">
      <SqueezeNav />
      <main className="flex-1">
        <SqueezeHero headline={page.headline} subheadline={page.subheadline} />
        {page.videoSrc && <SqueezeVideo videoSrc={page.videoSrc} />}
        <SqueezeBenefits benefits={page.benefits as [string, string, string]} />
        {testimonial && (
          <SqueezeTestimonial
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            location={testimonial.location}
          />
        )}
        <SqueezeForm heading={page.formHeading} squeezePage={slug} />
      </main>
      <SqueezeLegal />
    </div>
  )
}
