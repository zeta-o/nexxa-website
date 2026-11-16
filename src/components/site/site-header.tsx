"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/use-ui-store";

import { BrandLogo, Crest } from "./primitives";

export function SiteHeader() {
  const pathname = usePathname();
  const open = useUiStore((s) => s.mobileNavOpen);
  const setOpen = useUiStore((s) => s.setMobileNavOpen);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-20 border-b border-gold/35 bg-navy-deep text-white">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-5"
      >
        {/* Official horizontal logo (min. 75px tall per brand manual); isotipo on small screens */}
        <Link href="/" className="block shrink-0" aria-label="NEXXA RISE, inicio">
          <BrandLogo variant="horizontal-blanco" priority className="hidden w-[420px] md:block" />
          <Crest priority sizes="64px" className="w-16 md:hidden" alt="NEXXA RISE" />
        </Link>

        {/* Desktop links */}
        <div className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-1 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
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
            href="/unete"
            className="inline-flex min-h-11 items-center rounded bg-gold px-5 text-[13px] font-bold tracking-[0.08em] text-navy-deep uppercase hover:bg-gold-light"
          >
            Únete
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-12 items-center justify-center rounded border border-gold/60 text-white xl:hidden"
            aria-label="Abrir menú"
          >
            <MenuIcon className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] border-l-gold/40 bg-navy-deep p-6 pt-16 text-white">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <div className="flex flex-col">
              {[{ label: "Inicio", href: "/" }, ...navLinks].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={cn(
                    "flex min-h-14 items-center border-b border-white/10 font-display text-2xl font-black uppercase",
                    pathname === l.href ? "text-gold" : "text-white",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/unete"
                onClick={() => setOpen(false)}
                className="mt-6 flex min-h-13 items-center justify-center rounded bg-gold text-sm font-bold tracking-[0.08em] text-navy-deep uppercase"
              >
                Únete a Nexxa Rise
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
