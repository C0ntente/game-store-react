import { Container, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const StoreNavBar = () => (
  <Navbar className="navbar-dark bg-dark">
    <Container className="container-fluid">
      <Container className="container-fluid justify-content-start">
        <Link href="/">
          <a className="navbar-brand">Game Store</a>
        </Link>
        <Link href="/products">
          <a className="navbar-brand">Products</a>
        </Link>
      </Container>
      <Link href="/cart">
        <a>
          <Image src="/cart-icon.svg" alt="Cart" width={40} height={25} />
        </a>
      </Link>
    </Container>
  </Navbar>
);

export default StoreNavBar;
