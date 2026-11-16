"use client";

import { FilterPills } from "@/components/filters/filter-pills";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fixtures, type DivisionName } from "@/lib/data";
import { type CalendarView as View, useFiltersStore } from "@/stores/use-filters-store";

const divisionOptions = ["Todas", "Mini", "Pre-Juvenil", "Juvenil"] as const satisfies readonly (DivisionName | "Todas")[];

export function CalendarView() {
  const division = useFiltersStore((s) => s.calendarDivision);
  const view = useFiltersStore((s) => s.calendarView);
  const setDivision = useFiltersStore((s) => s.setCalendarDivision);
  const setView = useFiltersStore((s) => s.setCalendarView);

  const rows = fixtures.filter(
    (f) => f.past === (view === "resultados") && (division === "Todas" || f.division === division),
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <FilterPills label="Filtrar por división" options={divisionOptions} value={division} onChange={setDivision} />
        <Tabs value={view} onValueChange={(v) => setView(v as View)}>
          <TabsList className="h-auto! overflow-hidden rounded-md border-2 border-gold bg-transparent p-0">
            {(["proximos", "resultados"] as const).map((v) => (
              <TabsTrigger
                key={v}
                value={v}
                className="h-11! cursor-pointer rounded-none px-5 font-display text-base font-extrabold tracking-[0.06em] text-white uppercase data-active:bg-gold! data-active:text-navy-deep!"
              >
                {v === "proximos" ? "Próximos" : "Resultados"}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <ul className="m-0 flex list-none flex-col gap-3 p-0" aria-live="polite">
        {rows.length === 0 ? (
          <li className="rounded-lg bg-navy p-8 text-mist">No hay partidos en esta vista.</li>
        ) : null}
        {rows.map((f) => (
          <li key={f.id} className="flex flex-wrap items-stretch overflow-hidden rounded-lg border border-gold/25 bg-navy">
            <div className="flex flex-[0_0_120px] flex-col items-center justify-center gap-0.5 bg-gold px-3 py-4.5 text-navy-deep">
              <span className="text-xs font-bold tracking-[0.14em] uppercase">[Mes]</span>
              <span className="font-display text-[29px] leading-none font-black">[00]</span>
            </div>
            <div className="flex min-w-0 flex-[1_1_360px] flex-col justify-center gap-1.5 px-6 py-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex min-h-6.5 items-center rounded-full border border-gold-light/60 px-2.5 text-xs font-bold tracking-[0.08em] text-gold-light uppercase">
                  {f.division}
                </span>
                <span className="text-[13px] text-haze">
                  {f.type} · {f.time}
                </span>
              </div>
              <span className="font-display text-[18px] leading-[1.05] font-extrabold uppercase">{f.title}</span>
              <span className="text-sm text-mist">{f.venue}</span>
            </div>
            <div className="flex flex-[0_1_200px] items-center justify-end px-6 py-5">
              {f.past ? (
                <div className="flex flex-col items-end gap-1">
                  <span className="font-display text-[26px] leading-none font-black">{f.score}</span>
                  <span className="text-xs font-bold tracking-[0.12em] text-gold-light uppercase">Resultado</span>
                </div>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded border-2 border-white/50 px-4.5 text-[13px] font-bold tracking-[0.08em] uppercase">
                  {f.where}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
