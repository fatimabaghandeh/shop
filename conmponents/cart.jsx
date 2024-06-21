import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decreaseQuantity, addItem, clearCart } from '../store/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {totalQuantity === 0 ? (
        <div className="text-center">Your cart is empty.</div>
      ) : (
        <div>
          <ul className="mb-6">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img className="w-12 h-12 object-cover  " src={item.image} alt={item.title} /> {/* نمایش تصویر محصول با ابعاد مناسب */}
                  <div>
                    <h3 className="text-xl">{item.title}</h3>
                    <div className="text-gray-700"> ${item.totalPrice}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className="px-3 py-1 border border-black text-black rounded" 
                    onClick={() => dispatch(decreaseQuantity({ id: item.id, price: item.price }))}
                  >-</button>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded">{item.quantity}</span> {/* نمایش تعداد محصول */}
                  <button 
                    className="px-3 py-1 border border-black text-black rounded mx-2" 
                    onClick={() => dispatch(addItem(item))}
                  >+</button>
                  <button 
                    className="px-3 py-1 bg-red-500 text-white rounded" 
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                  >Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right text-xl font-bold mb-4">
            Total: ${totalAmount.toFixed(2)}
          </div>
          <div className="text-right">
            <button 
              className="px-6 py-2 bg-primaryy text-white rounded" 
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
      )}
    </div>
  );
};

export default Cart;
