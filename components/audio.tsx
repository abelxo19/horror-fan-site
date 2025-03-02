"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "./ui/button"

export default function HorrorAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/eerie-sound.mp3")
    audioRef.current.loop = true

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      // Play audio with user interaction (to comply with browser autoplay policies)
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error)
      })
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center">
      <Button
        size="icon"
        onClick={toggleAudio}
        className="text-white hover:bg-transparent hover:text-gray-400 bg-transparent transition-colors"
        title={isPlaying ? "Turn off eerie sound" : "Turn on eerie sound"}
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        <span className="sr-only">{isPlaying ? "Turn off eerie sound" : "Turn on eerie sound"}</span>
      </Button>
    </div>
  )
}

