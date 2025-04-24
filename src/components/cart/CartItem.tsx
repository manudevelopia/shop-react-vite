import React from 'react';
import { Trash } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex items-center py-5 border-b border-gray-200 last:border-b-0">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500 capitalize">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <label htmlFor={`quantity-${product.id}`} className="mr-2 text-sm text-gray-600">
              Qty
            </label>
            <select
              id={`quantity-${product.id}`}
              value={quantity}
              onChange={handleQuantityChange}
              className="rounded-md border border-gray-300 py-1 pl-2 pr-8 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {[...Array(Math.min(10, product.stock))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(product.id)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
          >
            <Trash className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;