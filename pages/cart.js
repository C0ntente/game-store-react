import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

export default function cart() {
  const { cart } = useContext(CartContext);
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
    </Container>
  );
}
