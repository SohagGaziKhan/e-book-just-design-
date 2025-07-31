import React from "react";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();
  const shipping = cart.length > 0 ? 5.99 : 0;
  const total = cartTotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length !== 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your Cart is empty</h2>
          <Link
            to={"/shop"}
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md
             hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium items-center">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 p-4 border-b items-center"
                >
                  {/* Item Fetails */}
                  <div className="col-span-6 md:col-span-5 flex items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.author}</p>
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-2 text-center">
                    $ {item.price.toFixed(2)}
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 border rounded-l-md hover:bg-gray-100"
                    >
                      <FiMinus size={17} />
                    </button>
                    <span className="px-3 py-1 border-t border-b">
                      {item.quantity}
                    </span>
                    <button
                      onClick={updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 border rounded-r-md hover:bg-gray-100"
                    >
                      <FiPlus size={17} />
                    </button>
                  </div>
                  <div className="col-span-3 md:col-span-2 flex justify-end items-center">
                    <span className="font-medium mr-4">
                      $ {(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <Link
                to={"/shop"}
                className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 
                rounded-md hover:bg-indigo-50
              "
              >
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 text-md">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$ {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>$ {total.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="w-full bg-indigo-600 text-white py-3 rounded-md
               hover:bg-indigo-700 font-medium hover:cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
