import { defineField, defineType } from 'sanity'

export const squeezePage = defineType({
  name: 'squeezePage',
  title: 'Squeeze Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      description: 'e.g. "bodyshop" → ultrastat.co.uk/demo/bodyshop',
      options: { source: 'headline', maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Must match the Meta ad copy exactly',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'videoSrc',
      title: 'Video',
      type: 'string',
      description: 'Path to self-hosted MP4 (e.g. /videos/demo.mp4) or an embed URL',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Exactly 3 outcome statements',
      validation: (r) => r.min(3).max(3),
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({ name: 'formHeading', title: 'Form heading', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'CTA button label', type: 'string', initialValue: 'Request my free demo' }),
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'headline', subtitle: 'slug.current' },
    prepare({ title, subtitle }) {
      return { title, subtitle: `/demo/${subtitle}` }
    },
  },
})
