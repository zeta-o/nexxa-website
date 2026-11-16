import { Fragment } from "react";

import { cn } from "@/lib/utils";

/** The club name, always set in Morington (brand rule). */
export function Brand({ className }: { className?: string }) {
  return <span className={cn("font-accent font-normal tracking-wide whitespace-nowrap uppercase", className)}>NEXXA RISE</span>;
}

/** Renders a plain string, setting every "Nexxa Rise" in it with <Brand />. */
export function BrandText({ children }: { children: string }) {
  const parts = children.split(/nexxa\s+rise/i);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 ? <Brand /> : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}
