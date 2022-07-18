import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, neque. Labore ducimus quae pariatur recusandae aliquam magnam hic numquam perferendis necessitatibus reiciendis iure ut nesciunt similique accusamus, repudiandae beatae. Recusandae?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint fuga odit unde esse voluptatum consequatur, dolores, odio possimus voluptatibus quaerat. Sapiente tempore eius ut accusantium est quia? Error, dolorem?</p>
        <Link href="/ninjas"><a className={styles.btn}>See All Ninjas</a></Link>
      </div>
    </>
  )
}
