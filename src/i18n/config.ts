/**
 * Supported languages. Spanish is the default and has no prefix in the URL
 * (/club); English lives under /en (/en/club). Internally every page is under
 * app/[lang]; the proxy rewrites unprefixed URLs to /es.
 */
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

/** Public URL for an internal path: lp("es", "/club") → "/club", lp("en", "/club") → "/en/club". */
export function lp(lang: Locale, path: string): string {
  if (path.startsWith("#")) return path;
  const clean = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

/**
 * Path without the language: "/en/club" → "/club", "/es/club" → "/club", "/club" → "/club".
 * Gives the same value on the server (which sees the rewritten /es path) and in the
 * browser (which sees /club), so components that read the pathname hydrate cleanly.
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) parts.splice(1, 1);
  return parts.join("/") || "/";
}

/** Same page in another language. */
export function switchPath(pathname: string, to: Locale): string {
  return lp(to, stripLocale(pathname));
}

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = { es: "es_CR", en: "en_US" };
