import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A.WEEE</title>
        <meta name="description" content="Make Your Shopping with A.WEEE" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">A.WEEE</a>
        </h1>
      </main>
    </div>
  )
}
