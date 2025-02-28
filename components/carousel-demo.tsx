import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

const movies = [
  { title: "Wolf Man", poster: "/wolf.jpg",link:'https://www.youtube.com/watch?v=kAw4PH2IQgo' },
  { title: "The Monkey", poster: "/monkey.jpg",link:'https://www.youtube.com/watch?v=husMGbXEIho' },
  { title: "Nosferatu", poster: "/Nosferatu.jpg",link:'https://www.youtube.com/watch?v=nulvWqYUM8k' },
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


                  {/* Watch Thriller Link */}
                  <div className="absolute bottom-0 left-0 w-full text-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={movie.link}
                      className="inline-block bg-[#252321] hover:bg-white hover:text-black text-white text-sm font-medium py-2 px-3 rounded-md transition-colors duration-200"
                    >
                      Watch Thriller
                    </Link>
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

