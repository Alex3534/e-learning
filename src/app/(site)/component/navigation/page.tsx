'use client';

import React, { useState } from 'react';
import { ComponentDemo } from '@/components/Components/componentDemo';
import { ComponentSearch } from '@/components/Components/ComponentSearch';
import { Breadcrumb } from '@/components/Common/Breadcrumb';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationComponent } from '@/data/componentNavigation';

export default function ComponentButtonPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const breadcrumbItems = [
        {
            label: 'Documentation',
            path: '/documentation',
        },
        {
            label: 'Composants',
            path: '/component',
        },
    ];

    const filteredComponents = NavigationComponent.filter((component) => {
        const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            component.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || component.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Breadcrumb
                className= {"mt-20"}
                items={breadcrumbItems}
                pageName="Bibliothèque de composants"
                description="Explorez notre collection de composants réutilisables pour construire des interfaces modernes."
                showBackground={true}
                textWhite={false}
            />

            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="lg:w-full">
                        <div className="prose dark:prose-invert max-w-none mb-8">
                            <h1>Bibliothèque de composants</h1>
                            <p>
                                Explorez notre collection de composants réutilisables pour
                                construire des interfaces utilisateur modernes et accessibles.
                            </p>
                        </div>

                        <ComponentSearch
                            onSearch={setSearchQuery}
                            onFilter={setSelectedCategory}
                        />

                        <AnimatePresence>
                            <motion.div
                                layout
                                className="grid gap-8"
                            >
                                {filteredComponents.map((component) => (
                                    <motion.div
                                        key={String(component.id)}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <ComponentDemo
                                            componentClassname=''
                                            title={component.title}
                                            description={component.description}
                                            component={component.component}
                                            code={component.code || ''}
                                        />
                                    </motion.div>
                                ))}

                                {filteredComponents.length === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-12 text-gray-500 dark:text-gray-400"
                                    >
                                        Aucun composant ne correspond à votre recherche.
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}
