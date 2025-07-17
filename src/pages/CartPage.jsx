import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);

  const total = cart
    ?.reduce((acc, item) => acc + item.price * item.qty, 0)
    ?.toFixed(2);
 
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 border p-2 rounded"
          >
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="h-16 w-16 object-contain"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-bold">{item?.title}</h2>
              <p>${item?.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  dispatch({ type: 'DECREMENT_QTY', payload: item.id })
                }
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() =>
                  dispatch({ type: 'INCREMENT_QTY', payload: item.id })
                }
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                }
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <h2 className="text-xl font-bold mt-4">Total: {total}</h2>
    </div>
  );
};

export default CartPage;
