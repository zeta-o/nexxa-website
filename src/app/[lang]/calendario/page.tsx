import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CalendarView } from "@/components/calendar/calendar-view";
import { PageHero } from "@/components/site/primitives";
import { pick } from "@/i18n/server";
import { features } from "@/lib/flags";

const copy = {
  es: {
    meta: { title: "Calendario", description: "Partidos, torneos y resultados de NEXXA RISE en todas sus divisiones." },
    eyebrow: "Temporada 2026–27",
    title: "Calendario",
    intro: "Partidos, torneos y resultados de todas las divisiones.",
  },
  en: {
    meta: { title: "Calendar", description: "NEXXA RISE matches, tournaments and results across all divisions." },
    eyebrow: "2026–27 season",
    title: "Calendar",
    intro: "Matches, tournaments and results for every division.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return (await pick(copy)).meta;
}

export default async function CalendarioPage() {
  if (!features.calendar) notFound();
  const t = await pick(copy);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
      />
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-[1240px] px-6 pt-18 pb-24">
          <CalendarView />
        </div>
      </section>
    </>
  );
}
