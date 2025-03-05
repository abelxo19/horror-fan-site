import React from "react";
import prisma from "@/lib/prisma";
import SeriesCard from "@/components/seriescard";

export default async function TopSeries() {
  
  const series = await prisma.series.findMany();

  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center font-creeper">Top Horror <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
         Series
        </span>{" "}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-6">
        {series.map((serie) => (
          <SeriesCard
            key={serie.id}
            title={serie.title}
            description={serie.description}
            releaseDate={serie.releaseDate}
            seasons={serie.seasons}
            episodes={serie.episodes}
            genre={serie.genre}
            image={serie.image}
            rating={serie.rating}
          />
        ))}
      </div>
    </div>
  );
}
