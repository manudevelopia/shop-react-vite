import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end p-6">
          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;