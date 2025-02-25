import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

export default function SeedDatabase() {
  async function postData() {
    "use server";

    // Seed Movies
    await prisma.movie.createMany({
      data: [
        {
          id: "movie-1",
          title: "The Conjuring",
          description:
            "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
          releaseDate: 2013,
          image: "/conjuring.png",
          director: "James Wan",
          genre: ["ghost", "horror"],
          rating: 7.5,
          duration :"2hr 2min",
        },
        {
          id: "movie-2",
          title: "Hereditary",
          description:
            "A grieving family is haunted by tragic and disturbing occurrences.",
          releaseDate: 2018,
          image: "/hereditary.jpg",
          director: "Ari Aster",
          genre: ["ghost", "horror"],
          rating: 8.0,
          duration :"2hr 7min",
        },
        {
          id: "movie-3",
          title: "The Others",
          description:
            "A woman who lives in a darkened old house with her two photosensitive children becomes convinced that the home is haunted.",
          releaseDate: 2001,
          image: "/others.jpg",
          director: "Alejandro Amenábar",
          genre: ["ghost", "horror"],
          rating: 7.6,
          duration :"1hr 44min",
        },
        {
          id: "movie-4",
          title: "Insidious",
          description:
            "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
          releaseDate: 2011,
          image: "/insidious.jpg",
          director: "James Wan",
          genre: ["ghost", "horror"],
          rating: 6.8,
          duration :"1hr 43min",
        },
        {
          id: "movie-5",
          title: "The Grudge",
          description:
            "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse.",
          releaseDate: 2004,
          image: "/grudge.jpg",
          director: "Takashi Shimizu",
          genre: ["ghost", "horror"],
          rating: 5.9,
          duration :"1hr 31min",
        },
        {
          id: "movie-6",
          title: "Sinister",
          description:
            "A true-crime writer discovers a box of super 8 home movies that suggest the murder he is currently researching is the work of a serial killer.",
          releaseDate: 2012,
          image:"/sinster.jpg",
          director: "Scott Derrickson",
          genre: ["ghost", "horror"],
          rating: 7.2,
          duration:"1hr 38min"
        },
        {
          id: "movie-7",
          title: "The Ring",
          description:
            "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
          releaseDate: 2002,
          image: "/ring.jpg",
          director: "Gore Verbinski",
          genre: ["ghost", "horror"],
          rating: 6.7,
          duration:"1hr 46min"
        },
        {
          id: "movie-8",
          title: "Poltergeist",
          description:
            "A family's home is haunted by a host of ghosts and otherworldly forces.",
          releaseDate: 1982,
          image: "/poltergeist.jpg",
          director: "Tobe Hooper",
          genre: ["ghost", "horror"],
          rating:6.1,
          duration:"1hr 54min"
        },
      ],
    });

    // Seed Series
    await prisma.series.createMany({
      data: [
        {
          id: "series-1",
          title: "The Haunting of Hill House",
          description:
            "A family confronts haunting memories of their old home and the terrifying events that drove them from it.",
          releaseDate: 2018,
          seasons: 1,
          episodes: 10,
          genre: ["ghost", "horror"],
          rating: 8.6,
        },
        {
          id: "series-2",
          title: "American Horror Story",
          description:
            "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, a hotel, and a farmhouse in Roanoke.",
          releaseDate: 2011,
          seasons: 12,
          episodes: 130,
          genre: ["ghost", "horror"],
          rating: 8.1,
        },
        {
          id: "series-3",
          title: "The Terror",
          description:
            "A chilling anthology series featuring stories of people facing terrifying and often supernatural forces.",
          releaseDate: 2018,
          seasons: 2,
          episodes: 20,
          genre: ["ghost", "horror"],
          rating: 7.9,
        },
        {
          id: "series-4",
          title: "Penny Dreadful",
          description:
            "Explorer Sir Malcolm Murray, American gunslinger Ethan Chandler, and medium Vanessa Ives unite to combat supernatural threats in Victorian London.",
          releaseDate: 2014,
          seasons: 3,
          episodes: 27,
          genre: ["ghost", "horror"],
          rating: 8.2,
        },
        {
          id: "series-5",
          title: "Supernatural",
          description:
            "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and ghosts.",
          releaseDate: 2005,
          seasons: 15,
          episodes: 327,
          genre: ["ghost", "horror"],
          rating: 8.4,
        },
        {
          id: "series-6",
          title: "The Exorcist",
          description:
            "Two priests perform an exorcism on a young woman possessed by a demonic entity.",
          releaseDate: 2016,
          seasons: 2,
          episodes: 20,
          genre: ["ghost", "horror"],
          rating: 7.5,
        },
        {
          id: "series-7",
          title: "Marianne",
          description:
            "A famous horror writer returns to her hometown and discovers that the evil spirit plaguing her dreams is also haunting her in real life.",
          releaseDate: 2019,
          seasons: 1,
          episodes: 8,
          genre: ["ghost", "horror"],
          rating: 7.6,
        },
        {
          id: "series-8",
          title: "The Walking Dead",
          description:
            "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
          releaseDate: 2010,
          seasons: 11,
          episodes: 177,
          genre: ["ghost", "horror"],
          rating: 8.2,
        },
      ],
    });

    // Seed FanFiction
    await prisma.fanFiction.createMany({
      data: [
        {
          id: "fanfic-1",
          title: "The Ghosts of Hill House",
          description:
            "A chilling tale inspired by The Haunting of Hill House, exploring the lives of the Crain family before the events of the series.",
          author: "Emily Carter",
          fandom: "The Haunting of Hill House",
        },
        {
          id: "fanfic-2",
          title: "The Conjuring: Beyond the Veil",
          description:
            "A fan-created story delving into the Warrens' early cases and the origins of the entities they faced.",
          author: "John Doe",
          fandom: "The Conjuring",
        },
        {
          id: "fanfic-3",
          title: "Hereditary: The Paimon Chronicles",
          description:
            "A dark exploration of the Paimon cult and its influence on the Graham family.",
          author: "Sarah Lee",
          fandom: "Hereditary",
        },
        {
          id: "fanfic-4",
          title: "The Others: Echoes of the Past",
          description:
            "A continuation of the story of Grace Stewart and her children, revealing new secrets about their haunted home.",
          author: "Michael Brown",
          fandom: "The Others",
        },
        {
          id: "fanfic-5",
          title: "Insidious: The Further's Secrets",
          description:
            "A deep dive into the mysterious realm of The Further and the entities that inhabit it.",
          author: "Laura White",
          fandom: "Insidious",
        },
        {
          id: "fanfic-6",
          title: "The Grudge: Curse of Kayako",
          description:
            "A retelling of the Kayako curse from the perspective of a new family moving into the cursed house.",
          author: "David Green",
          fandom: "The Grudge",
        },
        {
          id: "fanfic-7",
          title: "Sinister: The Lost Tapes",
          description:
            "A fan-created story about the discovery of additional super 8 tapes and the horrors they reveal.",
          author: "Anna Black",
          fandom: "Sinister",
        },
        {
          id: "fanfic-8",
          title: "The Ring: Seven Days Later",
          description:
            "A sequel to The Ring, following a new group of characters who encounter the cursed videotape.",
          author: "Chris Evans",
          fandom: "The Ring",
        },
      ],
    });

    console.log("Seed data inserted successfully!");
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Seed Database</Button>
      </form>
    </div>
  );
}