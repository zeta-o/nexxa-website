/**
 * Feature flags. Sections behind a flag are hidden everywhere (nav, footer,
 * sitemap, home teasers) and their pages return 404 while the flag is off.
 *
 * Turn one on by setting the env var to "true" in Vercel (Project → Settings →
 * Environment Variables) and redeploying. NEXT_PUBLIC_ because the header is a
 * client component; the values are read at build time.
 */
export const features = {
  calendar: process.env.NEXT_PUBLIC_FEATURE_CALENDAR === "true",
  gallery: process.env.NEXT_PUBLIC_FEATURE_GALLERY === "true",
} as const;
