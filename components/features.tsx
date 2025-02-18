"use client"

import type React from "react"

import { Skull, Users, Pen } from "lucide-react"
import { motion } from "framer-motion"
import { GlitchyText } from "./glitch"

const features = [
  {
    icon: Skull,
    title: "Explore Curated Horror",
    description: "Dive into a collection of hand-picked, spine-chilling tales that will keep you up at night.",
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Connect with fellow horror enthusiasts, discuss theories, and share your favorite scares.",
  },
  {
    icon: Pen,
    title: "Contribute Your Tales",
    description: "Unleash your inner horror writer. Submit your own stories and terrify others.",
  },
]

export default function Features() {
  return (
    <section className="py-12 bg-gray-900 text-gray-100" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Discover the <GlitchyText>Darkness</GlitchyText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  index: number
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="mb-4 p-3 bg-white rounded-full"
      >
        <Icon className="w-8 h-8 text-black" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

