import Link from "next/link";

import { sponsors } from "@/lib/data";

const beltItems = [sponsors.main, ...sponsors.official, ...sponsors.partners.slice(0, 3)];

/** Scrolling sponsor ribbon. Pauses on hover and respects reduced motion. */
export function SponsorBelt() {
  return (
    <section
      aria-labelledby="belt-title"
      className="overflow-hidden border-y-4 border-gold bg-white text-navy-deep"
    >
      <div className="flex flex-wrap items-stretch">
        <div className="relative z-10 flex min-h-28 flex-[0_0_auto] flex-col justify-center gap-1 bg-navy-deep px-7 py-4 text-white">
          <span id="belt-title" className="font-display text-lg leading-none font-black tracking-wide uppercase">
            Patrocinadores
          </span>
          <Link
            href="/club#patrocinadores"
            className="py-1.5 text-[13px] font-bold tracking-[0.06em] text-gold-light uppercase hover:text-white"
          >
            Conócelos →
          </Link>
        </div>
        <div className="flex min-w-0 flex-[1_1_300px] items-center overflow-hidden py-5">
          <ul className="belt-track m-0 flex w-max list-none gap-4 px-2">
            {[...beltItems, ...beltItems].map((s, i) => (
              <li
                key={`${s}-${i}`}
                aria-hidden={i >= beltItems.length || undefined}
                className="flex h-18 w-45 flex-none items-center justify-center rounded-lg border border-dashed border-haze text-[13px] font-semibold text-ink-muted"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
