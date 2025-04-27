import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ComponentCategory {
  title: string;
  items: {
    name: string;
    path: string;
    status: 'stable' | 'beta' | 'deprecated';
  }[];
}

const componentCategories: ComponentCategory[] = [
  {
    title: "Interface utilisateur",
    items: [
      { name: "Boutons", path: "/component/button", status: "stable" },
      { name: "Navigation", path: "/component/navigation", status: "stable" },
      { name: "Forms", path: "/component/input", status: "stable" },
      { name: "Cards", path: "/component/card", status: "stable" },
      // Ajoutez d'autres composants ici
    ]
  },
  // Ajoutez d'autres catégories ici
];

export const ComponentNavigation = () => {
  return (
    <div className="lg:w-full border bg-white p-4 rounded-lg shadow-lg">

      {componentCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {category.title}
          </h3>
          <ul className="space-y-2">
            {category.items.map((item, itemIndex) => (
              <motion.li
                key={itemIndex}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={item.path}>
                  <span className="flex items-center justify-between py-2 px-3 rounded-md 
                                 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${item.status === 'stable' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                        item.status === 'beta' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                      }`}>
                      {item.status}
                    </span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
