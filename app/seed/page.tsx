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
          releaseDate: new Date("2013-07-19"),
          director: "James Wan",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-2",
          title: "Hereditary",
          description:
            "A grieving family is haunted by tragic and disturbing occurrences.",
          releaseDate: new Date("2018-06-08"),
          director: "Ari Aster",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-3",
          title: "The Others",
          description:
            "A woman who lives in a darkened old house with her two photosensitive children becomes convinced that the home is haunted.",
          releaseDate: new Date("2001-08-10"),
          director: "Alejandro Amenábar",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-4",
          title: "Insidious",
          description:
            "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
          releaseDate: new Date("2011-04-01"),
          director: "James Wan",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-5",
          title: "The Grudge",
          description:
            "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse.",
          releaseDate: new Date("2004-10-22"),
          director: "Takashi Shimizu",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-6",
          title: "Sinister",
          description:
            "A true-crime writer discovers a box of super 8 home movies that suggest the murder he is currently researching is the work of a serial killer.",
          releaseDate: new Date("2012-10-12"),
          director: "Scott Derrickson",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-7",
          title: "The Ring",
          description:
            "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
          releaseDate: new Date("2002-10-18"),
          director: "Gore Verbinski",
          genre: ["ghost", "horror"],
        },
        {
          id: "movie-8",
          title: "Poltergeist",
          description:
            "A family's home is haunted by a host of ghosts and otherworldly forces.",
          releaseDate: new Date("1982-06-04"),
          director: "Tobe Hooper",
          genre: ["ghost", "horror"],
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
          releaseDate: new Date("2018-10-12"),
          seasons: 1,
          episodes: 10,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-2",
          title: "American Horror Story",
          description:
            "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, a hotel, and a farmhouse in Roanoke.",
          releaseDate: new Date("2011-10-05"),
          seasons: 12,
          episodes: 130,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-3",
          title: "The Terror",
          description:
            "A chilling anthology series featuring stories of people facing terrifying and often supernatural forces.",
          releaseDate: new Date("2018-03-26"),
          seasons: 2,
          episodes: 20,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-4",
          title: "Penny Dreadful",
          description:
            "Explorer Sir Malcolm Murray, American gunslinger Ethan Chandler, and medium Vanessa Ives unite to combat supernatural threats in Victorian London.",
          releaseDate: new Date("2014-05-11"),
          seasons: 3,
          episodes: 27,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-5",
          title: "Supernatural",
          description:
            "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and ghosts.",
          releaseDate: new Date("2005-09-13"),
          seasons: 15,
          episodes: 327,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-6",
          title: "The Exorcist",
          description:
            "Two priests perform an exorcism on a young woman possessed by a demonic entity.",
          releaseDate: new Date("2016-09-23"),
          seasons: 2,
          episodes: 20,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-7",
          title: "Marianne",
          description:
            "A famous horror writer returns to her hometown and discovers that the evil spirit plaguing her dreams is also haunting her in real life.",
          releaseDate: new Date("2019-09-13"),
          seasons: 1,
          episodes: 8,
          genre: ["ghost", "horror"],
        },
        {
          id: "series-8",
          title: "The Walking Dead",
          description:
            "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
          releaseDate: new Date("2010-10-31"),
          seasons: 11,
          episodes: 177,
          genre: ["ghost", "horror"],
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