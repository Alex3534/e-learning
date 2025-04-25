'use client';

import { useState } from 'react';
import ComponentCard from '@/components/Components/ComponentCard';
import ComponentFilters from '@/components/Components/ComponentFilters';
import { motion } from 'framer-motion';

const components = [
  {
    title: 'Buttons',
    description: 'Collection de boutons personnalisables avec différents styles et variantes.',
    href: '/component/button',
    category: 'Basic'
  },
  {
    title: 'Navigation',
    description: 'Composants de navigation responsive et accessibles.',
    href: '/component/navigation',
    category: 'Navigation'
  },
  {
    title: 'Input Forms',
    description: 'Composants de formulaires d\'entrée avec validation et styles personnalisés.',
    href: '/component/input',
    category: 'Form'
  },
  {
    title: 'Cards',
    description: 'Cartes d\'information avec des images, du texte et des actions.',
    href: '/component/card',
    category: 'Layout'
  }
];

const categories = ['Basic', 'Navigation', 'Form', 'Layout', 'Data Display'];

export default function ComponentPage() {
  const [filteredComponents, setFilteredComponents] = useState(components);

  const handleSearch = (query: string) => {
    const filtered = components.filter(component =>
      component.title.toLowerCase().includes(query.toLowerCase()) ||
      component.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredComponents(filtered);
  };

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setFilteredComponents(components);
    } else {
      const filtered = components.filter(component => component.category === category);
      setFilteredComponents(filtered);
    }
  };

  return (
    <div className="container mx-auto py-12 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Composants UI
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Une collection de composants React réutilisables pour construire des interfaces modernes.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <ComponentFilters
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onSearch={handleSearch}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredComponents.map((component, index) => (
            <ComponentCard
              key={index}
              {...component}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}