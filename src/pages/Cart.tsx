import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const Cart = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some delicious items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.dish.id}
              className="bg-white rounded-lg shadow-md p-6 mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.dish.image}
                  alt={item.dish.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-6 flex-grow">
                  <h3 className="text-lg font-semibold">{item.dish.name}</h3>
                  <p className="text-gray-600">${item.dish.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.dish.id,
                            quantity: Math.max(0, item.quantity - 1),
                          })
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.dish.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.dish.id))}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(total + 5).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;