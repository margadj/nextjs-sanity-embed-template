import { client } from 'lib/sanity.client'

import type { 
  Post 
} from 'type'
import {
  getPostBySlug,
  getPostPathBySlug
} from 'lib/sanity.queries'
import { 
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next'

import Image from 'next/image'
import { imageSource } from 'lib/sanity.image.ts'
import { ParsedUrlQuery } from 'querystring'
import { PortableText } from '@portabletext/react'

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = await client.fetch(getPostPathBySlug)

  return {
    paths: paths.map((slug: string) => ({params: {slug}})),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<{
  post: Post,
}> = async (context) => {
  const { slug = "" } = context.params as IParams
  const post = await client.fetch(getPostBySlug, { slug })

  return {
    props: {
      post: post
    },
    revalidate: 10
  }
}

export default function Post({
  post
}: InferGetStaticPropsType<typeof getStaticProps>){

  const image = imageSource(post?.author?.image)

  return (
    <div>
      <p>{post?.title}</p>
      <PortableText value={post?.body}/>
      <p>Author: {post?.author?.name}</p>
      <Image
        src={image?.url}
        width={image?.width}
        height={image?.height}
        placeholder='blur'
        blurDataURL={image?.blur}
        alt='alt'
      />
    </div>
  )
}