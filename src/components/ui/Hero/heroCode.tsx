export const Hero01Code = (
`
// 'use client'
// components/HeroSection.jsx
// npm install react-icons

import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import React from "react";


export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
            </div>

            <div className="relative container mx-auto px-4 py-24 min-h-screen flex items-center">
                <div className={\`max-w-4xl mx-auto text-center transform transition-all duration-1000 \${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}"}
        \`}>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Transform Your Digital Experience with Innovation
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                        Empower your business with cutting-edge solutions that drive growth and deliver exceptional results in the digital landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group"
                            onClick={() => console.log("CTA clicked")}
                        >
                            Get Started Now
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </button>

                        <button
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20"
                            onClick={() => console.log("Secondary CTA clicked")}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// app/page.jsx
import { HeroSection } from "@/components/HeroSection";

export default function Page() {
    return (
        <div className="relative">
            <HeroSection />

            // ...
        </div>
    );
}
`
).trim();

export const Hero02Code = (
`
'use client';
// components/HeroSection.jsx
// npm install react-icons 

import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';


export const VideoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl p-4">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                    Close
                </button>
                <div className="aspect-video w-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/your-video-id"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-900">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')"
                }}
            />

            <div className="relative container mx-auto px-4 py-32 min-h-screen flex items-center">
                <div className={\`w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 \${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}\`}>
                    <div className="text-left">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                                Innovation at its finest
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Elevate Your Digital Presence
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Create stunning digital experiences that captivate your audience and drive meaningful results for your business.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
                                onClick={() => console.log("CTA clicked")}
                            >
                                Get Started
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <button
                                className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <FaPlay className="h-4 w-4" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <img
                                        key={i}
                                        src={\`https://randomuser.me/api/portraits/men/\${i}.jpg\`}
                                        alt={\`User \${i}\`}
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-gray-300">
                                <strong className="block text-white">Trusted by 1000+</strong>
                                satisfied customers
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                                    <FaArrowRight className="text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Feature {i}</h3>
                                <p className="text-gray-400 text-sm">Brief description of the amazing feature that your product offers.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
        </div>
    );
};

// app/page.jsx
import { HeroSection } from "@/components/HeroSection";
import React from 'react';

export default function Page() {
    return (
        <React.Fragment>
            <HeroSection />

            // ...
        </React.Fragment>
    )
}
`
).trim()

export const Hero03Code = (
`
'use client';

// app/page.jsx
// npm install react-icons

import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaHeadset, FaLock, FaPlay, FaShoppingCart, FaTruck } from 'react-icons/fa';

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-900">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3')"
                }}
            />

            <div className="relative container mx-auto px-4 py-32 min-h-screen flex items-center">
                <div className={\`w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 \${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}\`}>
                    <div className="text-left">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-medium">
                                Free Shipping Worldwide
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Discover Premium Quality Products
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Shop the latest trends with confidence. Premium quality, competitive prices, and exceptional customer service.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 group"
                                onClick={() => console.log("Shop Now clicked")}
                            >
                                Shop Now
                                <FaShoppingCart className="group-hover:scale-110 transition-transform duration-300" />
                            </button>

                            <button
                                className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
                            >
                                <FaPlay className="h-4 w-4" />
                                View Collection
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">★★★★★</span>
                                <span className="text-white font-semibold">4.9/5</span>
                            </div>
                            <div className="text-sm text-gray-300">
                                <strong className="block text-white">10,000+ Reviews</strong>
                                Happy Customers
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                                <FaTruck className="text-white" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Free Shipping</h3>
                            <p className="text-gray-400 text-sm">Free worldwide shipping on all orders over $100.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                                <FaLock className="text-white" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Secure Payment</h3>
                            <p className="text-gray-400 text-sm">100% secure payment processing with encryption.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                                <FaHeadset className="text-white" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-400 text-sm">Round-the-clock customer support for your needs.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                                <FaArrowRight className="text-white" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Easy Returns</h3>
                            <p className="text-gray-400 text-sm">30-day return policy for peace of mind shopping.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

import HeroSection from './HeroSection';
import React from 'react';

export default function Page() {
    return (
        <React.Fragment>
            <HeroSection />

            // ...
        </React.Fragment>
    )
}
`
).trim()

export const Hero04Code = (
`
// components/HeroSection.jsx
import React from "react";

export const HeroSection = () => {
    return (
        <React.Fragment>
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Découvrez nos <span className="text-blue-600">nouvelles collections</span> d'été
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Des vêtements stylés, confortables et à prix abordables pour renouveler votre garde-robe.
                        </p>
                        <div className="flex gap-4">
                            <a href="/shop" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
                                Découvrir la boutique
                            </a>
                            <a href="/collections" className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg">
                                Voir les collections
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Nouveautés" className="w-full h-auto rounded-xl shadow-lg" />
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

// app/page.jsx
import { HeroSection } from "@/components/HeroSection";

export default function Page() {
    return (
        <React.Fragment>
            <HeroSection />

            / ...
        </React.Fragment>
    );
}
`).trim();

export const Hero05Code = (
`
// components/HeroSection.jsx

export const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 rounded-xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Texte et CTA */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                        Découvrez notre collection exclusive
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Des produits de qualité, livrés rapidement à votre porte.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#produits"
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
                        >
                            Voir les produits
                        </a>
                        <a
                            href="#promo"
                            className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Offres spéciales
                        </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-700">4.9/5 (500+ avis)</span>
                    </div>
                </div>

                {/* Image Hero */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Nouveautés" className="w-full h-auto rounded-xl shadow-lg" />
                </div>
            </div>
        </section>
    );
};

// app/page.jsx
import { HeroSection } from '@/components/HeroSection';

export default function Page() {  
    return (
        <>
            <HeroSection />
        </>
    );
}
`
).trim();