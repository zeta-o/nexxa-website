import type { MetadataRoute } from "next";

import { site } from "@/lib/data";
import { features } from "@/lib/flags";
import { locales, lp } from "@/i18n/config";

const routes = [
  "",
  "/club",
  "/divisiones",
  "/staff",
  ...(features.calendar ? ["/calendario"] : []),
  ...(features.gallery ? ["/galeria"] : []),
  "/unete",
];

/** Every page in both languages, each entry pointing at its translation. */
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    routes.map((r) => ({
      url: `${site.url}${lp(lang, r || "/")}`,
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${lp(l, r || "/")}`])) },
    })),
  );
}
