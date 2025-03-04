"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
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
              href="#"
              className="hidden xl:block bg-primary text-white hover:bg-primary/15 hover:text-primary px-16 py-5 rounded-full text-lg font-medium"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              Connexion
            </Link>
            {isSignInOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                <div
                  ref={signInRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="tabler:currency-xrp"
                      className="text-black hover:text-primary text-24 inline-block me-2"
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            <Link
              href="#"
              className="hidden xl:block bg-primary/15 hover:bg-primary text-primary hover:text-white px-16 py-5 rounded-full text-lg font-medium"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              Inscription
            </Link>
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                <div
                  ref={signUpRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white backdrop-blur-md px-8 pt-14 pb-8 text-center"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign Up Modal"
                  >
                    <Icon
                      icon="tabler:currency-xrp"
                      className="text-black hover:text-primary text-24 inline-block me-2"
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
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
                href="#"
                className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Connexion
              </Link>
              <Link
                href="#"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Inscription
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
