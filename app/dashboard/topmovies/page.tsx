import React from "react";
import prisma from "@/lib/prisma";
import MovieCard from "@/components/moviecard";

export default async function TopMovies() {
  
  const movies = await prisma.movie.findMany();

  return (
    <div className="">
      <h1 className=" font-creeper text-2xl md:text-3xl font-bold mb-4 text-white max-sm:ml-3 md:text-center">Top Horror <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
          Movies
        </span>{" "}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.description}
            releaseDate={movie.releaseDate}
            image={movie.image}
            thriller={movie.thriller}
            rating={movie.rating}
            duration={movie.duration} // Example duration
          />
        ))}
      </div>
    </div>
  );
}