"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { inter } from "@/fonts"

export default function Hero() {
  return (
    <section className={`relative text-gray-800 overflow-hidden ${inter.className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#e7e8eb] font-nosifer`}
            >
              Welcome to the{" "}
              <motion.span
                className="text-[#232e44] px-2 inline-block"
                animate={{
                  opacity: [1, 0.7, 0.9, 1, 0.8, 1],
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.5)",
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 5px rgba(255,255,255,0.5)",
                    "0 0 2px rgba(255,255,255,0.5)",
                    "0 0 7px rgba(255,255,255,0.5)",
                    "0 0 5px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Nightmare
              </motion.span>
            </h1>
            <p className="text-base mb-8 text-white">
              A hub for horror fans, by horror fans. Browse and share your favorite horror movies and
              fiction with a community.
            </p>
            <Button size="lg" className="bg-black text-white">
              Start Free Trial
            </Button>
          </motion.div>
          <div className="relative max-w-md mx-auto">hi!</div>
        </div>
      </div>
    </section>
  )
}

