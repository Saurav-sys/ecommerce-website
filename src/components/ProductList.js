// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductData();
      if (data) {
        setProducts(data);
      }
    }
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    if (product.quantity > 0 && !cartItems.find(item => item.handle === product.handle)) {
      dispatch({ type: 'ADD_TO_CART', product });
    }
  };

  return (
    <div className="product">
      <h2>Products</h2>
      {products.map((product) => (
        <div className="product-item" key={product.handle}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price.amount} {product.price.currencyCode}</p>
          <img src={product.images.edges[0].node.src} alt={product.title} />
          <p>Quantity: {product.quantity}</p>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={product.quantity === 0 || cartItems.find(item => item.handle === product.handle)}
          >
            {cartItems.find(item => item.handle === product.handle) ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
