import Head from 'next/head';
import StoreFooter from '../components/StoreFooter';
import StoreNavBar from '../components/StoreNavBar';
import { CartProvider } from '../contexts/CartContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Game Store</title>
        <meta name="description" content="Game Store Adalberto" />
      </Head>
      <StoreNavBar></StoreNavBar>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>

      <StoreFooter></StoreFooter>
    </>
  );
}

export default MyApp;
