import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-xl font-bold text-gray-900">
              ShopWave
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Discover premium products with exceptional quality. We're committed to providing a seamless shopping experience with secure payments and fast delivery.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Special Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/account" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin size={16} className="mt-0.5 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">
                  123 Commerce St, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-500" />
                <a href="tel:+123456789" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-500" />
                <a href="mailto:support@shopwave.com" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  support@shopwave.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="max-w-md mx-auto sm:mx-0">
            <h3 className="text-sm font-semibold text-gray-900">Sign up for our newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get the latest updates, promotions, and product news.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="inline-flex items-center rounded-r-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">&copy; 2025 ShopWave. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-gray-500 hover:text-indigo-600 transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="text-xs text-gray-500 hover:text-indigo-600 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;