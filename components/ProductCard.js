import Image from 'next/image';
import React, { useContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { formatNumberAsCurrency } from '../commons/formatter';
import { CartContext } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addProductToCart } = useContext(CartContext);
  function handleClick() {
    addProductToCart(product);
  }

  return (
    <Card className="h-100">
      <Image
        className="p-2"
        src={`/${product.image}`}
        alt="Cart"
        width={80}
        height={80}
        layout="responsive"
      />
      <Card.Body className="flex-column d-flex">
        <Card.Title className="text-center mb-3">{product.name}</Card.Title>
        <Container className="mt-auto flex-column d-flex">
          <Card.Text
            className={
              product.score > 100
                ? 'text-success text-center'
                : 'text-danger text-center'
            }
          >
            Score: <b>{product.score}</b>
          </Card.Text>
          <Card.Text className="text-center">
            Price: <b>{formatNumberAsCurrency(product.price)}</b>
          </Card.Text>
          <Button variant="primary" onClick={() => handleClick()}>
            Add to cart
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}
