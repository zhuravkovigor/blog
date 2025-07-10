import { AvailableUnits } from "./types";

export const APP_ROUTES = {
  HOME: "/",
  POST_BY_SLUG: "/post/:slug",
  GITHUB: "http://github.com",
  YOUTUBE: "http://youtube.com",
} as const;

export const DEFAULT_STYLE_UNIT_TYPE: AvailableUnits = "rem";

export const SITE_CONFIG = {
  name: "Blog",
  description: "Мой блог",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "Автор блога",
  language: "ru",
} as const;
