
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decreaseQuantity, addItem, clearCart } from '../store/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <div className="p-6 bg-orange-100">
      {totalQuantity === 0 ? (
        <div className="text-center">Your cart is empty.</div>
      ) : (
        <div className='flex'>
          <ul className="mb-6">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center bg-white border p-4 rounded-lg m-4">
                <div className="flex items-center">
                  <img className=" w-full max-h-36 object-contain" src={item.image} alt={item.title} />
                  <div>
                    <h3 className="text-xl">{item.title}</h3>
                  
                  </div>
                </div>
                <div className="flex items-center ">
                <div className="text-gray-700 p-4"> ${item.totalPrice}</div>
                  <button 
                    className="px-3 py-1 border border-black text-black rounded" 
                    onClick={() => dispatch(decreaseQuantity({ id: item.id, price: item.price }))}
                  >-</button>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded">{item.quantity}</span> 
                  <button 
                    className="px-3 py-1 border border-black text-black rounded mx-2" 
                    onClick={() => dispatch(addItem(item))}
                  >+</button>
                  <button 
                    className="px-3 py-1 bg-red-500 text-white rounded pl-2" 
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                  >Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className='border bg-primaryy rounded-lg p-4 bg-uniq w-20 h-20'>
          <div className="text-right text-xl font-bold mb-4 p-4 text-white">
            Total: ${totalAmount.toFixed(2)}
          </div>
          <div className="">
            <button 
              className="px-6 py-2 bg-orange-100 text-black rounded m-4" 
              onClick={() => alert('Proceeding to checkout')}
            >
              Checkout
            </button>
            <button 
              className="px-6 py-2 bg-red-500 text-white rounded ml-4" 
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