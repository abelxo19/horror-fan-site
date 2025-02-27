import React from "react";
import prisma from "@/lib/prisma";
import SeriesCard from "@/components/seriescard";

export default async function TopSeries() {
  
  const series = await prisma.series.findMany();

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4 text-white text-center font-creeper">Top Horror Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {series.map((serie) => (
          <SeriesCard
            key={serie.id}
            id={serie.id}
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
