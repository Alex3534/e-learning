"use client"

import React, { useState } from 'react';
import { FaArrowDown, FaChevronDown } from 'react-icons/fa';

interface ComponentSearchProps {
  onSearch: (query: string) => void;
}

const components = [
  {
    category: 'Basic',
    link: [
      {
        title: 'Buttons',
        description: 'Collection de boutons personnalisables avec différents styles et variantes.',
        href: '/component/button',
      }
    ]

  },
  {
    category: 'Navigation',
    link: [
      {
        title: 'Navigation',
        description: 'Composants de navigation responsive et accessibles.',
        href: '/component/navigation',
      },
    ]
  },
  {
    category: 'Form',
    link: [
      {
        title: 'Input Forms',
        description: 'Composants de formulaires d\'entrée avec validation et styles personnalisés.',
        href: '/component/input',
      },
      {
        title: 'Contact Form',
        description: 'Formulaire de contact avec validation et envoi d\'email.',
        href: '/component/contact',
        category: 'Form'
      },
    ]
  },
  {
    category: 'Layout',
    link: [
      {
        title: 'Cards',
        description: 'Cartes d\'information avec des images, du texte et des actions.',
        href: '/component/card',
      },
      {
        title: 'Hero Section',
        description: 'Section héro avec image de fond, titre et bouton d\'appel à l\'action.',
        href: '/component/hero',
        category: 'Layout'
      },
      {
        title: 'Modals',
        description: 'Fenêtres modales pour afficher des informations supplémentaires ou des formulaires.',
        href: '/component/modal',
        category: 'Layout'
      },
      {
        title: 'Footer',
        description: 'Pied de page avec des liens et des informations de contact.',
        href: '/component/footer',
        category: 'Layout'
      },
    ]
  },
  {
    category: 'Data Display',
    link: [
      {
        title: 'Galerie',
        description: 'Galerie d\'images avec options de filtrage et de tri.',
        href: '/component/gallery',
      },
      {
        title: 'Accordion',
        description: 'Composant d\'accordéon pour afficher ou masquer du contenu.',
        href: '/component/accordion',
      }
    ]
  }

];

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
          <span>Compnent</span> <FaChevronDown className='w-3 h-3' />
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
              {
                components.map((comp) => (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">{comp.category}</h4>
                    <ul className="space-y-1">
                      {comp.link.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} className="text-gray-600 hover:text-blue-500">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              }
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
