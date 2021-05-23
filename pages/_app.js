import Head from 'next/head';
import StoreFooter from '../components/StoreFooter';
import StoreNavBar from '../components/StoreNavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Game Store</title>
        <meta name="description" content="Game Store Adalberto" />
      </Head>
      <StoreNavBar></StoreNavBar>
      <Component {...pageProps} />
      <StoreFooter></StoreFooter>
    </>
  );
}

export default MyApp;
