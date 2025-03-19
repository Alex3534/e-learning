"use client";

import { Template } from "@/types/template";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TemplateDetailProps {
    template: Template;
}

export default function TemplateDetail({ template }: TemplateDetailProps) {
    const [activeTab, setActiveTab] = useState('animations');

    // Liste des animations disponibles
    const animations = [
        {
            name: "Fade In",
            description: "Animation de fondu à l'entrée des éléments",
            preview: "opacity-0 → opacity-1",
            icon: "fluent:presence-available-24-regular"
        },
        {
            name: "Slide Up",
            description: "Les éléments glissent vers le haut en apparaissant",
            preview: "translateY(20px) → translateY(0)",
            icon: "fluent:arrow-up-24-regular"
        },
        {
            name: "Scale",
            description: "Animation de zoom sur les éléments",
            preview: "scale-95 → scale-100",
            icon: "fluent:zoom-in-24-regular"
        },
        {
            name: "Rotate",
            description: "Rotation des éléments à l'entrée",
            preview: "rotate-180 → rotate-0",
            icon: "fluent:arrow-rotate-clockwise-24-regular"
        }
    ];

    // Liste des interactions utilisateur
    const interactions = [
        {
            name: "Hover Effects",
            description: "Effets au survol des boutons et cartes",
            icon: "fluent:cursor-hover-24-regular"
        },
        {
            name: "Click Animations",
            description: "Feedback visuel lors des clics",
            icon: "fluent:click-24-regular"
        },
        {
            name: "Smooth Scrolling",
            description: "Défilement fluide entre les sections",
            icon: "fluent:scroll-24-regular"
        },
        {
            name: "Page Transitions",
            description: "Transitions fluides entre les pages",
            icon: "fluent:arrow-routing-24-regular"
        }
    ];

    // Liste des fonctionnalités responsives
    const responsive = [
        {
            name: "Mobile First",
            description: "Design optimisé pour mobile en priorité",
            icon: "fluent:phone-24-regular"
        },
        {
            name: "Tablette",
            description: "Mise en page adaptative pour tablettes",
            icon: "fluent:tablet-24-regular"
        },
        {
            name: "Desktop",
            description: "Version bureau avec fonctionnalités étendues",
            icon: "fluent:desktop-24-regular"
        },
        {
            name: "Large Screens",
            description: "Support des grands écrans et moniteurs",
            icon: "fluent:desktop-large-24-regular"
        }
    ];

    return (
        <>
            <section className="pt-20 pb-10 lg:pt-[120px] mt-10 lg:pb-20">
                <div className=" container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <Image
                                    src={template.image}
                                    alt={template.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-full">
                                <span className="text-sm font-medium capitalize">
                                    {template.category}
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col space-y-6"
                        >
                            <h1 className="text-3xl font-bold text-black dark:text-white">
                                {template.title}
                            </h1>

                            <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-primary">
                                    {template.price}
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300">
                                {template.description}
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-black dark:text-white">
                                    Caractéristiques
                                </h3>
                                <ul className="space-y-3">
                                    {template.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                                        >
                                            <Icon
                                                icon="fluent:checkmark-circle-24-regular"
                                                className="w-5 h-5 text-primary"
                                            />
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <Link
                                    href={template.demoUrl}
                                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-medium text-white transition duration-300 ease-in-out transform bg-primary rounded-full hover:bg-white hover:border-primary hover:text-primary"
                                >
                                    Voir la démo
                                    <Icon
                                        icon="fluent:eye-24-regular"
                                        className="w-5 h-5 ml-2"
                                    />
                                </Link>
                                <button
                                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary transition duration-300 ease-in-out transform border-2 border-primary rounded-full hover:bg-primary hover:text-white"
                                >
                                    Acheter maintenant
                                    <Icon
                                        icon="fluent:cart-24-regular"
                                        className="w-5 h-5 ml-2"
                                    />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="py-16 mt-16"
                    >
                        <div className="container">
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                                Fonctionnalités Avancées
                            </h2>

                            <div className="flex justify-start mb-8">
                                <div className="inline-flex rounded-lg border border-gray-200 ">
                                    <button
                                        onClick={() => setActiveTab('animations')}
                                        className={`px-4 py-2 rounded-l-lg ${activeTab === 'animations'
                                            ? 'bg-primary text-white'
                                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                            }`}
                                    >
                                        Animations
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('interactions')}
                                        className={`px-4 py-2 ${activeTab === 'interactions'
                                            ? 'bg-primary text-white'
                                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                            }`}
                                    >
                                        Interactions
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('responsive')}
                                        className={`px-4 py-2 rounded-r-lg ${activeTab === 'responsive'
                                            ? 'bg-primary text-white'
                                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                            }`}
                                    >
                                        Responsive
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {activeTab === 'animations' && animations.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-center mb-4">
                                            <Icon icon={item.icon} className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {item.description}
                                        </p>
                                        <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                            {item.preview}
                                        </code>
                                    </motion.div>
                                ))}

                                {activeTab === 'interactions' && interactions.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-center mb-4">
                                            <Icon icon={item.icon} className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}

                                {activeTab === 'responsive' && responsive.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-center mb-4">
                                            <Icon icon={item.icon} className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                            Détails techniques
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                                    Technologies utilisées
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="logos:react" className="w-5 h-5" />
                                        <span>React.js</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="logos:nextjs-icon" className="w-5 h-5" />
                                        <span>Next.js</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
                                        <span>Tailwind CSS</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                                    Support inclus
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="fluent:chat-help-24-regular" className="w-5 h-5 text-primary" />
                                        <span>6 mois de support</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="fluent:document-24-regular" className="w-5 h-5 text-primary" />
                                        <span>Documentation détaillée</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="fluent:arrow-sync-24-regular" className="w-5 h-5 text-primary" />
                                        <span>Mises à jour gratuites</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                                    Compatibilité
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="fluent:phone-laptop-24-regular" className="w-5 h-5 text-primary" />
                                        <span>100% Responsive</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="fluent:browser-24-regular" className="w-5 h-5 text-primary" />
                                        <span>Tous navigateurs</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Icon icon="fluent:dark-theme-24-regular" className="w-5 h-5 text-primary" />
                                        <span>Thème sombre</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}