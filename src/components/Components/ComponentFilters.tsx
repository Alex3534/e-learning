import { useState } from 'react';

interface ComponentFiltersProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
}

const ComponentFilters = ({ categories, onCategoryChange, onSearch }: ComponentFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un composant..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${activeCategory === 'all'
              ? 'bg-primary text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
        >
          Tous
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ComponentFilters;