import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale } from "@/i18n/config";

/**
 * Spanish is the default and has no prefix: /club is served by app/[lang]/club
 * with lang = "es" (rewrite, the URL stays /club). English lives under /en.
 * Old /es/... links redirect permanently to the unprefixed URL.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === "en") return;

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, icons, sitemap.xml, robots.txt…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
