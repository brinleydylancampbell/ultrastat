import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  title: 'ULTRASTAT',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Testimonials').schemaType('testimonial').child(S.documentTypeList('testimonial')),
            S.listItem().title('Knowledge Base').schemaType('article').child(S.documentTypeList('article')),
            S.listItem().title('Squeeze Pages').schemaType('squeezePage').child(S.documentTypeList('squeezePage')),
            S.listItem().title('Distributors').schemaType('distributor').child(S.documentTypeList('distributor')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
