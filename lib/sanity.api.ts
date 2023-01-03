export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = '2022-11-15'
export const useCdn = process.env.NODE_ENV === 'production'
export const token = process.env.NEXT_PRIVATE_SANITY_PREVIEW_SECRET