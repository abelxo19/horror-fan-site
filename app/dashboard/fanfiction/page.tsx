import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const FictionPage = () => {
  return (
    <div className="-ml-2 flex h-screen w-full items-center justify-center bg-[#0b0907] px-2 text-white">
      <div className="flex max-w-3xl flex-col items-center text-center">
        <div className="mb-2 flex items-center justify-center">
          <Sparkles className="mr-2 h-6 w-6 text-amber-300" />
          <span className="text-sm font-medium uppercase tracking-wider text-amber-300">New Feature</span>
          <Sparkles className="ml-2 h-6 w-6 text-amber-300" />
        </div>

        <h1 className="py-2 animate-pulse bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
          Coming Soon
        </h1>

        <div className="mt-4 h-1 w-24 animate-pulse rounded bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400"></div>

        <p className="mt-6 text-sm text-gray-300 sm:text-lg whitespace-break-spaces">
          Our fanfiction feature is currently under development. Soon you&apos;ll be able to explore, create, and share
          amazing stories with the community.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            variant="outline"
            className="border-purple-500 bg-transparent text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
          >
            Get Notified
          </Button>
        </div>

        <div className="mt-12 flex items-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-pink-400 [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-amber-400"></div>
        </div>
      </div>
    </div>
  )
}

export default FictionPage

