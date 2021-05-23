import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Game Store</h1>
      </main>
    </div>
  );
}
