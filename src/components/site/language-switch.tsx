"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useI18n } from "@/i18n/client";
import { locales, switchPath } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** ES | EN switch. Goes to the same page in the other language. */
export function LanguageSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const { lang, c } = useI18n();

  return (
    <div
      role="group"
      aria-label={c.ui.language}
      className={cn("inline-flex h-11 items-center overflow-hidden rounded border border-gold/60", className)}
    >
      {locales.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={switchPath(pathname, l)}
            // Switching language crosses root layouts (full page load), so a prefetch is wasted.
            prefetch={false}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            aria-label={l === "es" ? "Español" : "English"}
            className={cn(
              "flex h-full min-w-11 items-center justify-center px-2.5 text-[13px] font-bold tracking-[0.08em] uppercase transition-colors",
              active ? "bg-gold text-navy-deep" : "text-white hover:text-gold-light",
            )}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
