export type Image = {
  _ref?: string
  asset?: {
    url?: string
    metadata?: {
      lqip?: string
      dimensions?: {
        aspectRatio?: number
        width?: number
      }
    }
  }
}

export type Post = {
  title?: string
  slug?: {
    current?: string
  }
  body?: {}
  author?: {
    name?: string
    image?: Image
  }
}