import Link from "next/link";

import { site } from "@/lib/data";

import { Crest } from "./primitives";
import { SocialIcons } from "./social-icons";

const explore = [
  { label: "Club", href: "/club" },
  { label: "Divisiones", href: "/divisiones" },
  { label: "Staff", href: "/staff" },
  { label: "Calendario", href: "/calendario" },
  { label: "Pruebas", href: "/unete" },
];

export function SiteFooter() {
  return (
    <footer className="stripes border-t-4 border-gold text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 pt-16 pb-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_280px] items-center gap-4">
            <Crest className="w-[88px]" sizes="88px" alt="Escudo NEXXA RISE" />
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-[32px] leading-none font-black">
                NEXXA <span className="text-gold">RISE</span>
              </span>
              <span className="text-sm text-haze">Voleibol femenino · {site.location.city}</span>
            </div>
          </div>
          <div className="flex flex-[0_1_200px] flex-col">
            <span className="mb-1.5 text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Explora</span>
            {explore.map((l) => (
              <Link key={l.href} href={l.href} className="py-1.5 text-[15px] text-white hover:text-gold-light">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-[0_1_260px] flex-col">
            <span className="mb-1.5 text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Contacto</span>
            <span className="py-1.5 text-[15px] text-mist">{site.contact.email}</span>
            <span className="py-1.5 text-[15px] text-mist">
              {site.location.venue}, {site.location.city}
            </span>
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-[13px] text-haze">
          <span>© {site.copyrightYear} NEXXA RISE. Todos los derechos reservados.</span>
          <span>Hecho con pasión.</span>
        </div>
      </div>
    </footer>
  );
}
