import { createContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return state.some(item => item.id === payload.id)
        ? state.map(item =>
            item.id === payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state, { ...payload, qty: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== payload);

    case 'INCREMENT_QTY':
      return state.map(item =>
        item.id === payload ? { ...item, qty: item.qty + 1 } : item
      );
      
    case 'DECREMENT_QTY':
      return state.map(item =>
        item.id === payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
