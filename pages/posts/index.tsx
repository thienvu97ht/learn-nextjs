import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface PostListPageProps {
  post: any[]
}

export default function PostListPage(props: PostListPageProps) {
  return <div>Post List Page</div>
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // run lúc build-time

  return {
    props: {
      post: [],
    },
  }
}
