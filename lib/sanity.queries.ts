import { groq } from 'next-sanity'

export const getPosts = groq`
  *[_type == "post"]{
    title,
    slug
  }
`

export const getPostPathBySlug = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`

export const getPostBySlug = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    author -> {
      name,
      image {
        asset ->
      }
    }
  }
`