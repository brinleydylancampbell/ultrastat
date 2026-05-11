import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Name / Role', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Job title', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string', description: 'e.g. "East Sussex" or "UK Bodyshop"' }),
    defineField({ name: 'active', title: 'Show on site', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote' },
  },
})
