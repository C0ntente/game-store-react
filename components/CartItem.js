import { formatNumberAsCurrency } from '../commons/formatter';
export default function CartItem({ cartItem }) {
  return (
    <div className="d-flex justify-content-between">
      <h1>{cartItem.name}</h1>
      <div>
        <Button size="sm" className="me-2">
          -
        </Button>
        <span>{cartItem.quantity}</span>
        <Button size="sm" className="ms-2">
          +
        </Button>
        <span className="ms-2">
          {formatNumberAsCurrency(cartItem.quantity * cartItem.price)}
        </span>
      </div>
    </div>
  );
}
