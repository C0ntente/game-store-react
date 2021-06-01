import Link from 'next/link';
import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { formatNumberAsCurrency } from '../commons/formatter';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

export default function cart() {
  const { cart } = useContext(CartContext);
  function calculateCartTotal() {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total;
  }
  if (cart.length > 0) {
    return (
      <Container className="p-3">
        <Row>
          {cart.map((cartItem) => {
            return (
              <Col sm="12" className="pb-3" key={cartItem.id}>
                <CartItem cartItem={cartItem} />
              </Col>
            );
          })}
        </Row>
        <Row>
          <div className="justify-content-end d-flex">
            <h3>Total: {formatNumberAsCurrency(calculateCartTotal())}</h3>
          </div>
        </Row>
        <Row>
          <Link href="checkout">
            <Button variant="primary">Checkout</Button>
          </Link>
        </Row>
      </Container>
    );
  } else {
    return <h1>Carrinho vazio</h1>;
  }
}
