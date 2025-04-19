import React, { useEffect, useState } from "react";

export const FaClose: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </React.Fragment>
    )
}

export const FaBars: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
        </React.Fragment>
    )
}

export const FiMoon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiCog: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiUser: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiMenu: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
            </svg>
        </React.Fragment>
    )
}

export const FiSearch: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
        </React.Fragment>
    )
}

export const FiAngleDown: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
            </svg>
        </React.Fragment>
    )
}

export const FiSun: React.FC<{ className: string }> = ({ className }) => {
    return (
        <React.Fragment>
            <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
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
                <div className="absolute left-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
                    {item.submenu.map((subItem, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
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
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="Search"
                        >
                            <FiSearch className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FiSun className="h-5 w-5" />
                            ) : (
                                <FiMoon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="Language"
                        >
                            <FiCog className="h-5 w-5" />
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="User account"
                        >
                            <FiUser className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
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
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                            />
                            <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};