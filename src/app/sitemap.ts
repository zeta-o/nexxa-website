import type { MetadataRoute } from "next";

import { site } from "@/lib/data";

const routes = ["", "/club", "/divisiones", "/staff", "/calendario", "/galeria", "/unete"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
