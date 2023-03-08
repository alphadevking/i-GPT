import Application from '@/components/Application'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>i-GPT</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <main>
        <Application/>
      </main>
    </>
  )
}
