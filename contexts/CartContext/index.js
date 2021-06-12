import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  });
  function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  function removeProductFromCart(product) {
    const index = findWithAttr(cart, 'id', product.id);
    if (index !== -1) {
      let cartToUpdate = [...cart];
      let updatedProduct = {
        ...cartToUpdate[index],
        quantity: cartToUpdate[index].quantity - 1,
      };
      cartToUpdate[index] = updatedProduct;
      if (updatedProduct.quantity === 0) {
        cartToUpdate.splice(index, 1);
      }
      setCart(cartToUpdate);
    }
  }

  function addProductToCart(product) {
    const index = findWithAttr(cart, 'id', product.id);
    if (index !== -1) {
      let cartToUpdate = [...cart];
      let updatedProduct = {
        ...cartToUpdate[index],
        quantity: cartToUpdate[index].quantity + 1,
      };
      cartToUpdate[index] = updatedProduct;
      setCart(cartToUpdate);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function clearCart() {
    setCart([]);
  }
  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, clearCart, removeProductFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
