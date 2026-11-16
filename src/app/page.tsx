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
import { SponsorBelt } from "@/components/site/sponsor-belt";
import { divisions, fixtures, site, values } from "@/lib/data";

import heroImage from "../../public/images/hero.jpg";

export default function HomePage() {
  const nextMatch = fixtures.find((f) => !f.past)!;

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
          className="object-cover object-[65%_30%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,60,0.95)_0%,rgba(0,20,60,0.82)_38%,rgba(0,20,60,0.45)_70%,rgba(0,20,60,0.25)_100%)]"
        />
        <div className="relative mx-auto flex min-h-[600px] max-w-[1240px] items-center px-6 pt-32 pb-34">
          <div className="flex max-w-[680px] flex-col gap-7">
            <div className="flex items-center gap-3">
              <span className="block h-[3px] w-10 bg-gold" />
              <Eyebrow className="text-sm">Club de voleibol femenino</Eyebrow>
            </div>
            <h1 className="m-0 font-display text-[clamp(42px,5.9vw,87px)] leading-[0.88] font-black tracking-[0.01em] uppercase">
              Fuerza
              <br />
              en la red.
              <br />
              <span className="text-gold">Pasión</span>
              <br />
              en la cancha.
            </h1>
            <Slogan className="-mt-2 -rotate-3 text-[clamp(30px,3.4vw,46px)] text-gold-light" />
            <p className="m-0 max-w-[520px] text-lg leading-relaxed text-mist">
              NEXXA RISE forma jugadoras desde su primer saque hasta la competencia de liga, en cuatro etapas: Escuelita, Mini, Infantil y Juvenil. Entrenamos en el {site.location.venue},{" "}
              {site.location.city}.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <LinkButton href="/unete">
                Pruebas abiertas <ArrowRightIcon className="size-[18px]" aria-hidden />
              </LinkButton>
              <LinkButton href="/divisiones" variant="ghost">
                Ver divisiones
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="relative bg-gold text-navy-deep">
          <ul className="mx-auto m-0 flex max-w-[1240px] list-none flex-wrap items-center justify-center gap-x-7 gap-y-2.5 px-6 py-3.5 font-display text-base font-extrabold tracking-[0.14em] uppercase">
            {values.map((v, i) => (
              <li key={v.title} className="flex items-center gap-7">
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
              <Eyebrow tone="dark">Divisiones</Eyebrow>
              <DisplayTitle>Escalón por escalón</DisplayTitle>
            </div>
            <Link
              href="/divisiones"
              className="py-3 text-[15px] font-bold tracking-[0.06em] text-navy-deep uppercase hover:text-gold-dark"
            >
              Conoce cada división →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
            {divisions.map((d) => (
              <Link
                key={d.name}
                href="/divisiones"
                className="stripes-deep flex flex-col gap-4.5 rounded-lg border-b-4 border-gold px-7 py-8 text-white outline-gold transition-[outline] hover:outline-2"
              >
                <div className="flex items-end justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
                    Etapa {d.n}
                  </span>
                  <LevelBars level={d.level} size="sm" />
                </div>
                <span className="font-display text-[34px] leading-[0.9] font-black uppercase">{d.name}</span>
                <span className="text-[15px] leading-normal text-mist">{d.short}</span>
                <span className="text-[13px] font-bold tracking-[0.08em] text-gold-light uppercase">
                  {d.categories ? d.categories.join(" · ") : d.focus}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT MATCH */}
      <section className="bg-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2.5">
              <Eyebrow>Calendario</Eyebrow>
              <DisplayTitle>Próximo partido</DisplayTitle>
            </div>
            <Link
              href="/calendario"
              className="py-3 text-[15px] font-semibold tracking-[0.06em] text-gold-light uppercase hover:text-white"
            >
              Ver calendario completo →
            </Link>
          </div>
          <NextMatchCard fixture={nextMatch} />
        </div>
      </section>

      {/* STAFF + GALLERY TEASERS */}
      <section className="stripes-deep">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5 px-6 pb-24">
          <Link
            href="/staff"
            className="flex flex-col gap-4 rounded-lg bg-white p-10 text-navy-deep outline-gold hover:outline-2"
          >
            <Eyebrow tone="dark">Staff</Eyebrow>
            <span className="font-display text-[29px] leading-[0.95] font-black uppercase">
              Quienes guían
              <br />
              al equipo
            </span>
            <span className="text-base leading-relaxed text-ink-soft">
              Entrenadores, preparación física y coordinación por división.
            </span>
            <span className="text-sm font-bold tracking-[0.06em] uppercase">Conocer al staff →</span>
          </Link>
          <Link
            href="/galeria"
            className="stripes flex min-h-[300px] flex-col justify-end gap-4 rounded-lg border border-gold/40 p-10 outline-gold hover:outline-2"
          >
            <Eyebrow>Galería</Eyebrow>
            <span className="font-display text-[29px] leading-[0.95] font-black uppercase">En la cancha</span>
            <span className="text-sm text-haze">[Foto destacada de partido]</span>
            <span className="text-sm font-bold tracking-[0.06em] text-gold-light uppercase">Ver fotos →</span>
          </Link>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="bg-gold text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-6 py-18">
          <div className="flex flex-[1_1_480px] flex-col gap-3">
            <h2 className="m-0 font-display text-[clamp(29px,3.6vw,48px)] leading-[0.9] font-black uppercase">
              Únete a Nexxa Rise.
            </h2>
            <p className="m-0 text-lg leading-relaxed">Pruebas abiertas en todas las categorías, de la Escuelita a Juvenil.</p>
          </div>
          <Slogan className="flex-[0_1_auto] -rotate-3 text-[clamp(30px,3.2vw,44px)] text-navy-deep" />
          <LinkButton href="/unete" variant="navy" className="min-h-14 px-8">
            Inscribirme
          </LinkButton>
        </div>
      </section>

      <SponsorBelt />
    </>
  );
}
