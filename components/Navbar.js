'use client';

import DoubleLLogo from "./DoubleLLogo";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="absolute top-0 px-5 py-5 z-20 flex justify-between w-full items-center font-bodyFont text-white ">
        <div className=""><Link className="" href='/'>Browse Villas</Link></div>
        <div className="w-fit ">
             <DoubleLLogo fill='white' />
        </div>
        <div className=""><Link href={"/"}>Contact Us</Link></div>
       
    </nav>
    
)
    
}

export default Navbar;
