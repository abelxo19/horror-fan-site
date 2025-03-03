"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "@/public/logo-2.png"
import Link from "next/link"
import { Button } from "./ui/button"
import HorrorAudio from "@/components/audio"
import { Menu, X } from "lucide-react"

// This component is now client-side since we need interactivity for the mobile menu
interface User {
  id: string;
  name: string;
  email: string;
}

const Header = ({ user }: { user: User | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? " py-1 " : "py-1"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4">
          <Link href="/" className="relative z-40">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="Logo-Image"
              width={70}
              height={70}
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-48 items-center">
            <nav className="bg-[#232e44] text-base rounded-full px-8 py-3 flex items-center space-x-8 border border-gray-800">
              <Link href="/" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Movies
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Authentication Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2 z-30">
            {!user ? (
              <>
                <Link href="/api/auth/register">
                  <Button size="lg" className="bg-black text-white hover:bg-[#232e44]">
                    Get Started
                  </Button>
                </Link>
                <Link href="/api/auth/login">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-300 hover:text-black">
                    Login
                  </Button>
                </Link>
                <div className="ml-2">
                  <HorrorAudio />
                </div>
              </>
            ) : (
              <Link href="/dashboard">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#0f172a]/95 backdrop-blur-sm flex flex-col justify-center items-center z-30 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center space-y-6 mb-10">
            <Link
              href="/"
              className="text-white hover:text-gray-300 text-xl font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-white hover:text-gray-300 text-xl font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white hover:text-gray-300 text-xl font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-gray-300 text-xl font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Authentication Buttons - Mobile */}
          <div className="flex flex-col space-y-3 items-center">
            {!user ? (
              <>
                <Link href="/api/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="lg" className="w-full bg-black text-white hover:bg-[#232e44]">
                    Get Started
                  </Button>
                </Link>
                <Link href="/api/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button size="lg" className="w-full bg-white text-black hover:bg-gray-300 hover:text-black">
                    Login
                  </Button>
                </Link>
                <div className="mt-4">
                  <HorrorAudio />
                </div>
              </>
            ) : (
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

