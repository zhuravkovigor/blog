import { SITE_CONFIG } from "@/lib/constants";
import { getPosts } from "@/lib/services";

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  // Получаем все опубликованные посты
  const posts = await getPosts({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name}</title>
    <description>${SITE_CONFIG.description}</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>${SITE_CONFIG.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description || ""}]]></description>
      <link>${baseUrl}/post/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/post/${post.slug}</guid>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
