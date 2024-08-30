import type { SanityClient } from '@sanity/client'
import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity/config'

// const { dataset, projectId, useCdn, apiVersion } = sanityConfig
export function getClient(token?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    useCdn,
    apiVersion,
    perspective: 'published',
  })

  return token
    ? client.withConfig({
        token: token,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDrafts',
      })
    : client
}
