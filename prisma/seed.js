import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

            
const userId = "143bfabc-860d-4aaa-996f-70b39cb0a8f7"

const movies = [
  {
    title: "Inception",
    overview: "A thief enters dreams to steal secrets but is given a chance at redemption.",
    releaseYear: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createdBy: userId
  },
  {
    title: "The Dark Knight",
    overview: "Batman faces the Joker, a criminal mastermind who wants to create chaos.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/dark-knight.jpg",
    createdBy: userId
  },
  {
    title: "Interstellar",
    overview: "A team travels through a wormhole in search of a new home for humanity.",
    releaseYear: 2014,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createdBy: userId
  },
  {
    title: "Titanic",
    overview: "A love story unfolds aboard the ill-fated Titanic.",
    releaseYear: 1997,
    genres: ["Romance", "Drama"],
    runtime: 195,
    posterUrl: "https://example.com/titanic.jpg",
    createdBy: userId
  },
  {
    title: "Avengers: Endgame",
    overview: "The Avengers assemble one last time to undo Thanos' destruction.",
    releaseYear: 2019,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 181,
    posterUrl: "https://example.com/endgame.jpg",
    createdBy: userId
  },
  {
    title: "The Matrix",
    overview: "A hacker discovers reality is a simulation and joins a rebellion.",
    releaseYear: 1999,
    genres: ["Sci-Fi", "Action"],
    runtime: 136,
    posterUrl: "https://example.com/matrix.jpg",
    createdBy: userId
  },
  {
    title: "Gladiator",
    overview: "A Roman general seeks revenge after betrayal.",
    releaseYear: 2000,
    genres: ["Action", "Drama"],
    runtime: 155,
    posterUrl: "https://example.com/gladiator.jpg",
    createdBy: userId
  },
  {
    title: "Jurassic Park",
    overview: "Dinosaurs are brought back to life with disastrous consequences.",
    releaseYear: 1993,
    genres: ["Adventure", "Sci-Fi"],
    runtime: 127,
    posterUrl: "https://example.com/jurassic-park.jpg",
    createdBy: userId
  },
  {
    title: "The Lion King",
    overview: "A young lion prince flees his kingdom after tragedy.",
    releaseYear: 1994,
    genres: ["Animation", "Adventure"],
    runtime: 88,
    posterUrl: "https://example.com/lion-king.jpg",
    createdBy: userId
  },
  {
    title: "Forrest Gump",
    overview: "A simple man experiences key moments in American history.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    runtime: 142,
    posterUrl: "https://example.com/forrest-gump.jpg",
    createdBy: userId
  },
  {
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over years, finding hope.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl: "https://example.com/shawshank.jpg",
    createdBy: userId
  },
  {
    title: "Pulp Fiction",
    overview: "Interwoven stories of crime in Los Angeles.",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
    runtime: 154,
    posterUrl: "https://example.com/pulp-fiction.jpg",
    createdBy: userId
  },
  {
    title: "The Avengers",
    overview: "Earth's mightiest heroes must come together to stop Loki.",
    releaseYear: 2012,
    genres: ["Action", "Adventure"],
    runtime: 143,
    posterUrl: "https://example.com/avengers.jpg",
    createdBy: userId
  },
  {
    title: "Black Panther",
    overview: "T'Challa returns home to Wakanda and faces a new enemy.",
    releaseYear: 2018,
    genres: ["Action", "Sci-Fi"],
    runtime: 134,
    posterUrl: "https://example.com/black-panther.jpg",
    createdBy: userId
  },
  {
    title: "Spider-Man: No Way Home",
    overview: "Spider-Man deals with multiverse chaos.",
    releaseYear: 2021,
    genres: ["Action", "Adventure"],
    runtime: 148,
    posterUrl: "https://example.com/spiderman.jpg",
    createdBy: userId
  },
  {
    title: "Frozen",
    overview: "Two sisters navigate love and magical powers.",
    releaseYear: 2013,
    genres: ["Animation", "Family"],
    runtime: 102,
    posterUrl: "https://example.com/frozen.jpg",
    createdBy: userId
  },
  {
    title: "The Godfather",
    overview: "The aging patriarch transfers control of his empire to his son.",
    releaseYear: 1972,
    genres: ["Crime", "Drama"],
    runtime: 175,
    posterUrl: "https://example.com/godfather.jpg",
    createdBy: userId
  },
  {
    title: "Doctor Strange",
    overview: "A surgeon learns the mystic arts after a life-changing accident.",
    releaseYear: 2016,
    genres: ["Action", "Fantasy"],
    runtime: 115,
    posterUrl: "https://example.com/doctor-strange.jpg",
    createdBy: userId
  },
  {
    title: "Avatar",
    overview: "A marine on an alien planet must choose between duty and love.",
    releaseYear: 2009,
    genres: ["Sci-Fi", "Adventure"],
    runtime: 162,
    posterUrl: "https://example.com/avatar.jpg",
    createdBy: userId
  },
  {
    title: "Top Gun: Maverick",
    overview: "Maverick trains a new generation of fighter pilots.",
    releaseYear: 2022,
    genres: ["Action", "Drama"],
    runtime: 130,
    posterUrl: "https://example.com/topgun.jpg",
    createdBy: userId
  }
];

const main = async () =>{
    console.log("seeding movies...")

    for (const movie of movies){
        await prisma.movie.create({
            data:movie,
        })
        console.log(`Created movie ${movie.title}`)
    }
    console.log("seeding copleted")
}


main().catch((err)=>{
    console.error(err)
    process.exit(1)
}).finally(async()=>{
    await prisma.$disconnect()
})