import { getI18n } from "@/i18n/server";
import type { Fixture } from "@/lib/data";

import { Brand } from "./brand-name";

import { Crest } from "./primitives";

export async function NextMatchCard({ fixture }: { fixture: Fixture }) {
  const { c } = await getI18n();
  const u = c.ui;
  return (
    <div className="stripes flex flex-wrap items-center justify-between gap-8 rounded-lg border-2 border-gold p-6 md:p-10">
      <div className="flex min-w-0 flex-[1_1_260px] items-center gap-5">
        <Crest className="w-24 flex-none" sizes="96px" alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
            {fixture.division} · {fixture.where === "Local" ? u.home_ : u.away}
          </span>
          <Brand className="text-[38px] leading-none" />
        </div>
      </div>
      <div className="flex flex-[0_1_220px] flex-col items-center gap-2 text-center">
        <span className="font-accent text-[52px] leading-none text-gold-light">VS</span>
        <span className="text-[15px] font-semibold">
          {fixture.date} · {fixture.time}
        </span>
        <span className="text-sm text-haze">{fixture.venue}</span>
      </div>
      <div className="flex min-w-0 flex-[1_1_260px] items-center justify-end gap-5 text-right">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">{u.opponent}</span>
          <span className="font-accent text-[38px] leading-none tracking-wide uppercase">{u.opponentName}</span>
        </div>
        <div
          role="img"
          aria-label={u.opponentCrestAria}
          className="flex size-24 flex-none items-center justify-center rounded-full border-2 border-dashed border-white/40 text-xs tracking-widest text-haze uppercase"
        >
          {u.opponentCrest}
        </div>
      </div>
    </div>
  );
}
