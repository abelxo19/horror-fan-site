"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import cta_bg from '@/public/cta-bg.jpg'
import Tele from '@/public/telegram.png'
import Link from "next/link"
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
        <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">Join Our Telegram Channel</h2>
        <p className="text-base md:text-xl mb-8 text-gray-200">
        Explore the best horror movies, thrilling series, and chilling fan fiction also connect with fellow fans.
        </p>
        <Link href="https://t.me/HorrorMovies_Hub">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#232e44] hover:bg-gray-100 transition-colors duration-300"
        >
          Join The Channel <span className="inline-block">
            <Image src={Tele} alt="telegram" className="w-6 h-6"></Image></span>
        </Button>
        </Link>
      </motion.div>
    </section>
  )
}
