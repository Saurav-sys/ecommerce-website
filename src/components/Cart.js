
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.amount), 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.handle}>
          <h4>{item.title}</h4>
          <p>Price: {item.price.amount} {item.price.currencyCode}</p>
        </div>
      ))}
      <p className="cart-total">Total: {getTotalPrice().toFixed(2)} INR</p>
    </div>
  );
};

export default Cart;
