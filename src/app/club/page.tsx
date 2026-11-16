import type { Metadata } from "next";
import Image from "next/image";

import {
  DisplayTitle,
  Eyebrow,
  LinkButton,
  PageHero,
  PhotoPlaceholder,
  Slogan,
  StarIcon,
} from "@/components/site/primitives";
import { facilities, site, sponsors, values } from "@/lib/data";
import { cn } from "@/lib/utils";

import founders from "../../../public/images/fundadoras.jpg";
import shield from "../../../public/images/escudo-nexxa-rise.png";
import { Brand, BrandText } from "@/components/site/brand-name";

/** Meaning of each part of the crest — text from the Manual de Identidad Visual (p. 01). */
const crestParts = [
  {
    title: "El lobo",
    text: "Simboliza el poder, la protección, el trabajo en equipo, la lealtad a los suyos, la enseñanza y la resistencia ante la adversidad. Su actitud feroz representa el deseo y la convicción de lograr la victoria.",
  },
  {
    title: "La doble X",
    text: "Representa el cromosoma femenino “XX” y hace alusión a las dos fundadoras del proyecto y al ADN deportivo del mismo.",
  },
  {
    title: "La doble flecha",
    text: "La unión de la letra “E” y la primera “X” forma una doble flecha que simboliza a las dos fundadoras caminando juntas hacia el éxito.",
  },
  {
    title: "Las seis estrellas",
    text: "Representan los seis campeonatos que han ganado juntas las fundadoras, testimonio de su trabajo y compromiso con la excelencia.",
  },
] as const;

export const metadata: Metadata = {
  title: "Club",
  description: `Historia, valores, instalaciones y patrocinadores de NEXXA RISE. Entrenamos en el ${site.location.venue}, ${site.location.city}.`,
};

const pillars = [
  {
    title: "Misión",
    text: "Potenciar el crecimiento técnico, físico, táctico y emocional de atletas, promoviendo valores, disciplina y compromiso.",
  },
  {
    title: "Visión",
    text: "Consolidarnos como organización líder en voleibol a nivel regional y nacional, siendo un referente formativo y social.",
  },
  { title: "Sede", text: `${site.location.venue}, ${site.location.city}.` },
];

export default function ClubPage() {
  return (
    <>
      <PageHero
        eyebrow="El club"
        title={
          <>
            Nacimos para
            <br />
            <span className="text-gold">levantarnos.</span>
          </>
        }
        intro="Un club de voleibol femenino que forma jugadoras y personas: con pasión en la cancha y valores fuera de ella."
      />

      {/* HISTORY */}
      <section className="bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-16 px-6 py-26">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5.5">
            <Eyebrow tone="dark">Nuestra historia</Eyebrow>
            <DisplayTitle>
              De un sueño
              <br />a un equipo
            </DisplayTitle>
            <p className="m-0 text-lg leading-[1.7] text-ink-soft">
              <Brand /> nace de dos mujeres que han dedicado gran parte de sus vidas al voleibol costarricense:{" "}
              <strong className="text-navy-deep">Yuliana González</strong>, colocadora, con 22 años como jugadora, y{" "}
              <strong className="text-navy-deep">María José Castro</strong>, líbero, con 15 años de trayectoria deportiva.
              Ambas formaron parte de la Selección Nacional de Costa Rica y vivieron el voleibol desde una de sus
              perspectivas más exigentes: la del alto rendimiento.
            </p>
            <p className="m-0 text-lg leading-[1.7] text-ink-soft">
              Hoy son entrenadoras certificadas internacionalmente FIVB Nivel II y decidieron transformar toda esa
              experiencia en un proyecto con un propósito mayor:{" "}
              <strong className="text-navy-deep">
                devolverle al voleibol costarricense parte de todo lo que el deporte les dio
              </strong>
              , ahora como entrenadoras, formadoras y referentes de una nueva generación de atletas.
            </p>
            <p className="m-0 text-lg leading-[1.7] text-ink-soft">
              Nuestro nombre y nuestro escudo cuentan esa historia.{" "}
              <a href="#escudo" className="font-semibold text-navy underline underline-offset-4 hover:text-gold-dark">
                Descubre qué significa cada parte
              </a>
              .
            </p>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] justify-center">
            <Image
              src={founders}
              alt="Yuliana González y María José Castro, fundadoras de NEXXA RISE, sentadas en una banca revisando una tableta"
              placeholder="blur"
              sizes="(min-width: 768px) 440px, 100vw"
              className="h-auto w-full max-w-[440px] rounded-lg border-t-4 border-gold bg-navy-deep shadow-[0_24px_60px_rgba(0,20,60,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* CREST MEANING */}
      <section id="escudo" aria-labelledby="escudo-titulo" className="stripes-deep scroll-mt-24 text-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-16 px-6 py-26">
          <div className="flex min-w-0 flex-[1_1_380px] justify-center">
            <Image
              src={shield}
              alt="Escudo principal de NEXXA RISE: lobo dorado sobre un balón de voleibol, la palabra NEXXA RISE y estrellas"
              sizes="(min-width: 768px) 440px, 100vw"
              className="h-auto w-full max-w-[440px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <div className="flex flex-col gap-4">
              <Eyebrow>Nuestro escudo</Eyebrow>
              <DisplayTitle>
                <span id="escudo-titulo">
                  Cada parte cuenta
                  <br />
                  <span className="text-gold-light">quiénes somos.</span>
                </span>
              </DisplayTitle>
              <p className="m-0 text-[17px] leading-relaxed text-white">
                Para crear nuestro escudo se tomaron en cuenta aspectos de la naturaleza deportiva del proyecto y
                elementos que identifican la personalidad, los valores que nuestras fundadoras promueven y desean
                profundizar en nuestros equipos. El nombre “<Brand />” simboliza el vínculo entre ambas y su
                búsqueda de la excelencia.
              </p>
            </div>
            <ol className="m-0 flex list-none flex-col gap-5 p-0">
              {crestParts.map((part, i) => (
                <li key={part.title} className="flex items-start gap-4 border-t border-white/15 pt-5">
                  <span className="flex size-10 flex-none items-center justify-center rounded-full bg-gold font-display text-base font-black text-navy-deep">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="m-0 font-display text-xl font-black uppercase">{part.title}</h3>
                    <p className="m-0 text-[15px] leading-relaxed text-silver">{part.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Slogan className="mt-2 -rotate-2 self-start text-[clamp(32px,3.4vw,48px)] text-gold-light" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cream text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-26">
          <div className="flex flex-col gap-2.5">
            <Eyebrow tone="dark">Lo que nos mueve</Eyebrow>
            <DisplayTitle>Nuestros valores</DisplayTitle>
          </div>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-4 p-0">
            {values.map((v) => (
              <li key={v.title} className="flex flex-col gap-3 rounded-lg border border-t-4 border-silver border-t-gold bg-white px-6 py-7">
                <StarIcon className="size-7 text-gold" />
                <span className="font-accent text-[30px] leading-none tracking-wide uppercase">{v.title}</span>
                <span className="text-[15px] leading-normal text-ink-soft">{v.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MISSION / VISION / VENUE */}
      <section className="bg-navy-deep">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5 px-6 py-24">
          {pillars.map((p) => (
            <div key={p.title} className="stripes flex flex-col gap-3.5 rounded-lg p-9">
              <Eyebrow>{p.title}</Eyebrow>
              <p className="m-0 text-lg leading-relaxed"><BrandText>{p.text}</BrandText></p>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section id="instalaciones" className="scroll-mt-24 bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-26">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-[1_1_520px] flex-col gap-3.5">
              <Eyebrow tone="dark">Nuestras instalaciones</Eyebrow>
              <DisplayTitle>
                Donde se entrena
                <br />
                <span className="text-bronze">la pasión.</span>
              </DisplayTitle>
            </div>
            <p className="m-0 flex-[1_1_360px] text-[17px] leading-relaxed text-ink-soft">
              {site.location.venue} · {site.location.city}. Un espacio pensado para que cada división entrene
              en las mejores condiciones.
            </p>
          </div>
          <div className="grid auto-rows-[240px] grid-flow-dense grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-4">
            {facilities.map((f) => (
              <figure
                key={f.name}
                className={cn(
                  "stripes m-0 flex flex-col justify-between rounded-lg p-5.5",
                  "featured" in f && f.featured && "md:col-span-2 md:row-span-2",
                )}
              >
                <span role="img" aria-label="Foto de la instalación (pendiente)" className="self-end text-xs text-white/50">
                  [Foto]
                </span>
                <figcaption className="flex flex-col gap-1">
                  <span className="font-display text-[18px] leading-none font-black text-white uppercase">{f.name}</span>
                  <span className="text-sm text-mist">{f.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <PhotoPlaceholder
              label={`[Mapa: ${site.location.venue}, Belén]`}
              className="min-h-[220px] flex-[2_1_420px] items-center justify-center"
            />
            <div className="flex flex-[1_1_300px] flex-col gap-3.5 rounded-lg border border-t-4 border-silver border-t-gold bg-white p-7">
              <span className="font-display text-[17px] font-black uppercase">Cómo llegar</span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong>{site.location.venue}</strong>
                <br />
                {site.location.city}, {site.location.country}
                <br />
                [Referencias / estacionamiento]
              </span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong>Horario del gimnasio:</strong> [Días y horas]
              </span>
              <a
                href={site.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 text-sm font-bold tracking-[0.06em] text-navy-deep uppercase hover:text-gold-dark"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="patrocinadores" className="scroll-mt-24 bg-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-11 px-6 py-26">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-[1_1_520px] flex-col gap-3.5">
              <Eyebrow>Nuestros patrocinadores</Eyebrow>
              <DisplayTitle>
                Gracias por creer
                <br />
                <span className="text-gold">en nosotras.</span>
              </DisplayTitle>
            </div>
            <p className="m-0 flex-[1_1_360px] text-[17px] leading-relaxed text-mist">
              Su apoyo hace posible uniformes, torneos, viajes y becas para nuestras jugadoras.
            </p>
          </div>

          <SponsorTier title="Patrocinador principal">
            <div className="flex min-h-40 items-center justify-center rounded-lg border-[3px] border-gold bg-white text-base font-semibold text-ink-muted">
              {sponsors.main}
            </div>
          </SponsorTier>
          <SponsorTier title="Patrocinadores oficiales">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3.5">
              {sponsors.official.map((s, i) => (
                <div key={i} className="flex h-28 items-center justify-center rounded-lg bg-white text-sm font-semibold text-ink-muted">
                  {s}
                </div>
              ))}
            </div>
          </SponsorTier>
          <SponsorTier title="Colaboradores">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-3">
              {sponsors.partners.map((s, i) => (
                <div
                  key={i}
                  className="flex h-20 items-center justify-center rounded-lg border border-white/20 bg-white/8 text-[13px] font-semibold text-mist"
                >
                  {s}
                </div>
              ))}
            </div>
          </SponsorTier>

          <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg border-2 border-gold p-8">
            <div className="flex max-w-[640px] flex-col gap-1.5">
              <span className="font-display text-[21px] leading-none font-black uppercase">
                ¿Quieres patrocinar a <Brand />?
              </span>
              <span className="text-[15px] leading-relaxed text-mist">
                Tu marca en uniformes, cancha, redes y eventos del club. [Paquetes de patrocinio disponibles.]
              </span>
            </div>
            <LinkButton href="/unete">Quiero ser patrocinador</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

function SponsorTier({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5">
      <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">{title}</span>
      {children}
    </div>
  );
}
