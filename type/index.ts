export type Image = {
  _ref?: string
  asset?: {
    url?: string
    metadata?: {
      lqip?: string
      dimensions?: {
        aspectRatio?: number
        width?: number
        height?: number
      }
    }
  }
}

export type Post = {
  title?: string
  slug?: {
    current?: string
  }
  body?: [{
    children?: [{
      text?: string
    }]
  }]
  author?: {
    name?: string
    image?: Image
  }
}