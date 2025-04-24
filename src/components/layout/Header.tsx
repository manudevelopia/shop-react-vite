import React, { useState } from 'react';
import { ShoppingCart, Heart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const cartItemCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white bg-opacity-95 backdrop-blur transition-all">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 flex items-center">
              ShopWave
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Products
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/wishlist" 
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>
            <Link 
              to="/account" 
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <Link 
              to="/cart" 
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              className="p-2 text-gray-500" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Expanded Search Bar */}
        {searchExpanded && (
          <div className="py-4 px-2 border-b border-gray-200">
            <div className="relative mx-auto max-w-2xl">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button 
                className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                onClick={toggleSearch}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="text-xl font-medium" 
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-xl font-medium" 
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className="text-xl font-medium" 
                onClick={toggleMobileMenu}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-xl font-medium" 
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-xl font-medium" 
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link 
                to="/wishlist" 
                className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 text-center text-sm font-medium"
                onClick={toggleMobileMenu}
              >
                <Heart size={18} className="mr-2" />
                Wishlist
              </Link>
              <Link 
                to="/account" 
                className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 text-center text-sm font-medium"
                onClick={toggleMobileMenu}
              >
                <User size={18} className="mr-2" />
                Account
              </Link>
              <Link 
                to="/cart" 
                className="col-span-2 flex items-center justify-center rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white"
                onClick={toggleMobileMenu}
              >
                <ShoppingCart size={18} className="mr-2" />
                Cart ({cartItemCount})
              </Link>
            </div>
            
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;