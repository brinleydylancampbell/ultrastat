import { defineField, defineType } from 'sanity'

export const distributor = defineType({
  name: 'distributor',
  title: 'Distributor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Distributor name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'territory', title: 'Territory', type: 'string', description: 'e.g. "South East England"', validation: (r) => r.required() }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: ['UK', 'Republic of Ireland', 'Germany', 'France', 'Netherlands', 'Spain', 'Italy', 'Australia', 'USA', 'Canada', 'Other'],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'lat', title: 'Latitude', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'lng', title: 'Longitude', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'contactUrl', title: 'Website URL', type: 'url' }),
    defineField({ name: 'active', title: 'Show on map', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'territory' },
  },
})
