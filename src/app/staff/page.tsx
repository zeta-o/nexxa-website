import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { UserRoundIcon } from "lucide-react";

import { DisplayTitle, Eyebrow, LinkButton, PageHero } from "@/components/site/primitives";
import { PageFlip } from "@/components/staff/page-flip";
import { StaffGrid } from "@/components/staff/staff-grid";
import { leaders } from "@/lib/data";

import yuliana1 from "../../../public/images/yuliana-1.jpg";
import yuliana2 from "../../../public/images/yuliana-2.jpg";
import yuliana3 from "../../../public/images/yuliana-3.jpg";

/** Photo sets for the leader cards, by name. Leaders without photos keep the placeholder. */
const leaderPhotos: Record<string, StaticImageData[]> = {
  "Yuliana González": [yuliana3, yuliana2, yuliana1],
};

export const metadata: Metadata = {
  title: "Staff",
  description: "Dirección, entrenadores y equipo de apoyo de NEXXA RISE.",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff"
        title={
          <>
            Quienes guían
            <br />
            <span className="text-gold">al equipo.</span>
          </>
        }
        intro="Entrenadores, preparación física y coordinación: el equipo detrás de cada división."
      />

      <section className="bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-6 py-24">
          <div className="flex flex-col gap-2.5">
            <Eyebrow tone="dark">Dirección</Eyebrow>
            <DisplayTitle>Liderazgo del club</DisplayTitle>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-5">
            {leaders.map((l) => (
              <article key={l.role} className="flex flex-wrap overflow-hidden rounded-lg border border-silver bg-white">
                {leaderPhotos[l.name] ? (
                  <PageFlip
                    photos={leaderPhotos[l.name]}
                    alt={`${l.name}, ${l.role.toLowerCase()} de NEXXA RISE`}
                    className="min-h-80 flex-[0_0_240px] max-sm:min-h-[420px] max-sm:flex-[1_1_100%]"
                  />
                ) : (
                  <div role="img" aria-label="Foto (pendiente)" className="stripes flex min-h-60 flex-[0_0_200px] items-center justify-center max-sm:flex-[1_1_100%]">
                    <UserRoundIcon className="size-18 text-white/30" strokeWidth={1.2} aria-hidden />
                  </div>
                )}
                <div className="flex flex-[1_1_220px] flex-col gap-2.5 p-7">
                  <span className="text-xs font-bold tracking-[0.16em] text-gold-dark uppercase">{l.role}</span>
                  <span className="font-display text-[22px] leading-none font-black uppercase">{l.name}</span>
                  <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{l.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stripes-deep">
        <div className="mx-auto max-w-[1240px] px-6 py-24">
          <StaffGrid />
        </div>
      </section>

      <section className="bg-gold text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-6 py-14">
          <h2 className="m-0 font-display text-[clamp(21px,2.6vw,32px)] leading-[0.95] font-black uppercase">
            ¿Quieres ser parte del staff?
          </h2>
          <LinkButton href="/unete" variant="navy" className="min-h-14 px-8">
            Contáctanos
          </LinkButton>
        </div>
      </section>
    </>
  );
}
