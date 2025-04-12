'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import TemplateCard from '@/components/Templates/TemplateCard';
import TemplateFilters from '@/components/Templates/TemplateFilters';
import { templates } from '@/data/templatesData';

const TemplatesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredTemplates = templates.filter(
        (template) => selectedCategory === 'all' || template.category === selectedCategory
    );

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    return (
        <>
            <section className="container mx-auto px-4 py-16 mt-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">

                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Nos Templates
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Des templates modernes et professionnels pour donner vie à votre projet rapidement
                        </p>
                    </div>

                    <TemplateFilters
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredTemplates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TemplatesPage;
