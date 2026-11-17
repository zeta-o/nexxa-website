import { lang as langParam } from "next/root-params";
import { notFound } from "next/navigation";

import { isLocale, lp, type Locale } from "./config";
import { getContent } from "./content";

/** Current language from the /[lang] root segment (Server Components only). */
export async function getLocale(): Promise<Locale> {
  const value = await langParam();
  if (!isLocale(value)) notFound();
  return value;
}

/** Language, localized content and a path helper, for Server Components. */
export async function getI18n() {
  const lang = await getLocale();
  return { lang, c: getContent(lang), href: (path: string) => lp(lang, path) };
}

/** Pick the copy for the current language from a { es, en } object. */
export async function pick<T>(copy: Record<Locale, T>): Promise<T> {
  return copy[await getLocale()];
}
