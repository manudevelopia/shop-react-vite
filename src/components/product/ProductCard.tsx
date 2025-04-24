import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add wishlist functionality here
  };

  const isLowStock = product.stock <= 5;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-60 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {/* Quick action buttons overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="rounded-full p-2"
          >
            <ShoppingCart size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleWishlist}
            aria-label="Add to wishlist"
            className="rounded-full bg-white p-2"
          >
            <Heart size={16} />
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 text-sm text-gray-500">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h3>
          <h2 className="mb-2 text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors">{product.name}</h2>
        </Link>

        {/* Rating */}
        <div className="mb-2 flex items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          {isLowStock && (
            <Badge variant="warning" className="ml-2">Low Stock</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;