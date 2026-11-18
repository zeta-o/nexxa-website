/**
 * Localized content shared by several pages and client components.
 * Spanish data lives in src/lib/data.ts (the source); English versions are here.
 * Category names (Escuelita, Mini, Pre-Infantil…) are the club's own names and
 * stay the same in both languages.
 */
import {
  faq as faqEs,
  facilities as facilitiesEs,
  fixtures as fixturesEs,
  futureTeam as futureTeamEs,
  gallery as galleryEs,
  joinSteps as joinStepsEs,
  leaders as leadersEs,
  pathway as pathwayEs,
  site,
  sponsors as sponsorsEs,
  staff as staffEs,
  values as valuesEs,
  type Fixture,
  type PathwayStep,
  type StaffGroup,
  type GalleryAlbum,
} from "@/lib/data";
import { features } from "@/lib/flags";

import type { Locale } from "./config";

const valuesEn = [
  { title: "Discipline", text: "We train consistently to compete better." },
  { title: "Resilience", text: "We get back up after every lost point." },
  { title: "Teamwork", text: "Nobody plays alone: we win and learn together." },
  { title: "Respect", text: "For opponents, referees, coaches and teammates." },
  { title: "Responsibility", text: "We show up for the team, our studies and our families." },
  { title: "Excellence", text: "Always one step higher: that is how RISE was born." },
];

const pathwayEn: PathwayStep[] = [
  {
    n: "01",
    name: "Escuelita",
    tag: "First steps",
    ages: "Under 10",
    text: "A first meeting with the ball: play, movement and fun.",
    points: ["Ball games and coordination", "Motor skills and confidence", "A first taste of teamwork"],
    competition: "Festivals and recreational meetups",
  },
  {
    n: "02",
    name: "Mini",
    tag: "Introduction",
    code: "U13",
    ages: "Under 13",
    born: "2014–2015",
    text: "Fundamentals and mini-volleyball in a safe, fun environment.",
    points: ["Fundamentals: serve, pass and reception", "Mini-volleyball and games", "Team values from day one"],
    competition: "Festivals and mini-volleyball",
  },
  {
    n: "03",
    name: "Pre-Infantil",
    process: "Infantil",
    tag: "Infantil process · 1 of 2",
    code: "U15",
    ages: "Under 15",
    born: "2012–2013",
    text: "Position-specific technique and first game systems.",
    points: ["Position-specific technique", "Basic game systems", "Meetups and friendlies"],
    competition: "Friendlies and tournaments",
  },
  {
    n: "04",
    name: "Infantil",
    process: "Infantil",
    tag: "Infantil process · 2 of 2",
    code: "U17",
    ages: "Under 17",
    born: "2010–2011",
    text: "Technique comes together and tournament play begins.",
    points: ["Technical consolidation", "Strength, conditioning and tactics", "Tournaments and friendlies"],
    competition: "Tournaments",
  },
  {
    n: "05",
    name: "Juvenil",
    tag: "Competition",
    code: "U19",
    ages: "Under 19",
    born: "2008–2009",
    text: "High performance and league play in the NEXXA RISE jersey.",
    points: ["Advanced conditioning and tactics", "Competing in National Tournaments", "A path to national teams and college volleyball"],
    competition: "National tournaments",
  },
];

const leadersEn = [
  {
    role: "Technical director",
    name: "Yuliana González",
    text: "Co-founder of NEXXA RISE. Setter with 22 years as a player and a former member of Costa Rica's national team. FIVB Level II certified coach.",
  },
  {
    role: "Club coordinator",
    name: "María José Castro",
    text: "Co-founder of NEXXA RISE. Libero with a 15-year career and a former member of Costa Rica's national team. FIVB Level II certified coach.",
  },
];

const staffRoleEn: Record<string, string> = {
  "Entrenador/a": "Coach",
  "Entrenador/a principal": "Head coach",
  "Entrenador principal": "Head coach",
  Asistente: "Assistant coach",
  "Asistente / Estadística": "Assistant / Statistics",
  "Preparación física": "Strength & conditioning",
  Fisioterapia: "Physiotherapy",
};

const fixtureTypeEn: Record<string, string> = { Liga: "League", Torneo: "Tournament", Festival: "Festival", Amistoso: "Friendly" };
const fixtureTitleEn: Record<string, string> = {
  "[Nombre del torneo]": "[Tournament name]",
  "Festival de la Escuelita": "Escuelita Festival",
  "Encuentro de iniciación": "Beginners' meetup",
};
const placeholderEn = (s: string) =>
  s
    .replace("[Rival]", "[Opponent]")
    .replace("[00 Mes]", "[00 Month]")
    .replace("[Hora]", "[Time]")
    .replace("[Sede]", "[Venue]");

const fixturesEn: Fixture[] = fixturesEs.map((f) => ({
  ...f,
  type: fixtureTypeEn[f.type] ?? f.type,
  title: placeholderEn(fixtureTitleEn[f.title] ?? f.title),
  date: placeholderEn(f.date),
  time: placeholderEn(f.time),
  venue: placeholderEn(f.venue),
}));

const galleryCaptionEn: Record<string, string> = {
  "[Foto: remate en la red]": "[Photo: spike at the net]",
  "[Foto: primeros pasos]": "[Photo: first steps]",
  "[Foto: primer saque]": "[Photo: first serve]",
  "[Foto: bloqueo doble]": "[Photo: double block]",
  "[Foto: celebración de punto]": "[Photo: point celebration]",
  "[Foto grupal del club]": "[Club group photo]",
  "[Foto: recepción]": "[Photo: reception]",
  "[Foto: entrenamiento]": "[Photo: practice]",
  "[Foto: defensa en el piso]": "[Photo: floor defense]",
  "[Foto: staff y familias]": "[Photo: staff and families]",
};

const facilitiesEn = [
  { name: "[Main court]", text: "[Size, flooring, stands]", featured: true },
  { name: "[Strength & conditioning]", text: "[Weights, cardio, mobility]" },
  { name: "[Locker rooms]", text: "[Showers, lockers]" },
  { name: "[Physiotherapy]", text: "[Care and recovery]" },
];

const joinStepsEn = [
  { n: "1", title: "Fill out the form", text: "Details for the player and her mother, father or guardian." },
  { n: "2", title: "Come to the tryout", text: "We'll give you a date and venue based on her division." },
  { n: "3", title: "Welcome", text: "Registration, uniform and first practice with the team." },
];

const faqEn = [
  {
    q: "Does she need previous experience?",
    a: "No. In Escuelita and Mini we start from scratch; for Infantil and Juvenil we assess her level at the tryout.",
  },
  {
    q: "How do I know which division she belongs in?",
    a: "It depends on her age: Escuelita, under 10; Mini U13, under 13; Pre-Infantil U15, under 15; Infantil U17, under 17; Juvenil U19, under 19. If you're not sure, mark it on the form.",
  },
  { q: "How much does it cost?", a: "[Registration fee and monthly fee.]" },
  { q: "What should she bring to the tryout?", a: "[Sportswear, sneakers, knee pads, water…]" },
];

/** UI strings used by shared and client components. */
const ui = {
  es: {
    skip: "Saltar al contenido",
    homeAria: `${site.name}, inicio`,
    navMain: "Principal",
    openMenu: "Abrir menú",
    menu: "Menú",
    home: "Inicio",
    join: "Únete",
    joinFull: "Únete a",
    language: "Idioma",
    switchTo: "Ver en English",
    footerTagline: "Voleibol femenino",
    explore: "Explora",
    tryouts: "Pruebas",
    contact: "Contacto",
    tel: "Tel.",
    whatsapp: "Escríbenos por WhatsApp →",
    viewMaps: "Ver en Maps →",
    rights: "Todos los derechos reservados.",
    madeWith: "Hecho con pasión.",
    all: "Todas",
    support: "Apoyo",
    filterDivision: "Filtrar por división",
    filterAlbum: "Filtrar álbum",
    photoPending: "Foto (pendiente)",
    staffEyebrow: "Cuerpo técnico",
    staffTitle: "Por división",
    upcoming: "Próximos",
    results: "Resultados",
    noMatches: "No hay partidos en esta vista.",
    result: "Resultado",
    month: "[Mes]",
    home_: "Local",
    away: "Visitante",
    opponent: "Rival",
    opponentName: "[Rival]",
    opponentCrest: "Escudo",
    opponentCrestAria: "Escudo del rival (pendiente)",
    pendingPhoto: "foto pendiente",
  },
  en: {
    skip: "Skip to content",
    homeAria: `${site.name}, home`,
    navMain: "Main",
    openMenu: "Open menu",
    menu: "Menu",
    home: "Home",
    join: "Join",
    joinFull: "Join",
    language: "Language",
    switchTo: "Ver en español",
    footerTagline: "Women's volleyball",
    explore: "Explore",
    tryouts: "Tryouts",
    contact: "Contact",
    tel: "Tel.",
    whatsapp: "Message us on WhatsApp →",
    viewMaps: "View on Maps →",
    rights: "All rights reserved.",
    madeWith: "Made with passion.",
    all: "All",
    support: "Support",
    filterDivision: "Filter by division",
    filterAlbum: "Filter album",
    photoPending: "Photo (pending)",
    staffEyebrow: "Coaching staff",
    staffTitle: "By division",
    upcoming: "Upcoming",
    results: "Results",
    noMatches: "No matches in this view.",
    result: "Result",
    month: "[Month]",
    home_: "Home",
    away: "Away",
    opponent: "Opponent",
    opponentName: "[Opponent]",
    opponentCrest: "Crest",
    opponentCrestAria: "Opponent's crest (pending)",
    pendingPhoto: "photo pending",
  },
} satisfies Record<Locale, Record<string, string>>;

export type UiStrings = (typeof ui)["es"];

const navLabels: Record<Locale, Record<string, string>> = {
  es: { "/club": "Club", "/divisiones": "Divisiones", "/staff": "Staff", "/calendario": "Calendario", "/galeria": "Galería" },
  en: { "/club": "Club", "/divisiones": "Divisions", "/staff": "Staff", "/calendario": "Calendar", "/galeria": "Gallery" },
};

const navPaths = [
  "/club",
  "/divisiones",
  "/staff",
  ...(features.calendar ? ["/calendario"] : []),
  ...(features.gallery ? ["/galeria"] : []),
];

/** Display label for a filter value that is a Spanish key ("Todas", "Apoyo"…). */
function groupLabel(lang: Locale, value: string) {
  if (value === "Todas") return ui[lang].all;
  if (value === "Apoyo") return ui[lang].support;
  return value;
}

export function getContent(lang: Locale) {
  const en = lang === "en";
  return {
    lang,
    ui: ui[lang],
    description: en
      ? "Women's volleyball club in Belén, Heredia, Costa Rica. From Escuelita to Juvenil. We train at Complejo Pedregal."
      : site.description,
    nav: navPaths.map((href) => ({ href, label: navLabels[lang][href] })),
    values: en ? valuesEn : [...valuesEs],
    pathway: en ? pathwayEn : pathwayEs,
    futureTeam: en
      ? {
          name: "Senior Team",
          code: "Liga Ascenso",
          text: "The next step: a first-division team so our athletes can keep competing at the highest level.",
        }
      : futureTeamEs,
    leaders: en ? leadersEn : [...leadersEs],
    staff: staffEs.map((s) => ({ ...s, role: en ? (staffRoleEn[s.role] ?? s.role) : s.role })),
    fixtures: en ? fixturesEn : fixturesEs,
    gallery: galleryEs.map((g) => ({ ...g, caption: en ? (galleryCaptionEn[g.caption] ?? g.caption) : g.caption })),
    facilities: en ? facilitiesEn : [...facilitiesEs],
    sponsors: {
      main: sponsorsEs.main,
      official: en ? sponsorsEs.official.map(() => "[Official sponsor logo]") : [...sponsorsEs.official],
      partners: en ? sponsorsEs.partners.map(() => "[Partner logo]") : [...sponsorsEs.partners],
    },
    joinSteps: en ? joinStepsEn : [...joinStepsEs],
    faq: en ? faqEn : [...faqEs],
    groupLabel: (value: StaffGroup | GalleryAlbum | "Todas") => groupLabel(lang, value),
  };
}

export type Content = ReturnType<typeof getContent>;
