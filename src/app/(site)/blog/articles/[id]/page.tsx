"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import articles from "@/app/api/articles/data";

const OnlineBusness = () => {

    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const article = articles.find(item => item.id === Number(id));

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <section id="courses" className="bg-gray-100">
            <div className="block lg:hidden">
                <button onClick={openModal}
                    id="toast-bottom-left"
                    className="fixed flex items-center text-blue-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-full bottom-6 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                    role="alert">
                    <Icon icon="mdi:information" style={{ fontSize: "55px" }} />
                </button>
            </div>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="rounded-lg p-8 z-10 w-11/12">
                        <div>
                            <div className="bg-white rounded-3xl shadow-lg w-full">
                                {/* Social Media Icons */}
                                <div className="flex justify-center items-center py-4 space-x-2">
                                    <a href="#" className="text-blue-500 flex justify-center">
                                        <Icon icon="mdi:facebook" className="w-10 h-10" />
                                    </a>
                                    <a href="#" className="text-blue-500 flex justify-center">
                                        <Icon icon="mdi:twitter" className="w-10 h-10" />
                                    </a>
                                    <a href="#" className="text-blue-500 flex justify-center">
                                        <Icon icon="mdi:linkedin" className="w-10 h-10" />
                                    </a>
                                </div>
                            </div>


                            {/* Sidebar Right */}
                            <div className="w-full mt-4">
                                <div
                                    className="bg-white p-8 rounded-3xl shadow-lg"
                                >
                                    <h2 className="text-xl font-bold mb-2">Besoin d’un site e-commerce clé en main 🚀 ?</h2>
                                    <p className="mb-4">Nous créons votre boutique en ligne professionnelle, optimisée et prête à vendre ! Faites le premier pas vers votre succès en ligne dès aujourd’hui.</p>
                                    <button className="bg-blue-500 text-white px-4 py-4 rounded w-full rounded-full">Créer maintenant</button>
                                </div>
                                <div
                                    className="mt-4 bg-white rounded-3xl shadow-lg text-center p-8"
                                >
                                    <h2 className="text-xl font-bold mb-2">Newsletter</h2>
                                    <p>
                                        Abonnez-vous à notre newsletter pour des réductions, des promotions et bien plus encore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-full mt-8">
                            Fermer
                        </button>
                    </div>
                </motion.div>
            )}
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 mt-20'>
                <div className="flex flex-col lg:flex-row md:justify-between w-full mx-auto px-0">
                    {/* Sidebar */}
                    <motion.div
                        className="w-full lg:w-20 lg:block hidden"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white rounded-3xl shadow-lg w-full">
                            {/* Social Media Icons */}
                            <div className="flex lg:flex-col justify-center space-y-4 py-8 space-x-2">
                                <a href="#" className="text-blue-500 flex justify-center">
                                    <Icon icon="mdi:facebook" className="w-10 h-10" />
                                </a>
                                <a href="#" className="text-blue-500 flex justify-center">
                                    <Icon icon="mdi:twitter" className="w-10 h-10" />
                                </a>
                                <a href="#" className="text-blue-500 flex justify-center">
                                    <Icon icon="mdi:linkedin" className="w-10 h-10" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        className="w-full lg:w-8/12 lg:px-5"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="shadow-lg rounded-3xl bg-white p-8">
                            <div>
                                <h1 className="text-3xl font-bold">
                                    {article?.title}
                                </h1>
                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-gray-500">Il y a 1jour</span>
                                    <span className="text-gray-500">• 200 vues</span>
                                </div>
                            </div>
                            {
                                article?.sections.map((section, index) => {
                                    const displayIndex = index + 1;
                                    return (
                                        <div className="mt-8">
                                            <div className="mt-4 p-0">
                                                <img
                                                    src={section.image}
                                                    alt="Business Image"
                                                    className="rounded-xl custom-image"
                                                />
                                            </div>
                                            <div className="mt-8">
                                                <h4 className="text-2xl font-bold mt-8">
                                                    {displayIndex}) {section.title}
                                                </h4>
                                                <div>
                                                    {section.content.map((item, idx) =>
                                                        item.type === "paragraph" ? (
                                                            <p key={idx} className="mt-4">
                                                                {item.content as string}
                                                            </p>
                                                        ) : (
                                                            <div key={idx} className="mt-4 ml-8">
                                                                <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                                                                    {(item.content as { title: string; content?: string; contentStyle?: string | string[] }[]).map((listContent, index) => (
                                                                        <li key={index}>
                                                                            <span className="text-lg font-bold">{listContent.title}</span>
                                                                            <p className="ml-6">
                                                                                {
                                                                                    listContent.content
                                                                                        ? listContent.content
                                                                                        : <ul className="space-y-2 mt-2 text-left text-gray-500 dark:text-gray-400 ml-10">
                                                                                            {
                                                                                                Array.isArray(listContent.contentStyle) && listContent.contentStyle.map((item: string, index: number) => (
                                                                                                    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                                                                                                        <svg
                                                                                                            className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                                                                                            aria-hidden="true"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            fill="none"
                                                                                                            viewBox="0 0 16 12"
                                                                                                        >
                                                                                                            <path
                                                                                                                stroke="currentColor"
                                                                                                                strokeLinecap="round"
                                                                                                                strokeLinejoin="round"
                                                                                                                strokeWidth="2"
                                                                                                                d="M1 5.917 5.724 10.5 15 1.5"
                                                                                                            />
                                                                                                        </svg>
                                                                                                        <span>{item}</span>
                                                                                                    </li>
                                                                                                ))
                                                                                            }
                                                                                        </ul>
                                                                                }
                                                                            </p>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </motion.div>

                    {/* Sidebar Right */}
                    <div className="w-full md:w-3/12 lg:block hidden">
                        <motion.div
                            className="bg-white p-4 rounded-3xl shadow-lg p-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <h2 className="text-xl font-bold mb-2">Besoin d’un site e-commerce clé en main 🚀 ?</h2>
                            <p className="mb-4">Nous créons votre boutique en ligne professionnelle, optimisée et prête à vendre ! Faites le premier pas vers votre succès en ligne dès aujourd’hui.</p>
                            <button className="bg-blue-500 text-white px-4 py-4 rounded w-full rounded-full">Créer maintenant</button>
                        </motion.div>
                        <motion.div
                            className="mt-4 bg-white p-4 rounded-3xl shadow-lg p-8 mt-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <h2 className="text-xl font-bold mb-2">Newsletter</h2>
                            <p>
                                Abonnez-vous à notre newsletter pour des réductions, des promotions et bien plus encore.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default OnlineBusness;
