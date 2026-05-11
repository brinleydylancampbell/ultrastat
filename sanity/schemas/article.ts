import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Knowledge Base Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Paint defects', value: 'Paint defects' },
          { title: 'Product guide', value: 'Product guide' },
          { title: 'Safety', value: 'Safety' },
          { title: 'How-to', value: 'How-to' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 2, validation: (r) => r.required() }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
        },
      ],
    }),
    defineField({ name: 'publishedAt', title: 'Published', type: 'datetime', initialValue: () => new Date().toISOString() }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
