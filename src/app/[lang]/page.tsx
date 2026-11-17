import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { NextMatchCard } from "@/components/site/next-match";
import {
  DisplayTitle,
  Eyebrow,
  LevelBars,
  LinkButton,
  Slogan,
  StarIcon,
} from "@/components/site/primitives";
import { SponsorShowcase } from "@/components/site/sponsor-showcase";
import { getI18n, pick } from "@/i18n/server";
import { site } from "@/lib/data";
import { features } from "@/lib/flags";
import { cn } from "@/lib/utils";

import heroImage from "../../../public/images/hero.jpg";
import { Brand, BrandText } from "@/components/site/brand-name";

const copy = {
  es: {
    eyebrow: "Club de voleibol femenino",
    h1: (
      <>
        Fuerza
        <br />
        en la red.
        <br />
        <span className="text-gold">Pasión</span>
        <br />
        en la cancha.
      </>
    ),
    intro: (
      <>
        <Brand /> forma jugadoras desde su primer saque hasta la competencia de liga, en cinco categorías: de la
        Escuelita a Juvenil. Entrenamos en el {site.location.venue}, {site.location.city}.
      </>
    ),
    tryouts: "Pruebas abiertas",
    seeDivisions: "Ver divisiones",
    divEyebrow: "Divisiones",
    divTitle: "Escalón por escalón",
    divLink: "Conoce cada división →",
    stage: "Etapa",
    calEyebrow: "Calendario",
    calTitle: "Próximo partido",
    calLink: "Ver calendario completo →",
    staffTitle: (
      <>
        Quienes guían
        <br />
        al equipo
      </>
    ),
    staffText: "Entrenadores, preparación física y coordinación por división.",
    staffLink: "Conocer al staff →",
    galEyebrow: "Galería",
    galTitle: "En la cancha",
    galPhoto: "[Foto destacada de partido]",
    galLink: "Ver fotos →",
    joinTitle: (
      <>
        Únete a <Brand />.
      </>
    ),
    joinText: "Pruebas abiertas en todas las categorías, de la Escuelita a Juvenil.",
    joinCta: "Inscribirme",
  },
  en: {
    eyebrow: "Women's volleyball club",
    h1: (
      <>
        Strength
        <br />
        at the net.
        <br />
        <span className="text-gold">Passion</span>
        <br />
        on the court.
      </>
    ),
    intro: (
      <>
        <Brand /> develops players from their very first serve to league play, across five categories: from
        Escuelita to Juvenil. We train at {site.location.venue}, {site.location.city}.
      </>
    ),
    tryouts: "Open tryouts",
    seeDivisions: "See divisions",
    divEyebrow: "Divisions",
    divTitle: "Step by step",
    divLink: "Explore each division →",
    stage: "Stage",
    calEyebrow: "Calendar",
    calTitle: "Next match",
    calLink: "See full calendar →",
    staffTitle: (
      <>
        Those who guide
        <br />
        the team
      </>
    ),
    staffText: "Coaches, strength & conditioning and coordination for every division.",
    staffLink: "Meet the staff →",
    galEyebrow: "Gallery",
    galTitle: "On the court",
    galPhoto: "[Featured match photo]",
    galLink: "See photos →",
    joinTitle: (
      <>
        Join <Brand />.
      </>
    ),
    joinText: "Open tryouts in every category, from Escuelita to Juvenil.",
    joinCta: "Sign up",
  },
};

export default async function HomePage() {
  const { c, href } = await getI18n();
  const t = await pick(copy);
  const { pathway, values } = c;
  const nextMatch = c.fixtures.find((f) => !f.past)!;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[50%_32%] brightness-[0.68] saturate-[0.9]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,60,0.94)_0%,rgba(0,20,60,0.8)_38%,rgba(0,20,60,0.4)_62%,rgba(0,20,60,0.15)_100%)] max-md:bg-[linear-gradient(180deg,rgba(0,20,60,0.88)_0%,rgba(0,20,60,0.78)_60%,rgba(0,20,60,0.65)_100%)]"
        />
        <div className="relative mx-auto flex min-h-[600px] max-w-[1240px] items-center px-6 pt-44 pb-34 md:pt-56">
          <div className="flex max-w-[680px] flex-col gap-7">
            <div className="flex items-center gap-3">
              <span className="block h-[3px] w-10 bg-gold" />
              <Eyebrow className="text-sm">{t.eyebrow}</Eyebrow>
            </div>
            <h1 className="m-0 font-display text-[clamp(42px,5.9vw,87px)] leading-[0.88] font-black tracking-[0.01em] uppercase">
              {t.h1}
            </h1>
            <Slogan className="-mt-2 -rotate-3 text-[clamp(30px,3.4vw,46px)] text-gold-light" />
            <p className="m-0 max-w-[520px] text-lg leading-relaxed text-mist">
              {t.intro}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <LinkButton href={href("/unete")}>
                {t.tryouts}{" "}
                <ArrowRightIcon className="size-[18px]" aria-hidden />
              </LinkButton>
              <LinkButton href={href("/divisiones")} variant="ghost">
                {t.seeDivisions}
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="relative bg-gold text-navy-deep">
          <ul className="mx-auto m-0 flex max-w-[1240px] list-none flex-wrap items-center justify-center gap-x-5 gap-y-2.5 px-6 py-3 font-accent text-[20px] tracking-[0.08em] uppercase md:text-[23px]">
            {values.map((v, i) => (
              <li key={v.title} className="flex items-center gap-5">
                {i > 0 ? <StarIcon /> : null}
                {v.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="bg-cream text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2.5">
              <Eyebrow tone="dark">{t.divEyebrow}</Eyebrow>
              <DisplayTitle>{t.divTitle}</DisplayTitle>
            </div>
            <Link
              href={href("/divisiones")}
              className="py-3 text-[15px] font-bold tracking-[0.06em] text-navy-deep uppercase hover:text-gold-dark"
            >
              {t.divLink}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pathway.map((d, i) => (
              <Link
                key={d.name}
                href={href("/divisiones")}
                className="stripes-deep flex flex-col gap-4 rounded-lg border-b-4 border-gold px-7 py-7 text-white outline-gold transition-[outline] hover:outline-2"
              >
                <div className="flex items-end justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
                    {t.stage} {d.n}
                  </span>
                  <LevelBars level={i + 1} steps={pathway.length} size="sm" />
                </div>
                <span className="font-accent text-[42px] leading-none tracking-wide uppercase">
                  {d.name}
                </span>
                <span className="text-[15px] leading-normal text-mist">
                  <BrandText>{d.text}</BrandText>
                </span>
                <span className="mt-auto text-[13px] font-bold tracking-[0.08em] text-gold-light uppercase">
                  {d.code ? `${d.code} · ` : ""}
                  {d.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <SponsorShowcase />

      {/* NEXT MATCH (behind the calendar flag) */}
      {features.calendar ? (
        <section className="bg-navy-deep">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2.5">
                <Eyebrow>{t.calEyebrow}</Eyebrow>
                <DisplayTitle>{t.calTitle}</DisplayTitle>
              </div>
              <Link
                href={href("/calendario")}
                className="py-3 text-[15px] font-semibold tracking-[0.06em] text-gold-light uppercase hover:text-white"
              >
                {t.calLink}
              </Link>
            </div>
            <NextMatchCard fixture={nextMatch} />
          </div>
        </section>
      ) : null}

      {/* STAFF + GALLERY TEASERS */}
      <section className="stripes-deep">
        <div
          className={cn(
            "mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5 px-6 pb-24",
            !features.calendar && "pt-24",
          )}
        >
          <Link
            href={href("/staff")}
            className="flex flex-col gap-4 rounded-lg bg-white p-10 text-navy-deep outline-gold hover:outline-2"
          >
            <Eyebrow tone="dark">Staff</Eyebrow>
            <span className="font-display text-[29px] leading-[0.95] font-black uppercase">
              {t.staffTitle}
            </span>
            <span className="text-base leading-relaxed text-ink-soft">
              {t.staffText}
            </span>
            <span className="text-sm font-bold tracking-[0.06em] uppercase">
              {t.staffLink}
            </span>
          </Link>
          {features.gallery ? (
            <Link
              href={href("/galeria")}
              className="stripes flex min-h-[300px] flex-col justify-end gap-4 rounded-lg border border-gold/40 p-10 outline-gold hover:outline-2"
            >
              <Eyebrow>{t.galEyebrow}</Eyebrow>
              <span className="font-display text-[29px] leading-[0.95] font-black uppercase">
                {t.galTitle}
              </span>
              <span className="text-sm text-haze">
                {t.galPhoto}
              </span>
              <span className="text-sm font-bold tracking-[0.06em] text-gold-light uppercase">
                {t.galLink}
              </span>
            </Link>
          ) : null}
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="bg-gold text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-6 py-18">
          <div className="flex flex-[1_1_480px] flex-col gap-3">
            <h2 className="m-0 font-display text-[clamp(29px,3.6vw,48px)] leading-[0.9] font-black uppercase">
              {t.joinTitle}
            </h2>
            <p className="m-0 text-lg leading-relaxed">{t.joinText}</p>
          </div>
          <Slogan className="flex-[0_1_auto] -rotate-3 text-[clamp(30px,3.2vw,44px)] text-navy-deep" />
          <LinkButton href={href("/unete")} variant="navy" className="min-h-14 px-8">
            {t.joinCta}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
