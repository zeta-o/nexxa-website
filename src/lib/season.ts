import { cacheLife } from "next/cache";

/**
 * Current calendar year, cached for a day so pages stay prerendered and roll over on their own in January.
 * (A bare `new Date()` isn't allowed in a prerendered page with Cache Components.)
 */
export async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

/**
 * Birth years for an under-N category code ("U13") in a given year: the two oldest years still eligible.
 * U13 in 2026 → "2014–2015". Returns undefined for categories without a code (Escuelita).
 */
export function bornRange(code: string | undefined, year: number) {
  const n = Number(code?.match(/^U(\d+)$/)?.[1]);
  if (!n) return undefined;
  return `${year - n + 1}–${year - n + 2}`;
}
