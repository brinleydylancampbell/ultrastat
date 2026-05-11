import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeatureStrip from '@/components/FeatureStrip'
import CredentialsPanel from '@/components/CredentialsPanel'
import HowItWorks from '@/components/HowItWorks'
import TrustSection from '@/components/TrustSection'
import InstagramSection from '@/components/InstagramSection'
import ROICalculator from '@/components/ROICalculator'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { sanityFetch } from '@/sanity/lib/client'
import { testimonialsQuery } from '@/sanity/lib/queries'
import type { Testimonial } from '@/components/TrustSection'

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ULTRASTAT Anti-Static Gun',
  description: 'Cordless, lightweight anti-static gun for bodyshop painters. ATEX certified for safe use in spray booths.',
  brand: { '@type': 'Brand', name: 'ULTRASTAT' },
  manufacturer: { '@type': 'Organization', name: 'Lean Air' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ULTRASTAT',
  url: 'https://ultrastat.co.uk',
  sameAs: ['https://www.instagram.com/ultrastatgun/'],
}

export default async function HomePage() {
  const testimonials = await sanityFetch<Testimonial[]>(testimonialsQuery)

  return (
    <>
      <SchemaScript data={productSchema} />
      <SchemaScript data={orgSchema} />
      <Nav />
      <main>
        <Hero />
        <FeatureStrip />
        <CredentialsPanel />
        <HowItWorks />
        <TrustSection testimonials={testimonials ?? undefined} />
        <InstagramSection />
        <ROICalculator />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
