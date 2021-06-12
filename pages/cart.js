import Link from 'next/link';
import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { formatNumberAsCurrency } from '../commons/formatter';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

function cart() {
  const { cart } = useContext(CartContext);
  function calculateCartTotal() {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total;
  }
  function calculateShip() {
    let shipPrice = 0;
    cart.forEach((product) => {
      shipPrice += product.quantity * 10;
    });
    return shipPrice;
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
          <div className="d-flex justify-content-end">
            <div className="d-flex flex-column">
              <h3 className="text-end">
                Total: {formatNumberAsCurrency(calculateCartTotal())}
              </h3>
              <h3
                className={
                  calculateCartTotal() >= 250
                    ? 'text-end text-decoration-line-through'
                    : 'text-end'
                }
              >
                Ship Price: {formatNumberAsCurrency(calculateShip())}
              </h3>
              {calculateCartTotal() >= 250 && (
                <h3 className="text-end">Free Ship</h3>
              )}
            </div>
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
export default cart;
