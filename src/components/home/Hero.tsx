import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Elevate Your Tech Experience
              </h1>
              <p className="text-xl text-gray-600">
                Discover premium devices, accessories, and more. Shop the latest products from top brands.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" as={Link} to="/products">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" as={Link} to="/categories">
                Explore Categories
              </Button>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-80 lg:h-full">
              <img
                src="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Featured products showcasing premium headphones, laptop and smartwatch"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;