import type { Image } from 'type'

export const imageSource = (source?: Image) => {
  if (!source?.asset) {
    return undefined
  }

  const url = source && source?.asset?.url
  const blur = source?.asset?.metadata?.lqip
  const width = source?.asset?.metadata?.dimensions?.width
  const height = source?.asset?.metadata?.dimensions?.height
  return { url, blur, width, height }
}