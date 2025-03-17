interface TemplateFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const TemplateFilters = ({ selectedCategory, onCategoryChange }: TemplateFiltersProps) => {
  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'sport', label: 'Sport' },
    { id: 'blog', label: 'Blog' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'business', label: 'Business' },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-primary text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default TemplateFilters;