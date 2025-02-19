"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import cta_bg from '@/public/cta-bg.jpg'
import { GitlabIcon as GitHub } from "lucide-react"

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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Get Started with Your Free Trial Today</h2>
        <p className="text-xl mb-8 text-gray-200">
          Experience the power of our platform and transform your ideas into reality.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#232e44] hover:bg-gray-100 transition-colors duration-300"
        >
          Explore the Darkness
        </Button>
      </div>
    </section>
  )
}

