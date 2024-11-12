
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decreaseQuantity, addItem, clearCart } from '../store/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <div className="p-2 m-4 ">
      {totalQuantity === 0 ? (
        <div className="text-center">Your cart is empty.</div>
      ) : (
        <div className=''>
          <ul className="mb-6 ">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center bg-white  p-4 shadow-md rounded-lg m-4">
                <div className="flex items-center">
                  <img className=" m-4  w-48 h-48" src={item.image} alt={item.title} />
                  <div>
                    <h3 className="text-xs">{item.title}</h3>
                    <div className="font-bold text-green-700"> ${item.totalPrice}</div>

                  
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                <button 
                    className="px-3 py-1   hover:bg-red-200 rounded pl-2" 
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                  >×</button>
                  <button 
                    className="px-3 py-1 border border-black text-black rounded" 
                    onClick={() => dispatch(decreaseQuantity({ id: item.id, price: item.price }))}
                  >-</button>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded">{item.quantity}</span> 
                  <button 
                    className="px-3 py-1 border border-black text-black rounded mx-2" 
                    onClick={() => dispatch(addItem(item))}
                  >+</button>
                 
                </div>
              </li>
            ))}
          </ul>
          <div className=' bg-white rounded-lg p-4 shadow-md m-4 w-20 h-20 flex justify-between'>
          <div className="text-right  text-xl font-bold mb-4 p-4 text-block">
            Total: ${totalAmount.toFixed(2)}
          </div>
          <div className=" ">
            <button 
              className="px-6  py-2 border text-black rounded m-4 border-black hover:bg-primarygray" 
              onClick={() => alert('Proceeding to checkout')}
            >
              Checkout
            </button>
            <button 
              className="px-6  py-2 border text-black rounded m-4 border-black hover:bg-primarygray" 
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
