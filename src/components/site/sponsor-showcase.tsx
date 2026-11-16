import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { sponsors } from "@/lib/data";
import { cn } from "@/lib/utils";

import { DisplayTitle, Eyebrow, LinkButton } from "./primitives";

const beltItems = [...sponsors.official, ...sponsors.partners];

/**
 * Home sponsors section: headline, featured main sponsors (logos) and a scrolling
 * ribbon with the rest. The ribbon pauses on hover and respects reduced motion.
 */
export function SponsorShowcase() {
  return (
    <section aria-labelledby="sponsors-title" className="stripes border-y-4 border-gold text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 pt-22 pb-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>Nuestros patrocinadores</Eyebrow>
            <DisplayTitle id="sponsors-title">No estamos solos.</DisplayTitle>
            <p className="m-0 text-lg leading-relaxed text-mist">
              Estos son nuestros patrocinadores: las marcas que creen en el voleibol femenino y hacen posible cada
              entrenamiento, cada torneo y cada sueño.
            </p>
          </div>
          <LinkButton href="/club#patrocinadores">
            Sé parte <ArrowRightIcon className="size-[18px]" aria-hidden />
          </LinkButton>
        </div>

        <div className="flex flex-wrap items-stretch gap-5">
          <div className="flex flex-[1_1_100%] flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Patrocinadores principales</span>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-4 p-0">
              {sponsors.main.map((s) => (
                <li
                  key={s.name}
                  className={cn(
                    "flex h-40 items-center justify-center overflow-hidden rounded-lg border-2 border-gold shadow-[0_18px_40px_rgba(0,10,30,0.35)]",
                    s.dark ? "bg-[#0b2a6b]" : "bg-white px-8",
                  )}
                >
                  <Image
                    src={s.logo}
                    alt={s.name}
                    width={s.width}
                    height={s.height}
                    sizes="(min-width: 768px) 560px, 100vw"
                    className={cn(s.dark ? "h-full w-full object-cover" : "h-auto max-h-24 w-auto max-w-full")}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex min-w-0 flex-[1_1_100%] items-center overflow-hidden rounded-lg border border-white/20 bg-white/5 py-5">
            <ul className="belt-track m-0 flex w-max list-none gap-4 px-2">
              {[...beltItems, ...beltItems].map((s, i) => (
                <li
                  key={`${s}-${i}`}
                  aria-hidden={i >= beltItems.length || undefined}
                  className="flex h-24 w-52 flex-none items-center justify-center rounded-lg bg-white px-3 text-center text-[13px] font-semibold text-ink-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
