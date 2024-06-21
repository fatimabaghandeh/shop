//import { useDispatch, useSelector } from 'react-redux';

import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./cartSclice";




const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
              <img className="w-20" src={item.image} alt={item.title} />
              <div>
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-green-700">${item.price}</p>
              </div>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
              </div>
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => dispatch(removeFromCart(item))}>
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <h2 className="text-xl">Total: ${totalPrice.toFixed(2)}</h2>
            <button className="bg-green-500 text-white p-2 rounded">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
