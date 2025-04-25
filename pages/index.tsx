import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Australian Giving Platform</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Australian Giving Platform</h1>
        <p>This MVP tracks grants made by philanthropic funders across Australia.</p>
      </main>
    </Layout>
  )
}