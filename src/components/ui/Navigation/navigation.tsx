'use client'

import React, { useEffect, useState } from "react";

export const FaClose: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </React.Fragment>
    )
}

export const FaBars: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
        </React.Fragment>
    )
}

export const FiMoon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiCog: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiUser: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiMenu: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
            </svg>
        </React.Fragment>
    )
}

export const FiSearch: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiPhone: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
            </svg>

        </React.Fragment>
    )
}

export const FiAngleDown: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
            </svg>
        </React.Fragment>
    )
}

export const FiSun: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiHeart: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
            </svg>

        </React.Fragment>
    )
}

export const FiShoppingCart: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
            </svg>
        </React.Fragment>
    )
}

export const Navigation01: React.FC = () => {
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
                        <div className="md:hidden transition-all duration-300 ease-in-out">
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

export const Navigation02 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const menuItems = [
        { title: "Home", href: "#" },
        { title: "About", href: "#" },
        {
            title: "Services",
            href: "#",
            submenu: ["Consulting", "Development", "Design"]
        },
        { title: "Contact", href: "#" }
    ];

    const NavLink: React.FC<{ item: { title: string; href: string; submenu?: string[] } }> = ({ item }) => (
        <div className="relative group">
            <a
                href={item.href}
                className="py-2 flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
                {item.title}
                {item.submenu && (
                    <span className="ml-1"><FiAngleDown className="h-4 w-4" /></span>
                )}
            </a>
            {item.submenu && (
                <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    {item.submenu.map((subItem, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {subItem}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <nav
            className="w-full z-50 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img
                            className="h-16 w-auto"
                            src="/images/logo/Horizon ecrits.png"
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <NavLink key={index} item={item} />
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label="Search"
                        >
                            <FiSearch className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FiSun className="h-5 w-5" />
                            ) : (
                                <FiMoon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label="Language"
                        >
                            <FiCog className="h-5 w-5" />
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label="User account"
                        >
                            <FiUser className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FaClose className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                            {item.title}
                        </a>
                    ))}
                    <div className="flex items-center space-x-2 px-3 py-2">
                        <FiSearch className="h-5 w-5" />
                        {isDarkMode ? (
                            <FiSun className="h-5 w-5" />
                        ) : (
                            <FiMoon className="h-5 w-5" />
                        )}
                        <FiCog className="h-5 w-5" />
                        <FiUser className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Search overlay */}
            {isSearchOpen && (
                <div className="w-full bg-white shadow-lg p-4 transition-all duration-300 ease-in-out">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export const Navigation03 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(3);
    const [currency, setCurrency] = useState("USD");
    const [language, setLanguage] = useState("EN");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = ["Women", "Men", "Kids", "Accessories", "Brands", "Sale"];

    return (
        <div className={`w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
            <div className="bg-gray-100 text-secondary-foreground py-2 text-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center">
                            <FiPhone className="mr-2" />
                            <span>1-800-FASHION</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <select
                                className="bg-transparent focus:outline-none"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                            <select
                                className="bg-transparent focus:outline-none"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="EN">English</option>
                                <option value="ES">Español</option>
                                <option value="FR">Français</option>
                            </select>
                        </div>
                    </div>
                    <p className="text-center flex-1 md:flex-none">Free Shipping on Orders Over $100</p>
                </div>
            </div>

            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <button
                                className="md:hidden p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <FiMenu className="h-6 w-6" />
                            </button>
                            <img
                                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
                                alt="Logo"
                                className="h-10 w-auto cursor-pointer"
                            />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            {categories.map((category) => (
                                <div key={category} className="relative group">
                                    <button className="flex items-center space-x-1 py-2 text-foreground hover:text-blue-600 transition-colors">
                                        <span>{category}</span>
                                        <FiAngleDown className="h-4 w-4" />
                                    </button>
                                    <div className="absolute z-4 left-0 hidden group-hover:block w-48 border bg-white shadow-lg rounded-md py-2">
                                        <a href="#" className="block px-4 py-2 hover:text-blue-600 transition-colors">Subcategory 1</a>
                                        <a href="#" className="block px-4 py-2 hover:text-blue-600 transition-colors">Subcategory 2</a>
                                        <a href="#" className="block px-4 py-2 hover:text-blue-600 transition-colors">Subcategory 3</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative border rounded-full flex-1 max-w-lg hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Search brands, products..."
                                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <FiSearch className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            </div>

                            <button className="p-2 hover:text-blue-600 transition-colors" aria-label="User account">
                                <FiUser className="h-6 w-6" />
                            </button>
                            <button className="p-2 hover:text-blue-600 transition-colors" aria-label="Wishlist">
                                <FiHeart className="h-6 w-6" />
                            </button>
                            <button className="p-2 hover:text-blue-600 transition-colors relative" aria-label="Shopping cart">
                                <FiShoppingCart className="h-6 w-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} px-4`}>
                    <div className="relative border rounded-full flex-1 max-w-lg block md:hidden my-6">
                        <input
                            type="text"
                            placeholder="Search brands, products..."
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <FiSearch className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div>
                    {categories.map((category) => (
                        <a
                            key={category}
                            href="#"
                            className="block py-2 transition-colors"
                        >
                            {category}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export const Navigation04 = () => {

    const [open, isOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isOpenMobileNavigationBar, setIsOpenMobileNavigationBar] = useState(false)

    const handleOpenNavigation = () => {
        isOpen(!open)
    }

    const handleOpenMobilNavigationBar = () => {
        setIsOpenMobileNavigationBar(!isOpenMobileNavigationBar)
    }

    return (
        <React.Fragment>
            <React.Fragment>
                <div className="flex min-h-screen bg-gray-50">
                    {/* Sidebar */}
                    <aside className={`relative ${open ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r border-gray-200 flex-col hidden md:flex`}>
                        <span className="absolute right-0 top-0 cursor-pointer border border-gray-400 text-gray-400 w-6 h-6 flex justify-center items-center" onClick={handleOpenNavigation}>{open ? 'x' : '>'}</span>
                        {/* Logo */}
                        <div className="py-4 border-b border-gray-200">
                            <div className="flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                                </svg>
                                <span className={`ml-2 text-xl font-semibold text-gray-800 ${open ? '' : 'hidden'}`}>HORIZON</span>
                            </div>
                        </div>

                        {/* Menu principal */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-2">
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className={`flex items-center ${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                            <span className={`ml-3 ${open ? '' : 'hidden'}`}>Tableau de bord</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`flex items-center ${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            <span className={`ml-3 ${open ? '' : 'hidden'}`}>Projets</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`flex items-center ${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                            </svg>
                                            <span className={`ml-3 ${open ? '' : 'hidden'}`}>Tickets</span>
                                            <span className="ml-auto inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full hidden">15</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`flex items-center ${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                            </svg>
                                            <span className={`ml-3 ${open ? '' : 'hidden'}`}>Équipe</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* User profile */}
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full" src="/images/Avatars/avatar4.png" alt="User" />
                                <div className="ml-3">
                                    <p className={`text-sm font-medium text-gray-900 ${open ? '' : 'hidden'}`}>John Doe</p>
                                    <p className={`text-xs text-gray-500 ${open ? '' : 'hidden'}`}>Administrateur</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="w-full">
                        <nav className="w-full shadow-sm">
                            <div className="w-full py-4 bg-white flex  justify-between md:justify-end items-center px-4">
                                <div className="flex md:hidden border-gray-200">
                                    <div className="flex items-center justify-center">
                                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center space-x-4">
                                    <button
                                        onClick={() => setIsDarkMode(!isDarkMode)}
                                        className="p-2 rounded-full hover:bg-gray-100"
                                        aria-label="Toggle dark mode"
                                    >
                                        {isDarkMode ? (
                                            <FiSun className="h-5 w-5" />
                                        ) : (
                                            <FiMoon className="h-5 w-5" />
                                        )}
                                    </button>
                                    <button
                                        className="p-2 rounded-full hover:bg-gray-100"
                                        aria-label="Language"
                                    >
                                        <FiCog className="h-5 w-5" />
                                    </button>
                                    <button
                                        className="p-2 rounded-full hover:bg-gray-100"
                                        aria-label="User account"
                                    >
                                        <FiUser className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="flex md:hidden items-center space-x-4">
                                    <button
                                        className="p-2 rounded-full hover:bg-gray-100"
                                        aria-label="Search"
                                        onClick={handleOpenMobilNavigationBar}
                                    >
                                        {isOpenMobileNavigationBar ? <FaClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                                    </button>
                                </div>
                            </div>
                            <div className={`w-full bg-white flex flex-col p-4 transition-all duration-300 space-y-4 ${isOpenMobileNavigationBar ? '' : 'hidden'}`}>
                                <div className="p-2">
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#" className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                </svg>
                                                <span className="ml-3">Tableau de bord</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3">Projets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3">Tickets</span>
                                                <span className="ml-auto inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">15</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3">Équipe</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr className="mt-3"/>
                                    <div className="flex md:hidden items-center space-x-4 mt-3">
                                        <button
                                            onClick={() => setIsDarkMode(!isDarkMode)}
                                            className="p-2 rounded-full hover:bg-gray-100"
                                            aria-label="Toggle dark mode"
                                        >
                                            {isDarkMode ? (
                                                <FiSun className="h-5 w-5" />
                                            ) : (
                                                <FiMoon className="h-5 w-5" />
                                            )}
                                        </button>
                                        <button
                                            className="p-2 rounded-full hover:bg-gray-100"
                                            aria-label="Language"
                                        >
                                            <FiCog className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="p-2 rounded-full hover:bg-gray-100"
                                            aria-label="User account"
                                        >
                                            <FiUser className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="p-4 mt-10">
                            <h1 className="text-2xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</h1>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex corrupti, nam deserunt vitae temporibus in ipsam culpa vero blanditiis autem ab perspiciatis sapiente omnis voluptates. Facere unde aspernatur praesentium.</p>
                        </div>

                        {/* Contenu principal ici */}
                    </main>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
};

export const Navigation05: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 1, name: "Home", href: "#home" },
        { id: 2, name: "About", href: "#about" },
        { id: 3, name: "Services", href: "#services" },
        { id: 4, name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="w-full bg-gradient-to-r p-4 lg:p-0 from-blue-800 to-emerald-500 z-50 lg:from-white lg:to-white transition-all duration-300">
            <div className="relative">
                <div className="relative max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white lg:text-black lg:px-10 font-montserrat tracking-wider transform hover:scale-105 transition-transform duration-200 cursor-pointer">HORIZON</h1>
                        </div>
                        <div className="hidden lg:block bg-gradient-to-r from-blue-800 to-emerald-500 py-4 w-6/12" style={{clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)"}}>
                            <div className="ml-10 flex items-center justify-center space-x-8">
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
                        <div className="lg:hidden">
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
                        <div className="lg:hidden">
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
