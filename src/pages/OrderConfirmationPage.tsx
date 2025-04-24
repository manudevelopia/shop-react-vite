import React from 'react';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const OrderConfirmationPage: React.FC = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900">Thank you for your order!</h1>
        <p className="mt-2 text-gray-600">
          Your order has been received and is being processed.
        </p>
        
        <div className="mt-8 rounded-md bg-gray-50 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Order number:</span>
            <span className="font-medium text-gray-900">{orderNumber}</span>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="flex items-center border-b border-gray-200 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <Package className="h-5 w-5" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <h3 className="text-sm font-medium text-gray-900">Order Confirmation</h3>
              <p className="mt-1 text-xs text-gray-600">
                You'll receive an email confirmation at your provided email address.
              </p>
            </div>
          </div>
          
          <div className="flex items-center border-b border-gray-200 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <Truck className="h-5 w-5" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <h3 className="text-sm font-medium text-gray-900">Shipping Details</h3>
              <p className="mt-1 text-xs text-gray-600">
                Your items will be shipped to the address you provided.
              </p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <h3 className="text-sm font-medium text-gray-900">Estimated Delivery</h3>
              <p className="mt-1 text-xs text-gray-600">
                {formatDate(estimatedDelivery)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button variant="primary" fullWidth as={Link} to="/orders">
            Track Order
          </Button>
          <Button variant="outline" fullWidth as={Link} to="/">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;