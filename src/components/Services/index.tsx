"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { servicesData } from "@/data/servicesData";

const Services = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <>

            {/* Hero Section */}
            <section className='text-center mt-20 bg-gray-100' >
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                    >
                        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
                            Des Services Sur Mesure Pour Votre Succès Digital
                        </h1>
                        <p className="text-base text-body-color dark:text-body-color-dark">
                            Nous vous accompagnons dans le développement de votre présence en ligne avec des solutions adaptées à vos besoins.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-6">
                                    <Icon
                                        icon={service.icon}
                                        className="w-10 h-10 text-primary mr-4"
                                    />
                                    <h3 className="text-xl font-bold text-black dark:text-white">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="mb-6 text-body-color dark:text-body-color-dark">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-body-color dark:text-body-color-dark"
                                        >
                                            <Icon
                                                icon="fluent:checkmark-circle-24-regular"
                                                className="w-5 h-5 text-primary mr-2"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                            Prêt à Développer Votre Présence En Ligne ?
                        </h2>
                        <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition duration-300 ease-in-out transform bg-primary rounded-lg hover:bg-opacity-90 hover:shadow-lg"
                        >
                            Contactez-nous
                            <Icon
                                icon="fluent:arrow-right-24-regular"
                                className="w-5 h-5 ml-2"
                            />
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Services;