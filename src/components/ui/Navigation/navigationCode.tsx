export const Navigation01Code = (
    `
import React, { useState } from "react";

export const FaClose = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </React.Fragment>
    )
}

export const FaBars = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
        </React.Fragment>
    )
}

export const Navigation01 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 1, name: "Home", href: "#home" },
        { id: 2, name: "About", href: "#about" },
        { id: 3, name: "Services", href: "#services" },
        { id: 4, name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="w-full z-50 transition-all duration-300">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-emerald-500" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white font-montserrat tracking-wider transform hover:scale-105 transition-transform duration-200 cursor-pointer">HORIZON</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className="text-white hover:scale-105 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <FaClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className="text-white hover:scale-105 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
`
)