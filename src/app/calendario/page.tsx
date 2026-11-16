import type { Metadata } from "next";

import { CalendarView } from "@/components/calendar/calendar-view";
import { PageHero } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Calendario",
  description: "Partidos, torneos y resultados de NEXXA RISE en todas sus divisiones.",
};

export default function CalendarioPage() {
  return (
    <>
      <PageHero
        eyebrow="Temporada 2026–27"
        title="Calendario"
        intro="Partidos, torneos y resultados de todas las divisiones."
      />
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-[1240px] px-6 pt-18 pb-24">
          <CalendarView />
        </div>
      </section>
    </>
  );
}
