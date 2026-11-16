import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import isotipo from "../../../public/brand/isotipo.png";
import logoHBlanco from "../../../public/brand/logo-horizontal-blanco.png";
import logoHAzul from "../../../public/brand/logo-horizontal-azul.png";
import logoVBlanco from "../../../public/brand/logo-vertical-blanco.png";
import logoVAzul from "../../../public/brand/logo-vertical-azul.png";

/* ------------------------------------------------------------------ */
/* Brand marks — official files from the Manual de Identidad Visual.  */
/* Minimum digital sizes (manual p.03): horizontal 75px tall,          */
/* vertical 200px tall. The shield (principal) needs 400px, so it is   */
/* reserved for large uses only.                                       */
/* ------------------------------------------------------------------ */

const logos = {
  "horizontal-blanco": logoHBlanco,
  "horizontal-azul": logoHAzul,
  "vertical-blanco": logoVBlanco,
  "vertical-azul": logoVAzul,
} as const;

export function BrandLogo({
  variant,
  className,
  priority,
  sizes,
}: {
  variant: keyof typeof logos;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={logos[variant]}
      alt="NEXXA RISE"
      priority={priority}
      sizes={sizes ?? (variant.startsWith("horizontal") ? "420px" : "320px")}
      className={cn("h-auto", className)}
    />
  );
}

/** Circular isotipo (wolf + ball). */
export function Crest({
  className,
  alt = "",
  priority,
  sizes = "120px",
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={isotipo}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full", className)}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Link styled as button                                               */
/* ------------------------------------------------------------------ */

const linkButtonVariants = {
  gold: "bg-gold text-navy-deep hover:bg-gold-light",
  ghost: "border-2 border-white text-white hover:bg-white hover:text-navy-deep",
  navy: "bg-navy-deep text-white hover:bg-navy",
} as const;

export function LinkButton({
  href,
  variant = "gold",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof linkButtonVariants;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-13 items-center justify-center gap-2.5 rounded px-7 text-[15px] font-bold tracking-[0.08em] uppercase transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold",
        linkButtonVariants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Section headings                                                    */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  tone?: "gold" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "gold" ? "text-gold-light" : "text-gold-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function DisplayTitle({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "m-0 font-display leading-[0.95] font-black uppercase",
        Tag === "h1" ? "text-[clamp(38px,5.4vw,74px)] leading-[0.95] tracking-[-0.01em]" : "text-[clamp(28px,3.4vw,44px)] leading-[1] tracking-[-0.01em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Rising bars — the visual shorthand for the formative path (Escuelita → Juvenil). */
export function LevelBars({
  level,
  size = "md",
  className,
}: {
  level: 1 | 2 | 3 | 4;
  size?: "sm" | "md";
  className?: string;
}) {
  const heights = size === "sm" ? [10, 20, 30, 40] : [14, 28, 42, 56];
  return (
    <div aria-hidden className={cn("flex items-end gap-1.5", className)}>
      {heights.map((h, i) => (
        <span
          key={h}
          className={cn(
            "block rounded-[2px]",
            size === "sm" ? "w-2.5" : "w-3",
            i < level ? "bg-gold" : "bg-white/20",
          )}
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/** Inner-page hero band shared by Club, Divisiones, Staff, etc. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="stripes border-b-4 border-gold">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-10 px-6 pt-28 pb-20">
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow className="text-sm">{eyebrow}</Eyebrow>
          <DisplayTitle as="h1">{title}</DisplayTitle>
          {intro ? <p className="m-0 max-w-[620px] text-lg leading-relaxed text-mist">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

/** Photo placeholder with the crest's stripe texture. */
export function PhotoPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} (foto pendiente)`}
      className={cn("stripes flex items-end rounded-lg p-5 text-sm text-haze", className)}
    >
      {label}
    </div>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-3.5 fill-current", className)}>
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.2L12 17.8 5.8 21.4l1.6-7.2L2 9.5l7.1-.6z" />
    </svg>
  );
}

/** Brand tagline. Always in English, always in Heydex. */
export function Slogan({ className, as: Tag = "p" }: { className?: string; as?: "p" | "span" }) {
  return (
    <Tag lang="en" className={cn("m-0 font-slogan leading-none font-normal normal-case", className)}>
      We Rise Together
    </Tag>
  );
}
