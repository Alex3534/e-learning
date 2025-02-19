'use client'

import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <motion.div
                        className='col-span-6 flex flex-col gap-8'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className='text-success text-sm font-semibold text-center lg:text-start'>Transformez vos idées en contenu impactant !</p>
                        </div>
                        <motion.h1
                            className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Donnez vie à vos idées avec Horizon Écrits.
                        </motion.h1>
                        <motion.h3
                            className="text-black/70 text-lg pt-5 lg:pt-0"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Besoin de contenus percutants et d’un site qui vous ressemble ? Je mets mes compétences en rédaction web, SEO et développement sur mesure à votre service. Ensemble, donnons vie à vos idées avec des mots justes et des solutions digitales captivantes !
                        </motion.h3>
                        <motion.div
                            className="relative rounded-full d-flex justify-content-end mt-5 pt-5 lg:pt-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {/* <input type="Email address" name="q" className="py-6 lg:py-8 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="Rechercher ..." autoComplete="off" />
                            <button className="bg-secondary p-5 rounded-full absolute right-2 top-2 ">
                                <Icon
                                    icon="solar:magnifer-linear"
                                    className="text-white text-4xl inline-block"
                                />
                            </button> */}
                            <Link
                                href="#"
                                className="bg-primary hover:bg-primary/15 text-white hover:text-primary px-16 py-5 rounded-full text-lg font-medium"
                            >
                                Commencer
                            </Link>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-between pt-10 lg:pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            {[
                                "Rédaction optimisée",
                                "Développement sur mesure",
                                "Accompagnement personnalisé",
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                >
                                    <Image
                                        src="/images/banner/check-circle.svg"
                                        alt="check-image"
                                        width={30}
                                        height={30}
                                        className="smallImage"
                                    />
                                    <p className="text-sm sm:text-lg font-normal text-black">{text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='col-span-6 flex justify-center'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image src="/images/banner/1.png" alt="nothing" width={1200} height={1000} />
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default Hero;
