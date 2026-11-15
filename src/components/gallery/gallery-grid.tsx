"use client";

import { FilterPills } from "@/components/filters/filter-pills";
import { gallery, type GalleryAlbum } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/use-filters-store";

const albums = ["Todas", "Mini", "Pre-Juvenil", "Juvenil", "Club"] as const satisfies readonly (GalleryAlbum | "Todas")[];

export function GalleryGrid() {
  const album = useFiltersStore((s) => s.galleryAlbum);
  const setAlbum = useFiltersStore((s) => s.setGalleryAlbum);
  const photos = gallery.filter((p) => album === "Todas" || p.album === album);

  return (
    <div className="flex flex-col gap-8">
      <FilterPills label="Filtrar álbum" options={albums} value={album} onChange={setAlbum} />
      <ul
        className="m-0 grid list-none auto-rows-[220px] grid-flow-dense grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-4 p-0"
        aria-live="polite"
      >
        {photos.map((p, i) => (
          <li
            key={`${p.caption}-${i}`}
            className={cn(
              "stripes flex flex-col justify-between rounded-lg border border-gold/25 p-4.5",
              p.featured && album === "Todas" && "sm:col-span-2 sm:row-span-2",
            )}
          >
            <span className="inline-flex self-start rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold tracking-widest text-navy-deep uppercase">
              {p.album}
            </span>
            <span role="img" aria-label={`${p.caption} (foto pendiente)`} className="text-sm text-mist">
              {p.caption}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
