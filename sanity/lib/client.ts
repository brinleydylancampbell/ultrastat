import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const apiVersion = '2024-01-01'

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null

export async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!client) return null
  return client.fetch<T>(query, params, { next: { revalidate: 60 } })
}
