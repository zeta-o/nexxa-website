import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { DisplayTitle, Eyebrow, LevelBars, LinkButton, PageHero } from "@/components/site/primitives";
import { divisions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Divisiones",
  description: "Mini, Pre-Juvenil y Juvenil: las tres etapas de formación de NEXXA RISE.",
};

export default function DivisionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Divisiones"
        title={
          <>
            Tres etapas.
            <br />
            <span className="text-gold">Un solo club.</span>
          </>
        }
        intro="Cada jugadora crece a su ritmo: desde su primer contacto con el balón hasta la competencia de liga."
      >
        <div aria-hidden className="flex h-40 items-end gap-3.5">
          {divisions.map((d, i) => (
            <div key={d.name} className="flex flex-col items-center gap-2">
              <span className="block w-14 rounded-[3px] bg-gold" style={{ height: 56 + i * 40 }} />
              <span className="text-xs font-bold tracking-widest text-gold-light uppercase">
                {d.name === "Pre-Juvenil" ? "Pre-Juv." : d.name}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* DIVISION CARDS */}
      <section className="bg-cream text-navy-deep">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-stretch gap-5 px-6 py-24">
          {divisions.map((d) => (
            <article key={d.name} id={d.name.toLowerCase()} className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg bg-navy text-white">
              <div className="stripes-deep flex items-end justify-between gap-4 border-b-4 border-gold px-7 pt-7 pb-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Etapa {d.n}</span>
                  <h2 className="m-0 font-display text-[34px] leading-[0.9] font-black uppercase">{d.name}</h2>
                </div>
                <LevelBars level={d.level} />
              </div>
              <div className="flex flex-1 flex-col gap-4.5 px-7 pt-6 pb-7">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex min-h-8 items-center rounded-full bg-gold/18 px-3 text-[13px] font-bold tracking-[0.06em] text-gold-light">
                    [Edades]
                  </span>
                  <span className="inline-flex min-h-8 items-center rounded-full border border-white/30 px-3 text-[13px] font-semibold">
                    {d.focus}
                  </span>
                </div>
                <p className="m-0 text-[15px] leading-relaxed text-mist">{d.text}</p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-sm">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 size-4 flex-none text-gold" strokeWidth={3} aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4.5">
                  <Link href="/staff" className="py-3 text-sm text-gold-light hover:text-white">
                    Ver entrenadores
                  </Link>
                  <Link
                    href="/unete"
                    className="py-3 text-sm font-bold tracking-[0.06em] text-gold-light uppercase hover:text-white"
                  >
                    Inscribirme →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SCHEDULE TABLE */}
      <section className="bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-24">
          <div className="flex flex-col gap-2.5">
            <Eyebrow tone="dark">De un vistazo</Eyebrow>
            <DisplayTitle>Horarios y detalles</DisplayTitle>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[720px] border-collapse text-[15px]">
              <thead>
                <tr className="bg-navy text-left text-white">
                  {["División", "Edades", "Entrenamientos", "Horario", "Competencia"].map((h) => (
                    <th key={h} scope="col" className="px-5 py-4.5 text-[13px] tracking-[0.12em] uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {divisions.map((d) => (
                  <tr key={d.name} className="border-t border-border">
                    <th scope="row" className="px-5 py-4.5 text-left font-display text-[16px] font-extrabold uppercase">
                      {d.name}
                    </th>
                    <td className="px-5 py-4.5 text-ink-soft">[Edades]</td>
                    <td className="px-5 py-4.5 text-ink-soft">[Días por semana]</td>
                    <td className="px-5 py-4.5 text-ink-soft">[Horario]</td>
                    <td className="px-5 py-4.5 text-ink-soft">{d.competition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gold text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-6 py-16">
          <h2 className="m-0 font-display text-[clamp(24px,3.0vw,37px)] leading-[0.95] font-black uppercase">
            ¿No sabes en qué división va tu hija?
          </h2>
          <LinkButton href="/unete" variant="navy" className="min-h-14 px-8">
            Escríbenos
          </LinkButton>
        </div>
      </section>
    </>
  );
}
