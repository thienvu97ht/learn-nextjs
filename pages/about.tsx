import Header from '@/components/common/header'
import { MainLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'
// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  const page = router.query?.page

  const [postList, setPostList] = useState([])

  console.log('About query: ', router.query)

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()

      setPostList(data.data)
      // useSWR()
    })()
  }, [page])

  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div>
      <h1>About Page</h1>

      <Header />
      <ul className="post-List">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next page</button>
    </div>
  )
}

AboutPage.Layout = MainLayout

export async function getStaticProps() {
  console.log('GET STATIC PROPS')

  return {
    props: {},
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   }
// }
