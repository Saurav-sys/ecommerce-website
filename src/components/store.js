
import { createStore } from 'redux';

const initialState = {
  products: [],
  cart: [],
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  return {
    products: state.products,
    cart: cartReducer(state.cart, action),
  };
};

const store = createStore(rootReducer);

export default store;
