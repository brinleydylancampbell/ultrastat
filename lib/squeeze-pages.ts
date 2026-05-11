export interface SqueezePage {
  slug: string
  headline: string
  subheadline: string
  videoSrc: string
  benefits: [string, string, string]
  testimonial: {
    quote: string
    name: string
    role: string
    location: string
  }
  formHeading: string
  ctaLabel: string
  metaTitle: string
  metaDescription: string
}

export const squeezePages: SqueezePage[] = [
  {
    slug: 'bodyshop',
    headline: 'Stop losing jobs to dust and static.',
    subheadline: 'One free demo, at your booth, through your distributor. No commitment.',
    videoSrc: '/videos/hero-demo.mp4',
    benefits: [
      'Cleaner panels from the first pass — no more fish-eyes or dust nibs',
      'ATEX certified: safe in every spray booth, no exceptions',
      'Cordless and lightweight — works anywhere, all day',
    ],
    testimonial: {
      quote: 'Paid for itself within the first week. Fewer reworks, cleaner panels, less wasted paint.',
      name: 'Bodyshop Owner',
      role: 'Bodyshop Owner',
      location: 'UK',
    },
    formHeading: 'Request your free bodyshop demo',
    ctaLabel: 'Request my free demo',
    metaTitle: 'Free ULTRASTAT Demo for Bodyshops | Anti-Static Gun',
    metaDescription:
      'Stop losing time to dust and static. Request a free ULTRASTAT demo through your local paint distributor — in your booth, no commitment.',
  },
  {
    slug: 'metallic-finish',
    headline: 'Get metallic orientation right, every time.',
    subheadline: 'Static ruins metallic laydown. ULTRASTAT fixes it — free demo at your booth.',
    videoSrc: '/videos/hero-demo.mp4',
    benefits: [
      'Better metallic orientation from the first coat',
      'Eliminates static that causes uneven flake alignment',
      'ATEX certified and cordless — built for spray booth use',
    ],
    testimonial: {
      quote: 'The difference in finish quality was immediate. We now use it on every single panel before painting.',
      name: 'Vehicle Refinishing Professional',
      role: 'Refinishing Specialist',
      location: 'UK Bodyshop',
    },
    formHeading: 'Request your free demo',
    ctaLabel: 'Request my free demo',
    metaTitle: 'Better Metallic Finishes with ULTRASTAT | Free Demo',
    metaDescription:
      'Static ruins metallic laydown. ULTRASTAT eliminates it for perfect orientation every time. Request a free demo at your bodyshop.',
  },
]

export function getSqueezePageBySlug(slug: string): SqueezePage | undefined {
  return squeezePages.find((p) => p.slug === slug)
}
