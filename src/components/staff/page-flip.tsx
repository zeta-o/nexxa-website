import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

/**
 * Three stacked photos: each one holds for a few seconds, then fades out to reveal the next. CSS only (keyframes nx-page in globals.css).
 * Built for exactly three photos: the 12 s cycle gives each one 4 s.
 */
const delays = ["[animation-delay:0s]", "[animation-delay:-8s]", "[animation-delay:-4s]"];

export function PageFlip({ photos, alt, className }: { photos: StaticImageData[]; alt: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-navy-deep", className)}>
      {photos.slice(0, 3).map((src, i) => (
        <Image
          key={src.src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          placeholder="blur"
          sizes="(min-width: 640px) 260px, 100vw"
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-top",
            "animate-[nx-page_12s_ease-in-out_infinite]",
            delays[i],
            // Reduced motion: only the first photo, no turning.
            "motion-reduce:animate-none",
            i > 0 && "motion-reduce:hidden",
          )}
        />
      ))}
    </div>
  );
}
