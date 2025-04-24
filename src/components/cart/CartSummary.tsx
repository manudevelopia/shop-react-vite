import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Shipping</p>
          <p className="text-sm font-medium text-gray-900">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Tax</p>
          <p className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-medium text-gray-900">Order total</p>
            <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Button variant="primary" fullWidth as={Link} to="/checkout">
          Checkout
        </Button>
        
        <div className="mt-4 text-center">
          <Link
            to="/products"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
      
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-sm font-medium text-gray-900">We accept</h3>
        <div className="mt-2 flex space-x-2">
          <div className="h-6 w-10 rounded bg-gray-200" aria-hidden="true"></div>
          <div className="h-6 w-10 rounded bg-gray-200" aria-hidden="true"></div>
          <div className="h-6 w-10 rounded bg-gray-200" aria-hidden="true"></div>
          <div className="h-6 w-10 rounded bg-gray-200" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;