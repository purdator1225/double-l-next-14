'use client';

import DoubleLLogo from "./DoubleLLogo";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Define all navigation links in one array
  const links = [

     { href: '/', label: 'Home' },
    { href: '#villas', label: 'Our Villas' },
    { href: '/book', label: 'Book Now' },
  ];

  // Toggle hamburger menu visibility
  const toggleMenu = () => setOpen(!isOpen);

  // Scroll behavior for hiding/showing navbar
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full z-20 px-5 py-5 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} 
      ${isOpen ? 'bg-[#F0E2D5] bg-opacity-90' : ''}`}
    >
      <div className="flex justify-between items-center w-full font-bodyFont text-white">

          {/* Logo */}
        <div className="w-fit z-20">
          <Link href={'/'}><DoubleLLogo fill={isOpen ? 'black':'white'} /></Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-gray-300">
              {link.label}
            </Link>
          ))}
        </div>

    

        {/* Hamburger/Cross Icon for Mobile */}
        <div className="block md:hidden z-20">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <svg className={`w-6 h-6 ${isOpen ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className={`w-6 h-6 ${isOpen ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-150%" }}
            animate={{ y: 0 }}
            exit={{ y: "-150%" }}
            transition={{ duration: 0.5 }}
            className={`fixed top-full inset-x-0 z-10 bg-[#F0E2D5] bg-opacity-90 flex flex-col items-center justify-center  space-y-6 p-10 ${isOpen ? 'text-black' : 'text-white'}`}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.href} onClick={() => setOpen(false)} className="text-2xl font-bodyFont">
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
