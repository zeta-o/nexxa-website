import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { DisplayTitle, Eyebrow, LevelBars, LinkButton, PageHero } from "@/components/site/primitives";
import { getI18n, pick } from "@/i18n/server";
import { BrandText } from "@/components/site/brand-name";

const copy = {
  es: {
    meta: {
      title: "Divisiones",
      description:
        "Escuelita, Mini, Pre-Infantil, Infantil y Juvenil: el camino de formación de NEXXA RISE.",
    },
    heroEyebrow: "Divisiones",
    heroTitle: (
      <>
        Escalón por escalón.
        <br />
        <span className="text-gold-light">Un solo club.</span>
      </>
    ),
    heroIntro:
      "Cada jugadora crece a su ritmo: desde su primer contacto con el balón en la Escuelita hasta la competencia de liga.",
    senior: "Mayor",
    stage: "Etapa",
    process: "Proceso",
    ages: "[Edades]",
    bornLabel: "Nacidas",
    coaches: "Ver entrenadores",
    signUp: "Inscribirme →",
    future: "Proyecto a futuro",
    soon: "Próximamente",
    tableEyebrow: "De un vistazo",
    tableTitle: "Horarios por categoría",
    cols: ["Categoría", "Proceso", "Edades", "Año de nacimiento", "Entrenamientos", "Horario", "Competencia"],
    days: "[Días por semana]",
    time: "[Horario]",
    ctaTitle: "¿No sabes en qué categoría va tu hija?",
    ctaButton: "Escríbenos",
  },
  en: {
    meta: {
      title: "Divisions",
      description:
        "Escuelita, Mini, Pre-Infantil, Infantil and Juvenil: the NEXXA RISE player pathway.",
    },
    heroEyebrow: "Divisions",
    heroTitle: (
      <>
        Step by step.
        <br />
        <span className="text-gold-light">One club.</span>
      </>
    ),
    heroIntro:
      "Every player grows at her own pace: from her first touch of the ball in Escuelita to league competition.",
    senior: "Senior",
    stage: "Stage",
    process: "Process",
    ages: "[Ages]",
    bornLabel: "Born",
    coaches: "See coaches",
    signUp: "Sign up →",
    future: "Future project",
    soon: "Coming soon",
    tableEyebrow: "At a glance",
    tableTitle: "Schedule by category",
    cols: ["Category", "Process", "Ages", "Birth year", "Practices", "Schedule", "Competition"],
    days: "[Days per week]",
    time: "[Schedule]",
    ctaTitle: "Not sure which category your daughter belongs in?",
    ctaButton: "Write to us",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return (await pick(copy)).meta;
}

const slug = (name: string) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default async function DivisionesPage() {
  const { c, href } = await getI18n();
  const t = await pick(copy);
  const { pathway, futureTeam } = c;
  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        intro={t.heroIntro}
      >
        <div aria-hidden className="flex h-48 items-end gap-2 max-sm:hidden">
          {pathway.map((d, i) => (
            <div key={d.name} className="flex w-14 flex-col items-center gap-2">
              <span className="block w-10 rounded-[3px] bg-gold" style={{ height: 32 + i * 24 }} />
              <span className="h-7 text-center text-[10px] leading-tight font-bold tracking-wider text-gold-light uppercase">
                {d.name.replace("Pre-", "Pre-\u00a0").split("\u00a0").map((w) => (
                  <span key={w} className="block">
                    {w}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="flex w-14 flex-col items-center gap-2">
            <span className="block h-[176px] w-10 rounded-[3px] border-2 border-dashed border-gold-light/70" />
            <span className="h-7 text-[10px] font-bold tracking-wider text-white/70 uppercase">{t.senior}</span>
          </div>
        </div>
      </PageHero>

      {/* PROCESS CARDS */}
      <section className="bg-white text-navy-deep">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-stretch gap-5 px-6 pt-24 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {pathway.map((d, i) => (
            <article
              key={d.name}
              id={slug(d.name)}
              className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg bg-navy text-white"
            >
              <div className="stripes-deep flex items-end justify-between gap-4 border-b-4 border-gold px-6 pt-6 pb-5">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">{t.stage} {d.n}</span>
                  <h2 className="m-0 font-accent text-[40px] leading-none font-normal tracking-wide uppercase">{d.name}</h2>
                </div>
                <LevelBars level={i + 1} steps={pathway.length} />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 pt-5 pb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex min-h-8 items-center rounded-full border border-white/30 px-3 text-[13px] font-semibold">
                    {d.process ? `${t.process} ${d.process}` : d.tag}
                  </span>
                  {d.process ? (
                    <span className="inline-flex min-h-8 items-center rounded-full bg-gold px-3 text-[13px] font-bold text-navy-deep">
                      {d.tag.split("· ")[1]}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  {d.code ? (
                    <span className="inline-flex min-h-7 items-center rounded bg-sky px-2.5 font-bold text-white">{d.code}</span>
                  ) : null}
                  <span className={d.ages ? "font-semibold text-white" : "text-haze"}>{d.ages ?? t.ages}</span>
                  {d.born ? (
                    <span className="text-haze">
                      · {t.bornLabel} {d.born}
                    </span>
                  ) : null}
                </div>
                <p className="m-0 text-[15px] leading-relaxed text-white"><BrandText>{d.text}</BrandText></p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-sm">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 size-4 flex-none text-gold-light" strokeWidth={3} aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
                  <Link href={href("/staff")} className="py-3 text-sm text-gold-light hover:text-white">
                    {t.coaches}
                  </Link>
                  <Link
                    href={href("/unete")}
                    className="py-3 text-sm font-bold tracking-[0.06em] text-gold-light uppercase hover:text-white"
                  >
                    {t.signUp}
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
              <span className="eyebrow text-gold-dark">{t.future}</span>
              <h2 className="m-0 font-display text-[28px] leading-none font-black uppercase">{futureTeam.name}</h2>
              <span className="text-sm font-bold text-gold-dark">
                {futureTeam.code} · {t.bornLabel} {futureTeam.born}
              </span>
              <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{futureTeam.text}</p>
            </div>
            <span className="inline-flex min-h-10 items-center rounded-full bg-navy-deep px-5 text-sm font-bold tracking-[0.08em] text-gold-light uppercase">
              {t.soon}
            </span>
          </div>
        </div>
      </section>

      {/* SCHEDULE TABLE — one row per category */}
      <section className="border-t border-silver bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-24">
          <div className="flex flex-col gap-2.5">
            <Eyebrow tone="dark">{t.tableEyebrow}</Eyebrow>
            <DisplayTitle>{t.tableTitle}</DisplayTitle>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[880px] border-collapse text-[15px]">
              <thead>
                <tr className="bg-navy text-left text-white">
                  {t.cols.map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 text-[13px] tracking-[0.12em] uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pathway.map((r) => (
                  <tr key={r.name} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-left font-display text-[15px] font-extrabold uppercase">
                      {r.name}
                    </th>
                    <td className="px-5 py-4 text-ink-soft">{r.process ?? r.name}</td>
                    <td className="px-5 py-4 text-ink-soft">
                      {r.code ? <strong className="text-navy-deep">{r.code} · </strong> : null}
                      {r.ages ?? t.ages}
                    </td>
                    <td className="px-5 py-4 text-ink-soft">{r.born ?? "—"}</td>
                    <td className="px-5 py-4 text-ink-soft">{t.days}</td>
                    <td className="px-5 py-4 text-ink-soft">{t.time}</td>
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
            {t.ctaTitle}
          </h2>
          <LinkButton href={href("/unete")} variant="navy" className="min-h-14 px-8">
            {t.ctaButton}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
