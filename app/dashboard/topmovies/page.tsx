import React from "react";
import prisma from "@/lib/prisma";
import MovieCard from "@/components/moviecard";

export default async function TopMovies() {
  const movies = await prisma.movie.findMany();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Top Horror Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            releaseDate={movie.releaseDate}
            director={movie.director || undefined}
            genre={movie.genre}
            image={movie.imageString || undefined}
            rating={5} // Example rating
            duration="2h 15m" // Example duration
          />
        ))}
      </div>
    </div>
  );
}