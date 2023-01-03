import { client } from 'lib/sanity.client'

import type { 
  Post
} from 'type'
import { 
  getPosts
} from 'lib/sanity.queries'
import {
  InferGetStaticPropsType, 
  GetStaticProps 
} from 'next'

import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps: GetStaticProps<{ 
  posts: Post[], 
}> = async (context) => {
  const posts = await client.fetch(getPosts)

  return {
    props: {
      posts: posts
    },
    revalidate: 10
  }
}

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <>
      {posts.map((post, index) => (
        <Link href={`/${post.slug?.current}`} key={index}>{post.title}</Link>
      ))}
    </>
  )
}