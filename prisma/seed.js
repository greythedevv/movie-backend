import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  console.log("Seeding movies...");

  // ✅ Step 1: Create user FIRST
  const user = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password: "password123",
    },
  });

  console.log("User created:", user.id);

  // ❌ REMOVE hardcoded userId
  // const userId = ...

  // ✅ Step 2: Use user.id dynamically
  const movies = [
    {
      title: "Inception",
      overview: "A thief enters dreams to steal secrets but is given a chance at redemption.",
      releaseYear: 2010,
      genres: "Sci-Fi, Action, Thriller",
      runtime: 148,
      posterUrl: "https://example.com/inception.jpg",
      createdBy: user.id, // ✅ FIX
    },
    {
      title: "The Dark Knight",
      overview: "Batman faces the Joker, a criminal mastermind who wants to create chaos.",
      releaseYear: 2008,
      genres: "Action, Crime, Drama",
      runtime: 152,
      posterUrl: "https://example.com/dark-knight.jpg",
      createdBy: user.id, // ✅ FIX
    },
    // 👉 keep the rest of your movies, just replace createdBy with user.id
  ];

  // ✅ Step 3: Insert all movies
  await prisma.movie.createMany({
    data: movies,
  });

  console.log("Seeding completed");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });