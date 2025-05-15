"use client"

import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

interface ComponentSearchProps {
  onSearch: (query: string) => void;
}

export const ComponentSearch = ({ onSearch }: ComponentSearchProps) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  return (
    <div className="space-y-4 flex justify-start flex-col flex-col-reverse md:flex-row md:justify-between md:items-center lg:space-x-4 mb-10">
      {/* Mega Menu Trigger and Content */}
      <div
        className="relative mt-4"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <span className='flex items-center space-x-2 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer'>
          <span>Compnent</span> <FaArrowDown />
        </span>
        {isMegaMenuOpen && (
          <div
            className="absolute left-0 mt-0 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-6"
            // Keep menu open if mouse enters the menu itself
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            {/* Mega Menu Content */}
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Layout</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Grids</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Containers</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Flexbox</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Forms</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Inputs</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Buttons</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Selects</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Navigation</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Navbars</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Sidebars</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Breadcrumbs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">UI Elements</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Cards</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Modals</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-500">Tooltips</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Components &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Barre de recherche */}
      <div className="relative w-full md:w-10/12">
        <input
          type="search"
          placeholder="Rechercher un composant..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 
                    focus:ring-2 
                     focus:ring-blue-500 focus:border-transparent focus:outline-none"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 
                        text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
};
