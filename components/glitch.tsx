"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface GlitchyTextProps {
  children: React.ReactNode
}

export function GlitchyText({ children }: GlitchyTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  useEffect(() => {
    if (isGlitching) {
      controls.start({
        x: [0, -2, 2, -2, 2, 0],
        y: [0, 2, -2, 2, -2, 0],
        transition: { duration: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      })
    }
  }, [isGlitching, controls])

  return (
    <span className="relative inline-block">
      <motion.span
        animate={controls}
        className={`relative z-10 ${isGlitching ? "text-gray-900" : "text-white"}`}
        style={{
          textShadow: isGlitching ? "2px 2px #ff0000, -2px -2px #0000ff" : "none",
        }}
      >
        {children}
      </motion.span>
      {isGlitching && (
        <>
          <motion.span
            animate={controls}
            className="absolute top-0 left-0 z-20 text-red-500 opacity-70"
            style={{ clipPath: "inset(0 66% 0 0)" }}
          >
            {children}
          </motion.span>
          <motion.span
            animate={controls}
            className="absolute top-0 left-0 z-30 text-blue-500 opacity-70"
            style={{ clipPath: "inset(33% 33% 33% 33%)" }}
          >
            {children}
          </motion.span>
          <motion.span
            animate={controls}
            className="absolute top-0 left-0 z-40 text-green-500 opacity-70"
            style={{ clipPath: "inset(66% 0 0 0)" }}
          >
            {children}
          </motion.span>
        </>
      )}
    </span>
  )
}

