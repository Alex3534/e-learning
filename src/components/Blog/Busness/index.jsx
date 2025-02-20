"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IAData } from "@/app/api/data";
import Image from "next/image";
import { motion } from "framer-motion";

const OnlineBusness = () => {

    return (
        <section id="courses" className="bg-gray-100">
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
                            <h1 className="text-3xl font-bold">
                                Comment se lancer dans l’e-commerce en ligne ?
                            </h1>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-gray-500">Il y a 1jour</span>
                                <span className="text-gray-500">• 200 vues</span>
                            </div>
                            <div className="mt-4 p-0">
                                <img src="/images/busness/1.jpg" alt="#" style={{ width: "100%", height: "400px" }} className="rounded-xl border my-6" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">
                                    Qu’est-ce que l’e-commerce en ligne?
                                </h4>
                                <p className="mt-4">
                                    Derrière ce terme un peu technique se cache une réalité simple et profondément humaine : l’e-commerce, ou commerce en ligne, est avant tout une nouvelle façon de connecter les gens. Il s’agit d’acheter et de vendre des produits ou des services via Internet, mais c’est bien plus qu’une simple transaction. C’est une révolution qui a transformé la manière dont nous, consommateurs et entrepreneurs, interagissons au quotidien.
                                </p>
                                <p className="mt-4">
                                    Imaginez : vous êtes chez vous, un café à la main, et en quelques clics, vous pouvez acheter un cadeau pour un proche, commander un produit rare venant de l’autre côté du monde, ou même lancer votre propre boutique en ligne pour partager votre passion avec des clients du monde entier. L’e-commerce, c’est cette liberté d’accéder à ce dont vous avez besoin, 24 heures sur 24, sans frontières géographiques.
                                </p>
                                <p className="mt-4">
                                    Que ce soit à travers une boutique en ligne personnalisée, une marketplace comme Amazon, ou encore le dropshipping (où vous vendez des produits sans avoir à gérer de stock), l’e-commerce s’est imposé comme un pilier incontournable du commerce moderne. Mais au-delà des chiffres et des technologies, il reste avant tout une histoire de connexion, de confiance et de partage entre des personnes. Et c’est ce qui en fait une aventure aussi passionnante !
                                </p>
                            </div>
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
                            <h2 className="text-xl font-bold mb-2">Lancez votre activité</h2>
                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, excepturi?</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full rounded-full">valider</button>
                        </motion.div>
                        <motion.div
                            className="mt-4 bg-white p-4 rounded-3xl shadow-lg text-center p-8 mt-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <p className="mt-2">Abonnez-vous à la newsletter</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default OnlineBusness;
