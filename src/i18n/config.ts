/** Supported languages. Every page lives under /es/... or /en/... */
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** Cookie that remembers the language a visitor picked with the switch. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

/** Prefix an internal path with the language: lp("en", "/club") → "/en/club". */
export function lp(lang: Locale, path: string): string {
  if (path === "/" || path === "") return `/${lang}`;
  if (path.startsWith("#")) return path;
  return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Same page in another language: switchPath("/es/club", "en") → "/en/club". */
export function switchPath(pathname: string, to: Locale): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join("/") || `/${to}`;
}

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = { es: "es_CR", en: "en_US" };
