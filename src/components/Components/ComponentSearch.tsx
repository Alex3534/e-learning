"use client"

import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

const categories = ['Tous', 'UI', 'Navigation', 'Formulaires', 'Feedback', 'Data Display'];

export const ComponentSearch = ({ onSearch, onFilter }: SearchProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  return (
    <div className="mb-8 space-y-4">
      {/* Barre de recherche */}
      <div className="relative">
        <input
          type="search"
          placeholder="Rechercher un composant..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 
                     dark:border-gray-700 dark:bg-gray-800 focus:ring-2 
                     focus:ring-blue-500 focus:border-transparent"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 
                        text-gray-400">
          🔍
        </span>
      </div>

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              onFilter(category);
            }}
            className={`px-4 py-2 rounded-full text-sm transition-colors
                       ${selectedCategory === category
                ? 'bg-blue-600 text-white'
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
