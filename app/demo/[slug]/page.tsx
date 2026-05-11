import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSqueezePageBySlug, squeezePages } from '@/lib/squeeze-pages'
import SqueezeNav from '@/components/squeeze/SqueezeNav'
import SqueezeHero from '@/components/squeeze/SqueezeHero'
import SqueezeVideo from '@/components/squeeze/SqueezeVideo'
import SqueezeBenefits from '@/components/squeeze/SqueezeBenefits'
import SqueezeTestimonial from '@/components/squeeze/SqueezeTestimonial'
import SqueezeForm from '@/components/squeeze/SqueezeForm'
import SqueezeLegal from '@/components/squeeze/SqueezeLegal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return squeezePages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getSqueezePageBySlug(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    robots: { index: false, follow: false },
  }
}

export default async function SqueezePage({ params }: Props) {
  const { slug } = await params
  const page = getSqueezePageBySlug(slug)
  if (!page) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <SqueezeNav />
      <main className="flex-1">
        <SqueezeHero headline={page.headline} subheadline={page.subheadline} />
        <SqueezeVideo videoSrc={page.videoSrc} />
        <SqueezeBenefits benefits={page.benefits} />
        <SqueezeTestimonial
          quote={page.testimonial.quote}
          name={page.testimonial.name}
          role={page.testimonial.role}
          location={page.testimonial.location}
        />
        <SqueezeForm heading={page.formHeading} squeezePage={page.slug} />
      </main>
      <SqueezeLegal />
    </div>
  )
}
