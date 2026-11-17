"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Brand } from "@/components/site/brand-name";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/i18n/client";
import { stripLocale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/use-ui-store";

import shield from "../../../public/images/escudo-nexxa-rise.png";

import { LanguageSwitch } from "./language-switch";

export function SiteHeader() {
  // Path without the language, identical on server and client (see stripLocale).
  const path = stripLocale(usePathname());
  const { c, href } = useI18n();
  const open = useUiStore((s) => s.mobileNavOpen);
  const setOpen = useUiStore((s) => s.setMobileNavOpen);

  const isActive = (p: string) => path === p || path.startsWith(`${p}/`);
  // Transparent nav floating over the hero; the join page has a gold hero, so it keeps the solid bar.
  const overlay = path !== "/unete";

  return (
    <header
      className={cn(
        "z-20 text-white",
        overlay
          ? "absolute inset-x-0 top-0 bg-linear-to-b from-navy-deep/70 to-transparent"
          : "relative border-b border-gold/35 bg-navy-deep",
      )}
    >
      <nav
        aria-label={c.ui.navMain}
        className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-5"
      >
        {/* Principal shield, oversized so it hangs below the bar */}
        <Link
          href={href("/")}
          className="relative block h-12 w-[116px] shrink-0 md:h-14 md:w-[190px]"
          aria-label={c.ui.homeAria}
        >
          <Image
            src={shield}
            alt=""
            priority
            sizes="(min-width: 768px) 169px, 104px"
            className="absolute top-[-6px] left-0 h-auto w-[104px] drop-shadow-[0_6px_12px_rgba(0,10,30,0.5)] md:top-[-10px] md:w-[169px] md:drop-shadow-[0_10px_18px_rgba(0,10,30,0.5)]"
          />
        </Link>

        <div className="flex items-center gap-3 xl:gap-6">
          {/* Desktop links */}
          <div className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-1 xl:flex">
            {c.nav.map((l) => (
              <Link
                key={l.href}
                href={href(l.href)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center border-b-[3px] text-sm font-semibold tracking-[0.08em] uppercase transition-colors",
                  isActive(l.href)
                    ? "border-gold text-gold-light"
                    : "border-transparent text-white hover:text-gold-light",
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={href("/unete")}
              className="inline-flex min-h-11 items-center rounded bg-gold px-5 text-[13px] font-bold tracking-[0.08em] text-navy-deep uppercase hover:bg-gold-light"
            >
              {c.ui.join}
            </Link>
          </div>

          <LanguageSwitch />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-12 items-center justify-center rounded border border-gold/60 text-white xl:hidden"
              aria-label={c.ui.openMenu}
            >
              <MenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] border-l-gold/40 bg-navy-deep p-6 pt-16 text-white">
              <SheetTitle className="sr-only">{c.ui.menu}</SheetTitle>
              <div className="flex flex-col">
                {[{ label: c.ui.home, href: "/" }, ...c.nav].map((l) => (
                  <Link
                    key={l.href}
                    href={href(l.href)}
                    onClick={() => setOpen(false)}
                    aria-current={path === l.href ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center border-b border-white/10 font-display text-2xl font-black uppercase",
                      path === l.href ? "text-gold" : "text-white",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href={href("/unete")}
                  onClick={() => setOpen(false)}
                  className="mt-6 flex min-h-13 items-center justify-center rounded bg-gold text-sm font-bold tracking-[0.08em] text-navy-deep uppercase"
                >
                  {c.ui.joinFull}&nbsp;
                  <Brand />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
