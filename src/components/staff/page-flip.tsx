import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

/**
 * Three stacked photos: each one holds for a few seconds, then fades out to reveal the next. CSS only (keyframes nx-page in globals.css).
 * Built for exactly three photos: the 12 s cycle gives each one 4 s.
 * `offset` (seconds) shifts the whole cycle so cards side by side don't change in sync.
 */
const slotDelays = [0, 8, 4];

export function PageFlip({
  photos,
  alt,
  className,
  offset = 0,
}: {
  photos: StaticImageData[];
  alt: string;
  className?: string;
  offset?: number;
}) {
  if (photos.length === 1) {
    return (
      <div className={cn("relative overflow-hidden bg-navy-deep", className)}>
        <Image
          src={photos[0]}
          alt={alt}
          placeholder="blur"
          sizes="(min-width: 640px) 260px, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    );
  }

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
            // Reduced motion: only the first photo, no turning.
            "motion-reduce:animate-none",
            i > 0 && "motion-reduce:hidden",
          )}
          style={{ animationDelay: `${-(slotDelays[i] + offset)}s` }}
        />
      ))}
    </div>
  );
}
