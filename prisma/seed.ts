import { Prisma, PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

const postsData: Prisma.PostCreateInput[] = [
  {
    title: "First Post",
    content: "This is the content of the first post.",
    published: true,
  },
  {
    title: "Second Post",
    content: "This is the content of the second post.",
    published: false,
  },
  {
    title: "Third Post",
    content: "This is the content of the third post.",
    published: true,
  },
];

async function main() {
  console.log("Seeding database...");

  // Clear existing posts
  await prisma.post.deleteMany();

  // Create new posts
  for (const postData of postsData) {
    await prisma.post.create({
      data: postData,
    });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
