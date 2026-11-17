import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/**
 * Every page lives under /es or /en. Requests without a language prefix
 * (old links like /club, or the bare domain) go to Spanish, unless the
 * visitor already picked English with the ES | EN switch (cookie).
 */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  return isLocale(saved) ? saved : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, icons, sitemap.xml, robots.txt…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
