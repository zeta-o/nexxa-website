import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/site/primitives";
import { pick } from "@/i18n/server";
import { features } from "@/lib/flags";

const copy = {
  es: {
    meta: { title: "Galería", description: "Fotos de partidos, entrenamientos y momentos de NEXXA RISE." },
    eyebrow: "Galería",
    title: "En la cancha",
    intro: "Partidos, entrenamientos y momentos del club.",
  },
  en: {
    meta: { title: "Gallery", description: "Photos of NEXXA RISE matches, practices and moments." },
    eyebrow: "Gallery",
    title: "On the court",
    intro: "Matches, practices and club moments.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return (await pick(copy)).meta;
}

export default async function GaleriaPage() {
  if (!features.gallery) notFound();
  const t = await pick(copy);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
      />
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-[1240px] px-6 pt-18 pb-24">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
