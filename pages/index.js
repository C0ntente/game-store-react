import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Game Store</title>
        <meta name="description" content="Game Store Adalberto" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Game Store</h1>
      </main>
    </div>
  );
}
