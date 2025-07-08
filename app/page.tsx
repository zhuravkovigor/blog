import GenerateFog from "@/components/parts/GenerateFog";
import PostList from "@/components/parts/PostList";
import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function() {
  return (
    <Container className="pb-32 pt-8">
      <GenerateFog />
      <PostList
        settings={{
          orderBy: { createdAt: "desc" },
        }}
      />
    </Container>
  );
}
