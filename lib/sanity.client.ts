import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion, useCdn } from './sanity.api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})