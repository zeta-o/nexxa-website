import Link from "next/link";

import { site } from "@/lib/data";

import { BrandLogo, Slogan } from "./primitives";
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
          <div className="flex flex-[1_1_420px] flex-col gap-4">
            <BrandLogo variant="horizontal-blanco" className="w-[420px] max-w-full" />
            <Slogan className="-rotate-2 text-[34px] text-gold-light" />
            <span className="text-sm text-haze">
              Voleibol femenino · {site.location.city} · {site.handle}
            </span>
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
            <a href={`mailto:${site.contact.email}`} className="py-1.5 text-[15px] text-mist hover:text-gold-light">
              {site.contact.email}
            </a>
            <a href={site.contact.phoneHref} className="py-1.5 text-[15px] text-mist hover:text-gold-light">
              Tel. {site.contact.phone}
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="py-1.5 text-[15px] text-mist hover:text-gold-light"
            >
              Escríbenos por WhatsApp →
            </a>
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
