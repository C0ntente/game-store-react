import { Container, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function StoreNavBar() {
  function totalItensInsCart() {
    const { cart } = useContext(CartContext);
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  }
  return (
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
          <a className="d-flex">
            <Image src="/cart-icon.svg" alt="Cart" width={40} height={25} />
            <Badge variant="light" className="p-0">
              {totalItensInsCart()}
            </Badge>
          </a>
        </Link>
      </Container>
    </Navbar>
  );
}

export default StoreNavBar;
