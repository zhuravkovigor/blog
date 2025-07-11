import GenerateFog from "@/components/parts/GenerateFog";
import PostList from "@/components/parts/PostList";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.language,
    images: [
      {
        url: `${SITE_CONFIG.url}/cover.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.description,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/cover.jpg`],
  },
};

export default async function () {
  return (
    <Container className="pb-32 pt-32">
      <GenerateFog />
      <PostList
        settings={{
          orderBy: { createdAt: "desc" },
        }}
      />
    </Container>
  );
}
