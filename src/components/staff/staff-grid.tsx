"use client";

import { UserRoundIcon } from "lucide-react";

import { FilterPills } from "@/components/filters/filter-pills";
import { useI18n } from "@/i18n/client";
import type { StaffGroup } from "@/lib/data";
import { useFiltersStore } from "@/stores/use-filters-store";

const groups = ["Todas", "Escuelita", "Mini", "Infantil", "Juvenil", "Apoyo"] as const satisfies readonly (StaffGroup | "Todas")[];

export function StaffGrid() {
  const { c } = useI18n();
  const staff = c.staff;
  const group = useFiltersStore((s) => s.staffGroup);
  const setGroup = useFiltersStore((s) => s.setStaffGroup);
  const visible = staff.filter((s) => group === "Todas" || s.group === group);

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow text-gold-light">{c.ui.staffEyebrow}</span>
          <h2 className="m-0 font-display text-[clamp(26px,3.0vw,40px)] leading-[0.95] font-black uppercase">
            {c.ui.staffTitle}
          </h2>
        </div>
        <FilterPills label={c.ui.filterDivision} options={groups} value={group} onChange={setGroup} labelFor={c.groupLabel} />
      </div>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-5 p-0" aria-live="polite">
        {visible.map((s, i) => (
          <li key={`${s.group}-${i}`} className="flex flex-col overflow-hidden rounded-lg border border-gold/30 bg-navy">
            <div role="img" aria-label={c.ui.photoPending} className="stripes relative flex h-55 items-center justify-center">
              <UserRoundIcon className="size-16 text-white/25" strokeWidth={1.2} aria-hidden />
              <span className="absolute top-4 left-4 inline-flex min-h-7 items-center rounded-full bg-gold px-3 text-xs font-bold tracking-[0.08em] text-navy-deep uppercase">
                {c.groupLabel(s.group)}
              </span>
            </div>
            <div className="flex flex-col gap-2 px-5.5 pt-5 pb-6">
              <span className="font-display text-[17px] leading-none font-extrabold uppercase">{s.name}</span>
              <span className="text-[13px] font-semibold tracking-widest text-gold-light uppercase">{s.role}</span>
              <span className="text-sm leading-normal text-haze">{c.ui.staffBio}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
