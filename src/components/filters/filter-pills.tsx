"use client";

import { cn } from "@/lib/utils";

/** Pill-shaped single-select filter (toggle buttons with aria-pressed). */
export function FilterPills<T extends string>({
  label,
  options,
  value,
  onChange,
  labelFor,
  className,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  /** Display text for an option value (values stay as stable keys). */
  labelFor?: (value: T) => string;
  className?: string;
}) {
  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o)}
            className={cn(
              "min-h-11 cursor-pointer rounded-full border-2 px-4.5 text-[13px] font-bold tracking-[0.08em] uppercase transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold",
              active
                ? "border-gold bg-gold text-navy-deep"
                : "border-white/35 bg-transparent text-white hover:border-gold-light",
            )}
          >
            {labelFor ? labelFor(o) : o}
          </button>
        );
      })}
    </div>
  );
}
