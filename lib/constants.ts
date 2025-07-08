import { AvailableUnits } from "./types";

export const APP_ROUTES = {
  HOME: "/",
  POST_BY_SLUG: "/post/:slug",
  GITHUB: "http://github.com",
  YOUTUBE: "http://youtube.com",
} as const;

export const DEFAULT_STYLE_UNIT_TYPE: AvailableUnits = "rem";
