import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photo gallery</title>
        <meta name="description" content="Photo gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout/>
    </>
  )
}

export default Home
