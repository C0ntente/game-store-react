import { Container, Navbar } from 'react-bootstrap';
import Image from 'next/image';

const StoreNavBar = () => (
  <Navbar className="navbar-dark bg-dark">
    <Container className="container-fluid">
      <Container className="container-fluid justify-content-start">
        <a className="navbar-brand" href="/">
          Game Store
        </a>
        <a className="navbar-brand" href="products">
          Products
        </a>
      </Container>
      <Image src="/cart-icon.svg" alt="Cart" width={40} height={25} />
    </Container>
  </Navbar>
);

export default StoreNavBar;
