import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { formatNumberAsCurrency } from '../commons/formatter';
export default function CartItem({ cartItem }) {
  const { removeProductFromCart, addProductToCart } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-between">
      <h1>{cartItem.name}</h1>
      <div>
        <Button
          size="sm"
          className="me-2"
          onClick={() => removeProductFromCart(cartItem)}
        >
          -
        </Button>
        <span>{cartItem.quantity}</span>
        <Button
          size="sm"
          className="ms-2"
          onClick={() => addProductToCart(cartItem)}
        >
          +
        </Button>
        <span className="ms-2">
          {formatNumberAsCurrency(cartItem.quantity * cartItem.price)}
        </span>
      </div>
    </div>
  );
}
