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
import { getI18n, pick } from "@/i18n/server";
import { site } from "@/lib/data";
import { cn } from "@/lib/utils";

import isotipo from "../../../../public/brand/isotipo.png";
import founders from "../../../../public/images/fundadoras.jpg";
import shield from "../../../../public/images/escudo-nexxa-rise.png";
import fecovol from "../../../../public/brand/fecovol.png";
import sede1 from "../../../../public/images/sede-1.jpg";
import sede2 from "../../../../public/images/sede-2.jpg";
import sede3 from "../../../../public/images/sede-3.jpg";
import sede4 from "../../../../public/images/sede-4.jpg";
import sede5 from "../../../../public/images/sede-5.jpg";
import sede6 from "../../../../public/images/sede-6.jpg";
import sede7 from "../../../../public/images/sede-7.jpg";
import sede8 from "../../../../public/images/sede-8.jpg";

const venuePhotos = [sede1, sede2, sede3, sede4, sede5, sede6, sede7, sede8];
import { Brand, BrandText } from "@/components/site/brand-name";

/** Meaning of each part of the crest — text from the Manual de Identidad Visual (p. 01). */
const copy = {
  es: {
    meta: {
      title: "Club",
      description: `Historia, valores, instalaciones y patrocinadores de NEXXA RISE. Entrenamos en el ${site.location.venue}, ${site.location.city}.`,
    },
    heroEyebrow: "El club",
    heroTitle: (
      <>
        Nacimos para
        <br />
        <span className="text-gold">levantarnos.</span>
      </>
    ),
    heroIntro:
      "Un club de voleibol femenino que forma jugadoras y personas: con pasión en la cancha y valores fuera de ella.",
    historyEyebrow: "Nuestra historia",
    historyTitle: (
      <>
        De un sueño
        <br />a un equipo
      </>
    ),
    history: [
      <>
        <Brand /> nace de dos mujeres que han dedicado gran parte de sus vidas al voleibol costarricense:{" "}
        <strong className="text-navy-deep">Yuliana González</strong>, colocadora, con 22 años como jugadora, y{" "}
        <strong className="text-navy-deep">María José Castro</strong>, líbero, con 15 años de trayectoria deportiva.
        Ambas formaron parte de la Selección Nacional de Costa Rica y vivieron el voleibol desde una de sus
        perspectivas más exigentes: la del alto rendimiento.
      </>,
      <>
        Hoy son entrenadoras certificadas internacionalmente FIVB Nivel II y decidieron transformar toda esa
        experiencia en un proyecto con un propósito mayor:{" "}
        <strong className="text-navy-deep">
          devolverle al voleibol costarricense parte de todo lo que el deporte les dio
        </strong>
        , ahora como entrenadoras, formadoras y referentes de una nueva generación de atletas.
      </>,
    ],
    historyLinkLead: "Nuestro nombre y nuestro escudo cuentan esa historia.",
    historyLink: "Descubre qué significa cada parte",
    foundersAlt:
      "Yuliana González y María José Castro, fundadoras de NEXXA RISE, sentadas en una banca revisando una tableta",
    shieldAlt:
      "Escudo principal de NEXXA RISE: lobo dorado sobre un balón de voleibol, la palabra NEXXA RISE y estrellas",
    crestEyebrow: "Nuestro escudo",
    crestTitle: (
      <>
        Cada parte cuenta
        <br />
        <span className="text-gold-light">quiénes somos.</span>
      </>
    ),
    crestIntro: (
      <>
        Para crear nuestro escudo se tomaron en cuenta aspectos de la naturaleza deportiva del proyecto y elementos
        que identifican la personalidad, los valores que nuestras fundadoras promueven y desean profundizar en
        nuestros equipos. El nombre “<Brand />” simboliza el vínculo entre ambas y su búsqueda de la excelencia.
      </>
    ),
    crestParts: [
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
    ],
    valuesEyebrow: "Lo que nos mueve",
    valuesTitle: "Nuestros valores",
    pillars: [
      {
        title: "Misión",
        text: "Potenciar el crecimiento técnico, físico, táctico y emocional de atletas, promoviendo valores, disciplina y compromiso.",
      },
      {
        title: "Visión",
        text: "Consolidarnos como organización líder en voleibol a nivel regional y nacional, siendo un referente formativo y social.",
      },
      { title: "Sede", text: `${site.location.venue}, ${site.location.city}.` },
    ],
    facEyebrow: "Nuestras instalaciones",
    facTitle: (
      <>
        Donde se entrena
        <br />
        <span className="text-bronze">la pasión.</span>
      </>
    ),
    facText:
      "Contamos con tres canchas profesionales y de alto nivel. Instalaciones de primer nivel para que cada división entrene y compita en las mejores condiciones.",
    facStat: "canchas profesionales",
    facPhotos: [
      { alt: "Partido en la cancha principal del Complejo Pedregal con las gradas llenas", caption: "Cancha principal" },
      { alt: "Jugadora sacando en una de las canchas del Complejo Pedregal", caption: "Superficie profesional" },
      { alt: "Vista de una cancha de voleibol del Complejo Pedregal durante un partido", caption: "Medidas oficiales" },
      { alt: "Dos equipos jugando en una de las tres canchas del Complejo Pedregal", caption: "Tres canchas" },
      { alt: "Graderías junto a las canchas del Complejo Pedregal", caption: "Graderías para familias" },
      { alt: "Canchas del Complejo Pedregal iluminadas durante un entrenamiento nocturno", caption: "Iluminación profesional" },
      { alt: "Jugadoras reunidas en la cancha durante un entrenamiento", caption: "Entrenamientos" },
      { alt: "Cancha y graderías del Complejo Pedregal con jugadoras entrenando", caption: "Espacio para el público" },
    ],
    fedEyebrow: "Sede de selecciones",
    fedTitle: (
      <>
        Aquí entrenan las
        <br />
        <span className="text-gold-light">Selecciones Nacionales.</span>
      </>
    ),
    fedText:
      "Las selecciones nacionales de voleibol de Costa Rica utilizan nuestras instalaciones para entrenar. Nuestras jugadoras se forman en la misma cancha que el más alto nivel del país.",
    fedLogoAlt: "Logo de FECOVOL, Federación Costarricense de Voleibol",
    map: `[Mapa: ${site.location.venue}, Belén]`,
    howTo: "Cómo llegar",
    venueRef: "Salón Tamarindo",
    hoursLabel: "Horario del gimnasio:",
    hours: "[Días y horas]",
    openMaps: "Abrir en Google Maps →",
    spEyebrow: "Nuestros patrocinadores",
    spTitle: (
      <>
        Gracias por creer
        <br />
        <span className="text-gold">en nosotras.</span>
      </>
    ),
    spText: "Su apoyo hace posible uniformes, torneos, viajes y becas para nuestras jugadoras.",
    spMain: "Patrocinadores principales",
    spOfficial: "Patrocinadores oficiales",
    spPartners: "Colaboradores",
    spAsk: (
      <>
        ¿Quieres patrocinar a <Brand />?
      </>
    ),
    spAskText: "Tu marca en uniformes, cancha, redes y eventos del club. [Paquetes de patrocinio disponibles.]",
    spCta: "Quiero ser patrocinador",
  },
  en: {
    meta: {
      title: "Club",
      description: `History, values, facilities and sponsors of NEXXA RISE. We train at ${site.location.venue}, ${site.location.city}.`,
    },
    heroEyebrow: "The club",
    heroTitle: (
      <>
        Born to
        <br />
        <span className="text-gold">rise.</span>
      </>
    ),
    heroIntro:
      "A women's volleyball club that develops players and people: passion on the court, values off it.",
    historyEyebrow: "Our story",
    historyTitle: (
      <>
        From a dream
        <br />
        to a team
      </>
    ),
    history: [
      <>
        <Brand /> was born from two women who have devoted much of their lives to Costa Rican volleyball:{" "}
        <strong className="text-navy-deep">Yuliana González</strong>, a setter with 22 years as a player, and{" "}
        <strong className="text-navy-deep">María José Castro</strong>, a libero with a 15-year career. Both played
        for Costa Rica's national team and lived volleyball from one of its most demanding angles: high
        performance.
      </>,
      <>
        Today they are internationally certified FIVB Level II coaches, and they decided to turn all that
        experience into a project with a bigger purpose:{" "}
        <strong className="text-navy-deep">to give back to Costa Rican volleyball part of everything the sport gave them</strong>
        , now as coaches, mentors and role models for a new generation of athletes.
      </>,
    ],
    historyLinkLead: "Our name and our crest tell that story.",
    historyLink: "Discover what each part means",
    foundersAlt:
      "Yuliana González and María José Castro, founders of NEXXA RISE, sitting on a bench looking at a tablet",
    shieldAlt:
      "NEXXA RISE main crest: a golden wolf over a volleyball, the words NEXXA RISE and stars",
    crestEyebrow: "Our crest",
    crestTitle: (
      <>
        Every part tells
        <br />
        <span className="text-gold-light">who we are.</span>
      </>
    ),
    crestIntro: (
      <>
        Our crest draws on the sporting nature of the project and on elements that reflect the personality and
        values our founders promote and want to instill in our teams. The name “<Brand />” stands for the bond
        between them and their pursuit of excellence.
      </>
    ),
    crestParts: [
      {
        title: "The wolf",
        text: "It stands for strength, protection, teamwork, loyalty to its own, teaching and resilience in the face of adversity. Its fierce attitude represents the desire and conviction to win.",
      },
      {
        title: "The double X",
        text: "It represents the female “XX” chromosome and refers to the project's two founders and its sporting DNA.",
      },
      {
        title: "The double arrow",
        text: "The letter “E” and the first “X” join to form a double arrow that symbolizes the two founders walking together toward success.",
      },
      {
        title: "The six stars",
        text: "They represent the six championships the founders have won together, a testament to their work and commitment to excellence.",
      },
    ],
    valuesEyebrow: "What drives us",
    valuesTitle: "Our values",
    pillars: [
      {
        title: "Mission",
        text: "To foster athletes' technical, physical, tactical and emotional growth, promoting values, discipline and commitment.",
      },
      {
        title: "Vision",
        text: "To become a leading volleyball organization at the regional and national level, and a benchmark for youth development and community.",
      },
      { title: "Home court", text: `${site.location.venue}, ${site.location.city}.` },
    ],
    facEyebrow: "Our facilities",
    facTitle: (
      <>
        Where passion
        <br />
        <span className="text-bronze">trains.</span>
      </>
    ),
    facText:
      "We have three professional, high-level courts. First-class facilities so every division can train and compete in the best conditions.",
    facStat: "professional courts",
    facPhotos: [
      { alt: "Match on the main court at Complejo Pedregal with packed stands", caption: "Main court" },
      { alt: "Player serving on one of the courts at Complejo Pedregal", caption: "Professional surface" },
      { alt: "View of a volleyball court at Complejo Pedregal during a match", caption: "Official dimensions" },
      { alt: "Two teams playing on one of the three courts at Complejo Pedregal", caption: "Three courts" },
      { alt: "Bleachers next to the courts at Complejo Pedregal", caption: "Bleachers for families" },
      { alt: "Courts at Complejo Pedregal lit up during an evening practice", caption: "Professional lighting" },
      { alt: "Players gathered on the court during practice", caption: "Practices" },
      { alt: "Court and bleachers at Complejo Pedregal with players training", caption: "Room for spectators" },
    ],
    fedEyebrow: "National team venue",
    fedTitle: (
      <>
        Costa Rica's
        <br />
        <span className="text-gold-light">national teams train here.</span>
      </>
    ),
    fedText:
      "Costa Rica's national volleyball teams use our facilities to train. Our players develop on the same court as the highest level in the country.",
    fedLogoAlt: "FECOVOL logo, Costa Rican Volleyball Federation",
    map: `[Map: ${site.location.venue}, Belén]`,
    howTo: "Getting here",
    venueRef: "Salón Tamarindo",
    hoursLabel: "Gym hours:",
    hours: "[Days and hours]",
    openMaps: "Open in Google Maps →",
    spEyebrow: "Our sponsors",
    spTitle: (
      <>
        Thank you for
        <br />
        <span className="text-gold">believing in us.</span>
      </>
    ),
    spText: "Their support makes uniforms, tournaments, travel and scholarships for our players possible.",
    spMain: "Main sponsors",
    spOfficial: "Official sponsors",
    spPartners: "Partners",
    spAsk: (
      <>
        Want to sponsor <Brand />?
      </>
    ),
    spAskText: "Your brand on uniforms, the court, social media and club events. [Sponsorship packages available.]",
    spCta: "Become a sponsor",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return (await pick(copy)).meta;
}

export default async function ClubPage() {
  const { c, href } = await getI18n();
  const t = await pick(copy);
  const { sponsors, values } = c;
  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        intro={t.heroIntro}
      />

      {/* HISTORY */}
      <section className="bg-white text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-16 px-6 py-26">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5.5">
            <Eyebrow tone="dark">{t.historyEyebrow}</Eyebrow>
            <DisplayTitle>{t.historyTitle}</DisplayTitle>
            {t.history.map((p, i) => (
              <p key={i} className="m-0 text-lg leading-[1.7] text-ink-soft">
                {p}
              </p>
            ))}
            <p className="m-0 text-lg leading-[1.7] text-ink-soft">
              {t.historyLinkLead}{" "}
              <a href="#escudo" className="font-semibold text-navy underline underline-offset-4 hover:text-gold-dark">
                {t.historyLink}
              </a>
              .
            </p>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] justify-center">
            {/* Photo crossfades into the round crest and back, on a loop */}
            <div className="relative w-full max-w-[440px] overflow-hidden rounded-lg border-t-4 border-gold bg-navy-deep shadow-[0_24px_60px_rgba(0,20,60,0.35)]">
              <Image
                src={founders}
                alt={t.foundersAlt}
                placeholder="blur"
                sizes="(min-width: 768px) 440px, 100vw"
                className="block h-auto w-full animate-[nx-swap-photo_10s_ease-in-out_infinite] motion-reduce:animate-none"
              />
              <div
                aria-hidden
                className="pointer-events-none animate-[nx-swap-crest_10s_ease-in-out_infinite] motion-reduce:animate-none motion-reduce:opacity-0 absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,rgba(0,140,215,0.35)_0%,rgba(0,30,90,0.6)_40%,rgba(0,20,60,0)_70%)]"
              >
                <Image src={isotipo} alt="" sizes="300px" className="h-auto w-[68%] drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREST MEANING */}
      <section id="escudo" aria-labelledby="escudo-titulo" className="stripes-deep scroll-mt-24 text-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-16 px-6 py-26">
          <div className="flex min-w-0 flex-[1_1_380px] justify-center">
            <Image
              src={shield}
              alt={t.shieldAlt}
              sizes="(min-width: 768px) 440px, 100vw"
              className="h-auto w-full max-w-[440px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <div className="flex flex-col gap-4">
              <Eyebrow>{t.crestEyebrow}</Eyebrow>
              <DisplayTitle>
                <span id="escudo-titulo">{t.crestTitle}</span>
              </DisplayTitle>
              <p className="m-0 text-[17px] leading-relaxed text-white">
                {t.crestIntro}
              </p>
            </div>
            <ol className="m-0 flex list-none flex-col gap-5 p-0">
              {t.crestParts.map((part, i) => (
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
            <Eyebrow tone="dark">{t.valuesEyebrow}</Eyebrow>
            <DisplayTitle>{t.valuesTitle}</DisplayTitle>
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
          {t.pillars.map((p) => (
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
              <Eyebrow tone="dark">{t.facEyebrow}</Eyebrow>
              <DisplayTitle>{t.facTitle}</DisplayTitle>
            </div>
            <div className="flex flex-[1_1_360px] items-center gap-5">
              <span className="font-display text-[72px] leading-none font-black text-gold-dark">3</span>
              <p className="m-0 text-[17px] leading-relaxed text-ink-soft">
                <strong className="block text-sm tracking-[0.12em] text-navy-deep uppercase">{t.facStat}</strong>
                {t.facText}
              </p>
            </div>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {venuePhotos.map((src, i) => (
              <figure
                key={src.src}
                className={cn(
                  "group relative m-0 overflow-hidden rounded-lg bg-navy-deep",
                  i === 0 && "sm:col-span-2 sm:row-span-2",
                  i === 3 && "sm:col-span-2",
                )}
              >
                <Image
                  src={src}
                  alt={t.facPhotos[i].alt}
                  fill
                  placeholder="blur"
                  sizes={i === 0 ? "(min-width: 768px) 800px, 100vw" : "(min-width: 768px) 400px, 100vw"}
                  className="object-cover object-[50%_75%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-deep/90 to-transparent px-5 pt-10 pb-4 font-display text-[17px] leading-none font-black text-white uppercase">
                  {t.facPhotos[i].caption}
                </figcaption>
              </figure>
            ))}
          </div>
          {/* National teams train here (FECOVOL) */}
          <div className="stripes-deep flex flex-wrap items-center gap-8 overflow-hidden rounded-lg border-2 border-gold p-7 text-white md:gap-12 md:p-12">
            <Image
              src={fecovol}
              alt={t.fedLogoAlt}
              sizes="200px"
              className="h-auto w-[150px] flex-none rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.4)] md:w-[200px]"
            />
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
              <Eyebrow>{t.fedEyebrow}</Eyebrow>
              <DisplayTitle>{t.fedTitle}</DisplayTitle>
              <p className="m-0 max-w-[620px] text-[17px] leading-relaxed text-mist">{t.fedText}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <PhotoPlaceholder
              label={t.map}
              className="min-h-[220px] flex-[2_1_420px] items-center justify-center"
            />
            <div className="flex flex-[1_1_300px] flex-col gap-3.5 rounded-lg border border-t-4 border-silver border-t-gold bg-white p-7">
              <span className="font-display text-[17px] font-black uppercase">{t.howTo}</span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong>{site.location.venue}</strong>
                <br />
                {site.location.city}, {site.location.country}
                <br />
                {t.venueRef}
              </span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong>{t.hoursLabel}</strong> {t.hours}
              </span>
              <a
                href={site.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 text-sm font-bold tracking-[0.06em] text-navy-deep uppercase hover:text-gold-dark"
              >
                {t.openMaps}
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
              <Eyebrow>{t.spEyebrow}</Eyebrow>
              <DisplayTitle>{t.spTitle}</DisplayTitle>
            </div>
            <p className="m-0 flex-[1_1_360px] text-[17px] leading-relaxed text-mist">
              {t.spText}
            </p>
          </div>

          <SponsorTier title={t.spMain}>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-3.5">
              {sponsors.main.map((s) => (
                <div
                  key={s.name}
                  className={cn(
                    "flex h-44 items-center justify-center overflow-hidden rounded-lg border-[3px] border-gold",
                    s.dark ? "bg-[#0b2a6b]" : "bg-white px-8",
                  )}
                >
                  <Image
                    src={s.logo}
                    alt={s.name}
                    width={s.width}
                    height={s.height}
                    sizes="(min-width: 768px) 600px, 100vw"
                    className={cn(s.dark ? "h-full w-full object-cover" : "h-auto max-h-24 w-auto max-w-full")}
                  />
                </div>
              ))}
            </div>
          </SponsorTier>
          <SponsorTier title={t.spOfficial}>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3.5">
              {sponsors.official.map((s, i) => (
                <div key={i} className="flex h-28 items-center justify-center rounded-lg bg-white text-sm font-semibold text-ink-muted">
                  {s}
                </div>
              ))}
            </div>
          </SponsorTier>
          <SponsorTier title={t.spPartners}>
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
                {t.spAsk}
              </span>
              <span className="text-[15px] leading-relaxed text-mist">
                {t.spAskText}
              </span>
            </div>
            <LinkButton href={href("/unete")}>{t.spCta}</LinkButton>
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
