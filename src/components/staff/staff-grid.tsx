"use client";

import type { StaticImageData } from "next/image";
import { UserRoundIcon } from "lucide-react";

import { FilterPills } from "@/components/filters/filter-pills";
import { PageFlip } from "@/components/staff/page-flip";
import { useI18n } from "@/i18n/client";
import type { StaffGroup } from "@/lib/data";
import { useFiltersStore } from "@/stores/use-filters-store";

import alex1 from "../../../public/images/alex-1.jpg";
import alex2 from "../../../public/images/alex-2.jpg";
import alex3 from "../../../public/images/alex-3.jpg";
import danilo1 from "../../../public/images/danilo-1.jpg";
import danilo2 from "../../../public/images/danilo-2.jpg";
import danilo3 from "../../../public/images/danilo-3.jpg";

/** Photo sets for staff cards, by name. Staff without photos keep the placeholder. */
const staffPhotos: Record<string, StaticImageData[]> = {
  "Alex Díaz": [alex1, alex2, alex3],
  "Danilo Ruiz": [danilo1, danilo2, danilo3],
};

const groups = ["Todas", "Escuelita", "Mini", "Infantil", "Juvenil", "Apoyo"] as const satisfies readonly (StaffGroup | "Todas")[];

export function StaffGrid() {
  const { c } = useI18n();
  const staff = c.staff;
  const group = useFiltersStore((s) => s.staffGroup);
  const setGroup = useFiltersStore((s) => s.setStaffGroup);
  // Only offer divisions that have someone listed; the filter shows up once there are two or more.
  const options = groups.filter((g) => g === "Todas" || staff.some((s) => s.group === g));
  const active = options.includes(group) ? group : "Todas";
  const visible = staff.filter((s) => active === "Todas" || s.group === active);

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow text-gold-light">{c.ui.staffEyebrow}</span>
          <h2 className="m-0 font-display text-[clamp(26px,3.0vw,40px)] leading-[0.95] font-black uppercase">
            {c.ui.staffTitle}
          </h2>
        </div>
        {options.length > 2 && (
          <FilterPills label={c.ui.filterDivision} options={options} value={active} onChange={setGroup} labelFor={c.groupLabel} />
        )}
      </div>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-5 p-0" aria-live="polite">
        {visible.map((s, i) => (
          <li key={`${s.group}-${i}`} className="flex flex-col overflow-hidden rounded-lg border border-gold/30 bg-navy">
            <div className="relative h-72">
              {staffPhotos[s.name] ? (
                <PageFlip photos={staffPhotos[s.name]} alt={`${s.name}, ${s.role.toLowerCase()}`} offset={i * 2} className="absolute inset-0" />
              ) : (
                <div role="img" aria-label={c.ui.photoPending} className="stripes flex h-full items-center justify-center">
                  <UserRoundIcon className="size-16 text-white/25" strokeWidth={1.2} aria-hidden />
                </div>
              )}
              <span className="absolute top-4 left-4 z-10 inline-flex min-h-7 items-center rounded-full bg-gold px-3 text-xs font-bold tracking-[0.08em] text-navy-deep uppercase">
                {c.groupLabel(s.group)}
              </span>
            </div>
            <div className="flex flex-col gap-2 px-5.5 pt-5 pb-6">
              <span className="font-display text-[17px] leading-none font-extrabold uppercase">{s.name}</span>
              <span className="text-[13px] font-semibold tracking-widest text-gold-light uppercase">{s.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
