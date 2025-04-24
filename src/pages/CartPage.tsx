import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  const { items, total } = cart;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <ShoppingCart size={64} className="text-gray-300 mb-4" />
          <h1 className="text-2xl font-medium text-gray-900">Your cart is empty</h1>
          <p className="mt-2 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
          <Button 
            variant="primary" 
            className="mt-8" 
            as={Link} 
            to="/products"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flow-root">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <h2 className="text-lg font-medium text-gray-900">
                  Items ({items.reduce((acc, item) => acc + item.quantity, 0)})
                </h2>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Clear cart
                </button>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.product.id}>
                    <CartItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <CartSummary subtotal={total} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;