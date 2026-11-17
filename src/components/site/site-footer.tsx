import Link from "next/link";

import { Brand } from "@/components/site/brand-name";
import { getI18n } from "@/i18n/server";
import { site } from "@/lib/data";

import { BrandLogo, Slogan } from "./primitives";
import { SocialIcons } from "./social-icons";

export async function SiteFooter() {
  const { c, href } = await getI18n();
  const explore = [...c.nav.filter((l) => l.href !== "/galeria"), { label: c.ui.tryouts, href: "/unete" }];

  return (
    <footer className="stripes border-t-4 border-gold text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 pt-16 pb-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_420px] flex-col gap-4">
            <BrandLogo variant="horizontal-blanco" className="w-[420px] max-w-full" />
            <Slogan className="-rotate-2 text-[34px] text-gold-light" />
            <span className="text-sm text-haze">
              {c.ui.footerTagline} · {site.location.city} · {site.handle}
            </span>
          </div>
          <div className="flex flex-[0_1_200px] flex-col">
            <span className="mb-1.5 text-xs font-bold tracking-[0.18em] text-gold-light uppercase">{c.ui.explore}</span>
            {explore.map((l) => (
              <Link key={l.href} href={href(l.href)} className="py-1.5 text-[15px] text-white hover:text-gold-light">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-[0_1_260px] flex-col">
            <span className="mb-1.5 text-xs font-bold tracking-[0.18em] text-gold-light uppercase">{c.ui.contact}</span>
            <a href={`mailto:${site.contact.email}`} className="py-1.5 text-[15px] text-mist hover:text-gold-light">
              {site.contact.email}
            </a>
            <a href={site.contact.phoneHref} className="py-1.5 text-[15px] text-mist hover:text-gold-light">
              {c.ui.tel} {site.contact.phone}
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="py-1.5 text-[15px] text-mist hover:text-gold-light"
            >
              {c.ui.whatsapp}
            </a>
            <a
              href={site.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="py-1.5 text-[15px] text-mist hover:text-gold-light"
            >
              {site.location.venue}, {site.location.city} · {c.ui.viewMaps}
            </a>
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-[13px] text-haze">
          <span>
            © {site.copyrightYear} <Brand />. {c.ui.rights}
          </span>
          <span>{c.ui.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
