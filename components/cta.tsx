"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import cta_bg from '@/public/cta-bg.jpg'
import { GitlabIcon as GitHub } from "lucide-react"
import { motion } from "framer-motion"

export default function HorrorCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={cta_bg}
          alt="Spooky cemetery background"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content with Fade-in Effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">Join the Ultimate Horror Fan Community</h2>
        <p className="text-base md:text-xl mb-8 text-gray-200">
          Discover terrifying tales, rank your favorite horror films, and connect with fellow fans.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#232e44] hover:bg-gray-100 transition-colors duration-300"
        >
          Explore the Darkness
        </Button>
      </motion.div>
    </section>
  )
}
