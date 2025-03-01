"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { inter } from "@/fonts"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className={`relative text-gray-800 overflow-hidden ${inter.className}`}>
      <div className="container mt-14 mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col justify-center items-center text-center mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#e7e8eb] font-nosifer py-2">
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
            <div className="relative">
              <p className="text-base mb-8 text-white py-2 relative z-10">
                A hub for horror fans, by horror fans. <br />
                Browse and share your favorite horror movies and fiction with a community.
              </p>

              {/* Ghost Animation - Moves Across the Entire Width */}
             {/* Ghost Animation - Moves Across the Entire Width */}
<motion.div
  className="absolute w-32 h-32 md:w-40 md:h-40 pointer-events-none"
  style={{
    top: "50%",
    left: "-10%", // Start slightly outside the left edge
    translateY: "-50%",
    zIndex: 5,
  }}
  animate={{
    x: "110%", // Move to slightly beyond the right edge
    y: [0, -15, 10, -20, 15, 0],
    rotate: [0, 10, -8, 12, -10, 0],
    scale: [0.8, 1.1, 0.9, 1.2, 0.85, 1],
  }}
  transition={{
    x: {
      duration: 18,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "linear",
    },
    y: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    rotate: {
      duration: 9,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    scale: {
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  }}
>
  <motion.div
    animate={{
      opacity: [0, 1, 1, 0], // Fade in/out during movement
    }}
    transition={{
      duration: 18,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
      times: [0, 0.1, 0.9, 1], // Timing for fade in/out
    }}
  >
    <Image
      src="/sheet.png"
      alt="Ghost"
      width={200}
      height={200}
      className="hidden md:block w-20 h-full object-contain"
    />
  </motion.div>
</motion.div>
            </div>

            <Link href="/api/auth/register">
              <Button size="lg" className="bg-black text-white hover:bg-[#232e44]">
                Join the Nightmare
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

