// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import Cart from './Cart';
import './styles/styles.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="header">E-Commerce Store</h1>
        <div className="container">
          <ProductList className="product" />
          <Cart className="cart" />
        </div>
      </div>
    </Provider>
  );
}

export default App;
