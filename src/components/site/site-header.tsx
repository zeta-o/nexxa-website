"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/use-ui-store";

import { Crest } from "./primitives";

export function SiteHeader() {
  const pathname = usePathname();
  const open = useUiStore((s) => s.mobileNavOpen);
  const setOpen = useUiStore((s) => s.setMobileNavOpen);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-20 border-b border-gold/35 bg-navy-deep text-white">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3.5 md:px-6"
      >
        {/* Oversized crest that hangs below the bar */}
        <Link
          href="/"
          className="relative block h-12 w-[100px] shrink-0 md:h-13 md:w-[168px]"
          aria-label="NEXXA RISE, inicio"
        >
          <Crest
            priority
            sizes="(min-width: 768px) 120px, 76px"
            className="absolute top-[-4px] left-4 w-[76px] drop-shadow-[0_6px_12px_rgba(0,10,30,0.45)] md:top-[-8px] md:left-12 md:w-[120px] md:drop-shadow-[0_8px_16px_rgba(0,10,30,0.45)]"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden flex-wrap items-center gap-x-7 gap-y-1 lg:flex">
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
            className="inline-flex size-12 items-center justify-center rounded border border-gold/60 text-white lg:hidden"
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
                    "flex min-h-14 items-center border-b border-white/10 font-display text-3xl font-extrabold tracking-wide uppercase",
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
