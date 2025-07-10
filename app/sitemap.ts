import { SITE_CONFIG } from "@/lib/constants";
import { getPosts } from "@/lib/services";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  // Получаем все опубликованные посты
  const posts = await getPosts({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  // Создаем записи для постов
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Основные страницы
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...postUrls,
  ];
}
