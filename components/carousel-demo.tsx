import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const movies = [
  { title: "Wolf Man", poster: "/wolf.jpg" },
  { title: "The Monkey", poster: "/monkey.jpg" },
  { title: "Nosferatu", poster: "/Nosferatu.jpg" },
]

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1 group">
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  {/* Image container with scaling effect */}
                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={movie.poster || "/placeholder.svg"}
                      alt={`${movie.title} poster`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Dark overlay effect when hovered */}
                    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-60"></div>
                  </div>

                  {/* Movie Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full font-semibold text-white text-center text-lg p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {movie.title}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
