import { useRouter } from 'next/router'
import React from 'react'

export interface AboutPageProps {}

export default function App(props: AboutPageProps) {
  const router = useRouter()

  console.log('About query: ', router.query)

  return <div>About Page</div>
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
