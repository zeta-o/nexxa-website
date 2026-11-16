import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { DisplayTitle, Eyebrow, LevelBars, LinkButton, PageHero } from "@/components/site/primitives";
import { divisions, futureTeam } from "@/lib/data";

export const metadata: Metadata = {
  title: "Divisiones",
  description:
    "Escuelita, Mini, Infantil (Pre-Infantil e Infantil) y Juvenil (Pre-Juvenil y Juvenil): el camino de formación de NEXXA RISE.",
};

/** One row per category for the schedule table. */
const rows = divisions.flatMap((d) =>
  (d.categories ?? [d.name]).map((c) => ({ category: c, process: d.name, competition: d.competition })),
);

export default function DivisionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Divisiones"
        title={
          <>
            Escalón por escalón.
            <br />
            <span className="text-gold-light">Un solo club.</span>
          </>
        }
        intro="Cada jugadora crece a su ritmo: desde su primer contacto con el balón en la Escuelita hasta la competencia de liga."
      >
        <div aria-hidden className="flex h-44 items-end gap-3">
          {divisions.map((d, i) => (
            <div key={d.name} className="flex flex-col items-center gap-2">
              <span className="block w-12 rounded-[3px] bg-gold" style={{ height: 40 + i * 34 }} />
              <span className="text-[11px] font-bold tracking-widest text-gold-light uppercase">{d.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <span className="block h-[176px] w-12 rounded-[3px] border-2 border-dashed border-gold-light/70" />
            <span className="text-[11px] font-bold tracking-widest text-white/70 uppercase">Mayor</span>
          </div>
        </div>
      </PageHero>

      {/* PROCESS CARDS */}
      <section className="bg-white text-navy-deep">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] items-stretch gap-5 px-6 pt-24 pb-10">
          {divisions.map((d) => (
            <article
              key={d.name}
              id={d.name.toLowerCase()}
              className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg bg-navy text-white"
            >
              <div className="stripes-deep flex items-end justify-between gap-4 border-b-4 border-gold px-6 pt-6 pb-5">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Etapa {d.n}</span>
                  <h2 className="m-0 font-accent text-[40px] leading-none font-normal tracking-wide uppercase">{d.name}</h2>
                </div>
                <LevelBars level={d.level} />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 pt-5 pb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex min-h-8 items-center rounded-full border border-white/30 px-3 text-[13px] font-semibold">
                    {d.focus}
                  </span>
                  {d.categories ? (
                    <span className="inline-flex min-h-8 items-center rounded-full bg-gold px-3 text-[13px] font-bold text-navy-deep">
                      2 categorías
                    </span>
                  ) : null}
                </div>
                {d.categories ? (
                  <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0">
                    {d.categories.map((c) => (
                      <li key={c} className="flex flex-col rounded-md border border-sky/60 px-3 py-2">
                        <span className="text-sm font-bold">{c}</span>
                        <span className="text-xs text-haze">[Edades]</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-sm text-haze">[Edades]</span>
                )}
                <p className="m-0 text-[15px] leading-relaxed text-white">{d.text}</p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-sm">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 size-4 flex-none text-gold-light" strokeWidth={3} aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
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

        {/* FUTURE: EQUIPO MAYOR */}
        <div className="mx-auto max-w-[1240px] px-6 pb-24">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border-2 border-dashed border-gold p-7">
            <div className="flex max-w-[760px] flex-col gap-2">
              <span className="eyebrow text-gold-dark">Proyecto a futuro</span>
              <h2 className="m-0 font-display text-[28px] leading-none font-black uppercase">{futureTeam.name}</h2>
              <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{futureTeam.text}</p>
            </div>
            <span className="inline-flex min-h-10 items-center rounded-full bg-navy-deep px-5 text-sm font-bold tracking-[0.08em] text-gold-light uppercase">
              Próximamente
            </span>
          </div>
        </div>
      </section>

      {/* SCHEDULE TABLE — one row per category */}
      <section className="border-t border-silver bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-24">
          <div className="flex flex-col gap-2.5">
            <Eyebrow tone="dark">De un vistazo</Eyebrow>
            <DisplayTitle>Horarios por categoría</DisplayTitle>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[760px] border-collapse text-[15px]">
              <thead>
                <tr className="bg-navy text-left text-white">
                  {["Categoría", "Proceso", "Edades", "Entrenamientos", "Horario", "Competencia"].map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 text-[13px] tracking-[0.12em] uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.category} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-left font-display text-[15px] font-extrabold uppercase">
                      {r.category}
                    </th>
                    <td className="px-5 py-4 text-ink-soft">{r.process}</td>
                    <td className="px-5 py-4 text-ink-soft">[Edades]</td>
                    <td className="px-5 py-4 text-ink-soft">[Días por semana]</td>
                    <td className="px-5 py-4 text-ink-soft">[Horario]</td>
                    <td className="px-5 py-4 text-ink-soft">{r.competition}</td>
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
            ¿No sabes en qué categoría va tu hija?
          </h2>
          <LinkButton href="/unete" variant="navy" className="min-h-14 px-8">
            Escríbenos
          </LinkButton>
        </div>
      </section>
    </>
  );
}
