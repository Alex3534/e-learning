import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ComponentCardProps {
  title: string;
  description: string;
  icon?: string;
  href: string;
  category: string;
}

const ComponentCard = ({ title, description, icon, href, category }: ComponentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <Link href={href} className="block p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            {icon ? (
              <Image
                src={icon}
                alt={`${title} icon`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ) : (
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <span className="text-sm text-primary/80">{category}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
        <div className="mt-4 flex items-center text-primary">
          <span className="text-sm font-medium">En savoir plus</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default ComponentCard;