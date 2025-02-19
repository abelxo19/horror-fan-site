"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo-2.png";
import Link from "next/link";
import ShinyButton from "@/components/shiny-button";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolling ? "bg-black/80 backdrop-blur-md shadow-lg my-[-5px]" : "bg-transparent" 
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 ">
          <Link href="/">
            <Image src={Logo} alt="Logo-Image" width={70} height={70} />
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-black">
              Home
            </Link>
            <Link href="#features" className="text-white hover:text-black">
              Features
            </Link>
            <Link href="#pricing" className="text-white hover:text-black">
              Movies
            </Link>
            <Link href="#contact" className="text-white hover:text-black">
              Contact
            </Link>
          </nav>
          <ShinyButton text="Get Started" />
        </div>
      </div>
    </header>
  );
};

export default Header;
