import React from 'react';
import { products } from '../data/products';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductGrid from '../components/product/ProductGrid';

const HomePage: React.FC = () => {
  // Featured products (could be from a different data source or filtered)
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <ProductGrid 
            products={featuredProducts} 
            title="Featured Products" 
          />
        </div>
      </div>
      
      {/* Sale Banner */}
      <div className="bg-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Summer Sale</h2>
          <p className="text-indigo-100 text-lg mb-8">Enjoy up to 30% off on select products. Limited time only!</p>
          <a 
            href="/products" 
            className="inline-block rounded-md bg-white px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-50"
          >
            Shop the Sale
          </a>
        </div>
      </div>
      
      {/* Latest Products */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <ProductGrid 
            products={products.slice().reverse().slice(0, 4)} 
            title="Latest Arrivals" 
          />
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center sm:text-3xl">What Our Customers Say</h2>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                review: "The quality of products is outstanding. Fast shipping and excellent customer service. Highly recommend!"
              },
              {
                name: "Michael Chen",
                review: "I've been shopping here for years and have never been disappointed. Their tech products are top-notch."
              },
              {
                name: "Emma Wilson",
                review: "Great selection and competitive prices. The checkout process is smooth and the delivery is always on time."
              }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;