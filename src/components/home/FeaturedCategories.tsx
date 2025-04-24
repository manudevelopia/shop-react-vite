import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import CategoryCard from '../category/CategoryCard';

const FeaturedCategories: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Shop by Category</h2>
          <Link
            to="/categories"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View All <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;