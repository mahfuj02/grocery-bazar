import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Heading } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Grocery Bazar</title>
        <meta name="description" content="An online shop." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading textColor='secondary'>Hello from Index.</Heading>
      </main>
    </>
  )
}
