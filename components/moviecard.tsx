"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bookmark, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface MovieCardProps {
  title: string
  releaseDate: number
  rating: number
  duration: string
  image: string | StaticImageData
  thriller: string
  description: string
  className?: string
}

export default function MovieCard({
  title,
  releaseDate,
  rating,
  duration,
  image,
  thriller,
  description,
  className,
}: MovieCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  return (
    <Link href={thriller} className="block w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className={cn("group relative w-full max-w-sm", className)}
      >
        <Card className="relative overflow-hidden border-zinc-800 bg-black/40 transition-all duration-300 group-hover:border-zinc-700">
          <div className="relative aspect-[1] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={500}
              height={750}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

            {/* Bookmark Button */}
            <motion.button
              onClick={handleBookmark}
              className="absolute top-4 right-4 z-40 p-2 rounded-full bg-black/60 backdrop-blur-sm transition-all duration-300 hover:bg-primary/80"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Bookmark
                className={cn(
                  "h-5 w-5 transition-all duration-300",
                  isBookmarked ? "fill-primary text-primary" : "text-white",
                )}
              />
              <span className="sr-only">Add to watchlist</span>
            </motion.button>

            {/* Watchlist Label - Appears on Hover */}
            <div className="absolute top-4 right-16 z-40 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
              <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
                {isBookmarked ? "Remove from watchlist" : "Add to watchlist"}
              </span>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 z-30 p-6 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm text-zinc-400 line-clamp-4">{description}</p>
            </div>
          </div>

          <CardContent className="relative z-20 -mt-12 p-6">
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                {releaseDate}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary hover:text-red-500 hover:fill-red-500" />
                {rating}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {duration}
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0">
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 group-hover:bg-red-500"
                style={{ width: `${rating * 10}%` }}
              />
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}

