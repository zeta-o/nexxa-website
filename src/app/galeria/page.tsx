import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotos de partidos, entrenamientos y momentos de NEXXA RISE.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Galería"
        title="En la cancha"
        intro="Partidos, entrenamientos y momentos del club."
      />
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-[1240px] px-6 pt-18 pb-24">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
