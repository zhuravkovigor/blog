import { Prisma } from "@/app/generated/prisma";
import prisma from "./prisma";

export async function getPosts(props?: Prisma.PostFindManyArgs) {
  "use cache";
  return prisma.post.findMany(props);
}

export async function getPost(props: Prisma.PostFindUniqueArgs) {
  "use cache";
  return prisma.post.findUnique(props);
}
