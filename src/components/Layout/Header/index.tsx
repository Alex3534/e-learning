"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 bg-white ${sticky ? " shadow-lg py-5" : "shadow-none py-6"
        }`}
    >
      <motion.div
        className="lg:py-0 py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <h2 className="text-4xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Horizon Ecrits</span></h2>
          <nav className="hidden xl:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden xl:block transition duration-300 px-16 py-5 rounded-full text-lg font-medium ${pathname == "/contact" ? "text-primary bg-white border-primary border-2 hover:bg-primary hover:text-white" : "bg-primary border-2 border-transparent text-white hover:border-primary hover:text-primary hover:bg-white"} `}
            >
              Contact
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block xl:hidden p-2 rounded-lg border"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-gray-300"></span>
              <span className="block w-6 h-0.5 bg-gray-300 mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-300 mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-2xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Horizon Ecrits</span></h2>

            {/* close side bar */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-red w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close menu Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-black hover:text-primary text-24 inline-block me-2"
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-4 flex flex-col space-y-4 w-full">
              <Link
                href="/contact"
                className={`border px-4 py-2 rounded-lg transition duration-300 ${pathname == "/contact" ? "text-primary border-primary hover:bg-primary hover:text-white" : "hover:text-primary hover:border-primary hover:bg-white bg-primary text-white hover:white border-transparent"}`}
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
