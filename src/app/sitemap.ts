import type { MetadataRoute } from "next";

import { site } from "@/lib/data";
import { features } from "@/lib/flags";

const routes = [
  "",
  "/club",
  "/divisiones",
  "/staff",
  ...(features.calendar ? ["/calendario"] : []),
  ...(features.gallery ? ["/galeria"] : []),
  "/unete",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
