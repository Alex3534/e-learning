export const Navigation01Code = (`
// components/Navigation/navigation.jsx
// npm install react-icons
// "use client"


import { FiX, FiMenu } from "react-icons/fi";
import React, { useState } from 'react';

export const NavigationBar = () => {
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
                                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
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

// page.jsx
import React from "react";
import NavigationBar from "@components/Navigation/navigation.jsx"


export default function Page () {
    return (
        <React.Fragment>
            <header>
                <NavigationBar />
            </header>
        </React.Fragment>
    )
}
`).trim()

export const Navigation02Code = (`
// components/Navigation/navigation.jsx
// npm install react-icons
// "use client"

import { FaAngleDown } from "react-icons/fa";
import { FiX, FiMenu, FiMoon, FiSearch, FiSun, FiUser, FiSettings } from "react-icons/fi";
import React, { useState } from 'react';

export const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState("");

    const handleClickSubmenu = (title) => {
        setIsSubmenu((prev) => (prev == title ? "" : title))
    }

    const menuItems = [
        { title: "Home", href: "#" },
        { title: "About", href: "#" },
        {
            title: "Services",
            submenu: [
                { title: "Consulting", href: "#" },
                { title: "Development", href: "#" },
                { title: "Design", href: "#" }
            ]
        },
        { title: "Contact", href: "#" }
    ];

    const NavLink = ({ item }) => (
        <div className="relative group">
            <a
                href={item.href}
                className="py-2 flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
                {item.title}
                {item.submenu && (
                    <span className="ml-1"><FaAngleDown className="h-4 w-4" /></span>
                )}
            </a>
            {item.submenu && (
                <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    {item.submenu.map((subItem, index) => (
                        <a
                            key={index}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {subItem.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <nav
            className="w-full border-b border-gray-300 z-50 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img
                            className="h-14 w-auto"
                            src="/images/logo/black-logo.png"
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
                            <FiSettings className="h-5 w-5" />
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
                                <FiX className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={\`md:hidden transition-all duration-300 pb-2 ease-in-out \${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }\`}
            >
                <div>
                    <div className="w-full bg-white py-4 px-2 transition-all duration-300 ease-in-out">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    {menuItems.map((item, index) => (
                        item.submenu ? (
                            <div key={index} className="relative">
                                <button
                                    onClick={() => handleClickSubmenu(item.title)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                                >
                                    {item.title}
                                    {item.submenu && (
                                        <span className="ml-1"><FaAngleDown className="h-4 w-4" /></span>
                                    )}
                                </button>
                                {isSubmenu === item.title && (
                                    <div className="ml-4">
                                        {item.submenu && item.submenu.map((submenu, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href={submenu.href}
                                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {submenu.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div key={index} className="relative">
                                <a
                                    href={item.href}
                                    onClick={() => handleClickSubmenu(item.title)}
                                    className="cursor-pointer px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between "
                                >
                                    {item.title}
                                </a>
                            </div>
                        )
                    ))}
                    <div className="flex items-center space-x-4 px-3 py-2">
                        {isDarkMode ? (
                            <FiSun className="h-5 w-5" />
                        ) : (
                            <FiMoon className="h-5 w-5" />
                        )}
                        <FiSettings className="h-5 w-5" />
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};


// page.jsx
import React from "react";
import NavigationBar from "@components/Navigation/navigation.jsx"

export default function Page() {
    return (
        <React.Fragment>
            <header>
                <NavigationBar />
            </header>
            // ...
        </React.Fragment>
    )
}
`).trim()

export const Navigation03Code = (`
// components/Navigation/navigation.jsx
// npm install react-icons
// "use client"

import { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { FiHeart, FiMenu, FiPhone, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import React from "react";

export const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(3);
    const [currency, setCurrency] = useState("USD");
    const [language, setLanguage] = useState("EN");
    const [isSubcategoryOpen, setIsSubcategoryOpen] = useState("");

    const handleClickSubcategory = (title) => {
        setIsSubcategoryOpen((prev) => (prev == title ? "" : title))
    }

    const categories = [
        { title: "Home", href: "#" },
        {
            title: "Women",
            subcategory: [
                { title: "Dresses", href: "#" },
                { title: "Tops", href: "#" },
                { title: "Bottoms", href: "#" }
            ]
        },
        {
            title: "Men", subcategory: [
                { title: "Shirts", href: "#" },
                { title: "Pants", href: "#" },
                { title: "Shoes", href: "#" }
            ]
        },
        {
            title: "Accessories", subcategory: [
                { title: "Bags", href: "#" },
                { title: "Watches", href: "#" },
                { title: "Jewelry", href: "#" }
            ]
        },
        { title: "Sale", href: "#" }
    ]

    return (
        <div className="w-full z-50 transition-all duration-300">
            <div className="bg-gray-50 text-secondary-foreground py-2 text-sm">
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
                    <div className="flex items-center justify-between h-24">
                        <div className="flex items-center">
                            <button
                                className="xl:hidden p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <FaBars className="h-6 w-6 text-gray-600" />
                            </button>
                            <img
                                src="/images/logo/logo.png"
                                alt="Logo"
                                className="h-12 xl:h-14 w-auto cursor-pointer"
                            />
                        </div>

                        <div className="hidden xl:flex items-center space-x-8">
                            {categories.map((category, index) => (
                                <div key={index} className="relative group">
                                    <a
                                        href={category.href}
                                        className="flex items-center space-x-1 py-2 text-foreground hover:text-blue-600 transition-colors"
                                    >
                                        <span>{category.title}</span>
                                        {category.subcategory && (<FaAngleDown className="h-4 w-4" />)}
                                    </a>
                                    {category.subcategory && (
                                        <div className="absolute z-4 left-0 hidden group-hover:block w-48 border border-gray-200 bg-white shadow-lg rounded-md py-2">
                                            {category.subcategory.map((subcat, subIndex) => (
                                                <a key={subIndex} href={subcat.href} className="block px-4 py-2 hover:text-blue-600 transition-colors">
                                                    {subcat.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative border border-gray-300 rounded-full flex-1 max-w-lg hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Search brands, products..."
                                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                <div className={\`xl:hidden \${isMenuOpen ? "block" : "hidden"} px-4\`}>
                    <div className="relative border w-full border-gray-300 rounded-full flex-1 block md:hidden my-6">
                        <input
                            type="text"
                            placeholder="Search brands, products..."
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <FiSearch className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div>
                    {categories.map((category, index) => (
                        category.subcategory ? (
                            <div key={index}>
                                <button
                                    className="block py-2 transition-colors flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600"
                                    onClick={() => handleClickSubcategory(category.title)}
                                >
                                    {category.title}
                                    {category.subcategory && (<FaAngleDown className="h-4 w-4" />)}
                                </button>
                                <div>
                                    {category.subcategory && (
                                        <div className={\`ml-4 \${isSubcategoryOpen === category.title ? "block" : "hidden"}\`}>
                                            {category.subcategory.map((subcat, subIndex) => (
                                                <a key={subIndex} href={subcat.href} className="block px-4 py-2 hover:text-blue-600 transition-colors">
                                                    {subcat.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div key={index}>
                                <a
                                    href={category.href}
                                    className="block py-2 transition-colors flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600"
                                >
                                    {category.title}
                                </a>
                            </div>
                        )
                    ))}
                </div>
            </nav>
        </div>
    );
};

// page.jsx
import React from "react";
import NavigationBar from "@components/Navigation/navigation.jsx"

export default function Page() {
    return (
        <React.Fragment>
            <header>
                <NavigationBar />
                // ...
            </header>
        </React.Fragment>
    )
}
`).trim()

export const Navigation04Code = (`
// components/Navigation/navigation.jsx
// npm install react-icons
// "use client"

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiX, FiMenu, FiMoon, FiSun, FiUser, FiSettings } from "react-icons/fi";

export default function NavigationBar() {

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
                    <aside className={\`relative \${open ? 'w-64' : 'w-24'} transition-all duration-300 bg-white border-r border-gray-200 flex-col hidden md:flex\`}>
                        <span className="absolute right-0 top-0 cursor-pointer border border-gray-400 text-gray-400 w-6 h-6 flex justify-center items-center" onClick={handleOpenNavigation}>{open ? 'x' : '>'}</span>
                        {/* Logo */}
                        <div className="py-4 border-b border-gray-200 flex items-center">
                            <div className="flex items-center justify-center w-full">
                                <img src="/images/logo/logo.png" alt="logo" className="h-14 w-auto" />
                                <span className={\`ml-1 text-xl font-semibold  text-gray-800 \${open ? '' : 'hidden'}\`}>HORIZON Ecrits</span>
                            </div>
                        </div>

                        {/* Main menu */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-2">
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className={\`flex items-center \${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                            <span className={\`ml-3 \${open ? '' : 'hidden'}\`}>Tableau de bord</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={\`flex items-center \${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            <span className={\`ml-3 \${open ? '' : 'hidden'}\`}>Projets</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={\`flex items-center \${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                            </svg>
                                            <span className={\`ml-3 \${open ? '' : 'hidden'}\`}>Tickets</span>
                                            <span className="ml-auto inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full hidden">15</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={\`flex items-center \${open ? '' : 'justify-center'} p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                            </svg>
                                            <span className={\`ml-3 \${open ? '' : 'hidden'}\`}>Équipe</span>
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
                                    <p className={\`text-sm font-medium text-gray-900 \${open ? '' : 'hidden'}\`}>John Doe</p>
                                    <p className={\`text-xs text-gray-500 \${open ? '' : 'hidden'}\`}>Administrateur</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="w-full">
                        <nav className="w-full shadow-sm">
                            <div className="w-full py-4 md:py-6 bg-white flex  justify-between md:justify-end items-center px-4">
                                <div className="flex md:hidden border-gray-200">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/logo/logo.png" alt="" className="h-10 w-auto" />
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
                                        <FiSettings className="h-5 w-5" />
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
                                        {isOpenMobileNavigationBar ? <FiX className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                                    </button>
                                </div>
                            </div>
                            <div className={\`w-full bg-white flex flex-col p-4 transition-all duration-300 space-y-4 \${isOpenMobileNavigationBar ? '' : 'hidden'}\`}>
                                <div className="p-2">
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#" className={\`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                </svg>
                                                <span className="ml-3">Tableau de bord</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={\`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3">Projets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={\`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3">Tickets</span>
                                                <span className="ml-auto inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">15</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className={\`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100\`}>
                                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3">Équipe</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <hr className="mt-3" />
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
                                            <FiSettings className="h-5 w-5" />
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

                        {/* Main content */}
                    </main>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
};
`).trim()

export const Navigation05Code = (`
// components/Navigation/navigation.jsx
// npm install react-icons
// "use client"

import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import React, { useState } from 'react';

export const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 1, name: "Home", href: "#home" },
        { id: 2, name: "About", href: "#about" },
        { id: 3, name: "Services", href: "#services" },
        { id: 4, name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="w-full border-b border-gray-300 bg-gradient-to-r p-4 lg:p-0 from-blue-800 to-emerald-500 z-50 lg:from-white lg:to-white transition-all duration-300">
            <div className="relative">
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white lg:text-black lg:px-10 font-montserrat tracking-wider transform hover:scale-105 transition-transform duration-200 cursor-pointer">HORIZON</h1>
                        </div>
                        <div className="hidden lg:block bg-gradient-to-r from-blue-800 to-emerald-500 py-4 w-6/12" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            <div className="ml-10 flex items-center justify-end pr-10 space-x-8">
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
                                {isOpen ? <FiX className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
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

// page.jsx
import React from "react";
import NavigationBar from "@components/Navigation/navigation.jsx"

export default function Page () {
    return (
        <React.Fragment>
            <header>
                <NavigationBar />
                // ...
            </header>
        </React.Fragment>
    )
}
`).trim()

export const Navigation06Code = (`
// components/Navigation/navigation.jsx
// npm install react-icons
// "use client"


import { FiX, FiMenu, FiMoon, FiSearch, FiSun, FiUser, FiSettings } from "react-icons/fi";
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

export const NavigationBar = () => {
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

    const NavLink = ({ item }) => (
        <div className="relative group">
            <a
                href={item.href}
                className="py-2 flex items-center text-white transition-colors duration-300"
            >
                {item.title}
                {item.submenu && (
                    <span className="ml-1"><FaAngleDown className="h-4 w-4" /></span>
                )}
            </a>
            {item.submenu && (
                <div className="absolute z-10 left-0 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
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
            className="w-full z-50 transition-all duration-300 bg-gradient-to-r from-blue-800 to-emerald-500"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img
                            className="h-14 w-auto"
                            src="/images/logo/white-logo.png"
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <NavLink key={index} item={item} />
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4 text-white">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 hover:text-black"
                            aria-label="Search"
                        >
                            <FiSearch className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full hover:bg-gray-100 hover:text-black"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FiSun className="h-5 w-5" />
                            ) : (
                                <FiMoon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 hover:text-black"
                            aria-label="Language"
                        >
                            <FiSettings className="h-5 w-5" />
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 hover:text-black"
                            aria-label="User account"
                        >
                            <FiUser className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-white hover:bg-gray-100 hover:text-black transition duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FiX className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={\`md:hidden transition-all duration-300 ease-in-out \${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }\`}
            >
                <div className="w-full block md:hidden px-4 transition-all duration-300 ease-in-out">
                    <div className="w-full mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-300" />
                        </div>
                    </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {menuItems.map((item, index) => (
                        item.submenu ? (
                            <div key={index} className="relative group">
                                <a
                                    href={item.href}
                                    className="flex items-center text-white px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.title}
                                    <span className="ml-1"><FaAngleDown className="h-4 w-4" /></span>
                                </a>
                                <div className="absolute z-10 left-0 w-full bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {subItem}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a
                                key={index}
                                href={item.href}
                                className="block text-white px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                {item.title}
                            </a>
                        )
                    ))}
                    <div className="flex items-center space-x-4 px-3 py-2 text-white">
                        {isDarkMode ? (
                            <FiSun className="h-5 w-5" onClick={() => setIsDarkMode(false)} />
                        ) : (
                            <FiMoon className="h-5 w-5" onClick={() => setIsDarkMode(true)} />
                        )}
                        <FiSettings className="h-5 w-5" />
                        <FiUser className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Search overlay */}
            {
                isSearchOpen && (
                    <div className="w-full hidden md:block shadow-lg p-4 transition-all duration-300 ease-in-out">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-300" />
                            </div>
                        </div>
                    </div>
                )
            }
        </nav >
    );
};

// page.jsx
import React from "react";
import NavigationBar from "@components/Navigation/navigation.jsx"

export default function Page() {
    return (
        <React.Fragment>
            <header>
                <NavigationBar />
                // ...
            </header>
        </React.Fragment>
    )
}
`).trim()