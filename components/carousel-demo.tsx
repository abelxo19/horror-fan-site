import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from 'next/image'

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
            <div className="p-1">
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={`${movie.title} poster`}
                    width={300}
                    height={200}
                    className="w-full h-72"
                  />
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

