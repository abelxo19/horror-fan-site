import React from "react";
import prisma from "@/lib/prisma";
import MovieCard from "@/components/moviecard";
import poster_1 from "@/public/conjuring.png";

export default async function TopMovies() {
  
  const movies = await prisma.movie.findMany();

  return (
    <div className="">
      <h1 className="font-creeper text-3xl font-bold mb-4 text-white text-center">Top Horror Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            releaseDate={movie.releaseDate}
            director={movie.director || undefined}
            genre={movie.genre}
            image={movie.image}
            rating={movie.rating}
            duration={movie.duration} // Example duration
          />
        ))}
      </div>
    </div>
  );
}