import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronRight, Star, Truck, Package, RefreshCw } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex py-3 text-gray-500 text-sm mb-8">
        <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
        <ChevronRight className="mx-2 h-4 w-4" />
        <a href="/products" className="hover:text-indigo-600 transition-colors">Products</a>
        <ChevronRight className="mx-2 h-4 w-4" />
        <a href={`/category/${product.category}`} className="hover:text-indigo-600 transition-colors capitalize">
          {product.category}
        </a>
        <ChevronRight className="mx-2 h-4 w-4" />
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`relative overflow-hidden rounded-md bg-gray-100 ${
                  selectedImage === index ? 'ring-2 ring-indigo-600' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-24 w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-2 border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{product.reviews} reviews</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.stock <= 5 ? (
                <Badge variant="warning">Low Stock</Badge>
              ) : (
                <Badge variant="success">In Stock</Badge>
              )}
            </div>
          </div>

          <div className="space-y-4 border-b border-gray-200 pb-6">
            <p className="text-base text-gray-700">{product.description}</p>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">Features:</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 border-b border-gray-200 pb-6">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-900">Quantity:</span>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-8 w-8 rounded-l-md border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-50"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  min={1}
                  max={product.stock}
                  onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="h-8 w-12 border-y border-gray-300 text-center text-sm text-gray-900 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="h-8 w-8 rounded-r-md border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-50"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {product.stock} available
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                variant="primary" 
                fullWidth
                onClick={handleAddToCart}
                className="group"
                aria-label="Add to cart"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                className="group"
                aria-label="Add to wishlist"
              >
                <Heart className="mr-2 h-4 w-4 transition-colors group-hover:text-indigo-600" />
                Add to Wishlist
              </Button>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Truck className="h-5 w-5 text-gray-600" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">Free shipping</h4>
                <p className="mt-1 text-sm text-gray-500">Free standard shipping on orders over $100</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Package className="h-5 w-5 text-gray-600" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">Secure packaging</h4>
                <p className="mt-1 text-sm text-gray-500">Products are securely packaged to ensure safe delivery</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RefreshCw className="h-5 w-5 text-gray-600" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">30-day returns</h4>
                <p className="mt-1 text-sm text-gray-500">Return or exchange within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;