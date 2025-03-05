"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "@/public/logo-2.png"
import Link from "next/link"
import { Button } from "./ui/button"
import HorrorAudio from "@/components/audio"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

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

  // Animation variants
  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth entrance
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      rotateX: -15,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6,
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      color: "#ffffff",
      textShadow: "0 0 8px rgba(255,255,255,0.5)",
      transition: {
        duration: 0.2
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.3
      }
    },
    exit: { 
      y: 10, 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

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
          <motion.button
            className="md:hidden text-white z-40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.85, rotate: isMenuOpen ? -90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

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

        {/* Mobile Menu with AnimatePresence for exit animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop with blur effect */}
              <motion.div
                className="fixed inset-0 backdrop-blur-xl bg-black/60 z-30"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={backdropVariants}
              />
              
              {/* Menu content */}
              <motion.div
                className="fixed inset-0 flex flex-col justify-center items-center z-30 pointer-events-none"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
              >
                <motion.nav className="flex flex-col items-center space-y-8 mb-12 pointer-events-auto">
                  <motion.div 
                    variants={itemVariants}
                    whileHover="hover"
                    className="overflow-hidden"
                  >
                    <Link
                      href="/"
                      className="text-white text-2xl font-medium transition-colors inline-block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    whileHover="hover"
                    className="overflow-hidden"
                  >
                    <Link
                      href="#features"
                      className="text-white text-2xl font-medium transition-colors inline-block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    whileHover="hover"
                    className="overflow-hidden"
                  >
                    <Link
                      href="#pricing"
                      className="text-white text-2xl font-medium transition-colors inline-block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Movies
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    whileHover="hover"
                    className="overflow-hidden"
                  >
                    <Link
                      href="#contact"
                      className="text-white text-2xl font-medium transition-colors inline-block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </motion.nav>

                {/* Authentication Buttons - Mobile */}
                <motion.div 
                  className="flex flex-col space-y-4 items-center pointer-events-auto"
                >
                  {!user ? (
                    <>
                      <motion.div 
                        variants={buttonVariants}
                        whileHover="hover"
                        className="w-full"
                      >
                        <Link href="/api/auth/register" onClick={() => setIsMenuOpen(false)}>
                          <Button size="lg" className="w-full bg-black text-white hover:bg-[#232e44] border border-white/20 shadow-lg">
                            Get Started
                          </Button>
                        </Link>
                      </motion.div>
                      
                      <motion.div 
                        variants={buttonVariants}
                        whileHover="hover"
                        className="w-full"
                      >
                        <Link href="/api/auth/login" onClick={() => setIsMenuOpen(false)}>
                          <Button size="lg" className="w-full bg-white text-black hover:bg-gray-300 hover:text-black shadow-lg">
                            Login
                          </Button>
                        </Link>
                      </motion.div>
                      
                      <motion.div 
                        variants={buttonVariants} 
                        className="mt-6"
                      >
                        <HorrorAudio />
                      </motion.div>
                    </>
                  ) : (
                    <motion.div 
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                        <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                          Go to Dashboard
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
