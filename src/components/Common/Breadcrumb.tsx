import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BreadcrumbProps, BreadcrumbItem } from '@/types/breadcrumb';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  pageName,
  description,
  showBackground = true,
  textWhite = false,
  className = ''
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  // Default home item
  const defaultItems: BreadcrumbItem[] = [
    {
      label: 'Accueil',
      path: '/',
    },
    ...items,
    {
      label: pageName,
      path: '#',
      isActive: true,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`relative ${showBackground ? 'py-8 md:py-12 lg:py-16' : 'py-4'} ${className}`}
    >
      {showBackground && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10" />
      )}

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Titre de la page */}
          <motion.h1
            variants={itemVariants}
            className={`text-3xl md:text-4xl font-bold mb-4 text-center
              ${textWhite ? 'text-white' : 'text-gray-900 dark:text-white'}`}
          >
            {pageName}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg text-center max-w-2xl mb-8
                ${textWhite ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'}`}
            >
              {description}
            </motion.p>
          )}

          {/* Navigation Breadcrumb */}
          <motion.nav
            variants={itemVariants}
            className="flex items-center space-x-1 text-sm md:text-base"
          >
            {defaultItems.map((item, index) => (
              <React.Fragment key={item.path}>
                {index > 0 && (
                  <ChevronRightIcon 
                    className={`w-4 h-4 mx-2
                      ${textWhite ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'}`}
                  />
                )}
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  {index === 0 && (
                    <HomeIcon 
                      className={`w-4 h-4 mr-1
                        ${textWhite ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
                    />
                  )}
                  
                  {item.isActive ? (
                    <span
                      className={`font-medium
                        ${textWhite 
                          ? 'text-white' 
                          : 'text-blue-600 dark:text-blue-400'}`}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className={`hover:underline transition-colors
                        ${textWhite 
                          ? 'text-white/80 hover:text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              </React.Fragment>
            ))}
          </motion.nav>
        </div>
      </div>
    </motion.div>
  );
};
