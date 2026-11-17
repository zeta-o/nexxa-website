/**
 * Site content for NEXXA RISE.
 *
 * Everything in [brackets] is a placeholder waiting for real club data.
 * Edit this file to update the site — pages read from here.
 */

export const site = {
  name: "NEXXA RISE",
  description:
    "Club de voleibol femenino en Belén, Heredia. Desde la Escuelita hasta Juvenil. Entrenamos en el Complejo Pedregal.",
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexxa-website.vercel.app",
  location: {
    venue: "Complejo Pedregal",
    city: "Belén, Heredia",
    country: "Costa Rica",
    mapsUrl: "https://maps.app.goo.gl/EkXRAH1z9Dg9wQan6",
    /** Embedded map (no API key needed). Searches the venue by name. */
    mapsEmbed:
      "https://www.google.com/maps?q=Centro+de+Eventos+Pedregal,+Bel%C3%A9n,+Heredia,+Costa+Rica&z=16&output=embed",
  },
  contact: {
    email: "info.nexxarise@gmail.com",
    phone: "8664-9999",
    phoneHref: "tel:+50686649999",
    whatsappHref: "https://wa.me/50686649999",
  },
  handle: "@nexxarise",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/nexxarise/" },
    { label: "TikTok", href: "https://www.tiktok.com/@nexxarise" },
    { label: "Facebook", href: "https://www.facebook.com/share/1HTnzGyEff/" },
  ],
} as const;

/** Valores centrales (oficiales). The short texts are suggestions; adjust freely. */
export const values = [
  { title: "Disciplina", text: "Entrenamos con constancia para competir mejor." },
  { title: "Resiliencia", text: "Nos levantamos después de cada punto perdido." },
  { title: "Trabajo en equipo", text: "Nadie juega sola: ganamos y aprendemos juntas." },
  { title: "Respeto", text: "Por rivales, árbitros, entrenadores y compañeras." },
  { title: "Responsabilidad", text: "Cumplimos con el equipo, los estudios y la familia." },
  { title: "Excelencia", text: "Siempre un escalón más arriba: así nació RISE." },
] as const;

/** Formative processes. Infantil and Juvenil are each one process split in two categories. */
export type DivisionName = "Escuelita" | "Mini" | "Infantil" | "Juvenil";

export type Division = {
  n: string;
  name: DivisionName;
  /** Categories inside the process (Pre-Infantil + Infantil). */
  categories?: [string, string];
  focus: string;
  level: 1 | 2 | 3 | 4;
  short: string;
  text: string;
  points: string[];
  competition: string;
};

export const divisions: Division[] = [
  {
    n: "01",
    name: "Escuelita",
    focus: "Primeros pasos",
    level: 1,
    short: "El primer encuentro con el balón: juego, movimiento y diversión.",
    text: "La puerta de entrada al voleibol. A través del juego, las más pequeñas desarrollan coordinación, confianza y gusto por el deporte.",
    points: ["Juegos con balón y coordinación", "Motricidad y confianza", "Primer contacto con el trabajo en equipo"],
    competition: "Festivales y encuentros recreativos",
  },
  {
    n: "02",
    name: "Mini",
    focus: "Iniciación",
    level: 2,
    short: "Fundamentos y mini-voleibol en un ambiente seguro y divertido.",
    text: "Se aprenden los fundamentos del voleibol con formatos adaptados a su edad y las primeras experiencias de juego en equipo.",
    points: ["Fundamentos: saque, pase y recepción", "Mini-voleibol y juegos", "Valores de equipo desde el inicio"],
    competition: "Festivales y mini-voleibol",
  },
  {
    n: "03",
    name: "Infantil",
    categories: ["Pre-Infantil", "Infantil"],
    focus: "Formación",
    level: 3,
    short: "Un proceso en dos categorías: técnica, posiciones y primeras competencias.",
    text: "Un mismo proceso formativo dividido en dos categorías. Se consolida la técnica, las jugadoras descubren su posición y viven sus primeras competencias.",
    points: ["Técnica por posición", "Sistemas de juego básicos", "Torneos y encuentros amistosos"],
    competition: "Torneos y amistosos",
  },
  {
    n: "04",
    name: "Juvenil",
    focus: "Competencia",
    level: 4,
    short: "Un proceso en dos categorías: rendimiento, preparación física y liga.",
    text: "Un mismo proceso de competencia dividido en dos categorías: entrenamiento de rendimiento, preparación física y competencia de liga con la camiseta de Nexxa Rise.",
    points: ["Preparación física y táctica avanzada", "Competencia en Torneos Nacionales", "Camino a selecciones y nivel universitario"],
    competition: "Torneos Nacionales",
  },
];

/** One step per category, in order (Home "Escalón por escalón" and the Divisiones page). */
export type PathwayStep = {
  n: string;
  name: string;
  /** Process the category belongs to, when it shares one (Infantil, Juvenil). */
  process?: DivisionName;
  tag: string;
  /** Official category code and age range (season 2026); empty while pending. */
  code?: string;
  ages?: string;
  born?: string;
  text: string;
  points: string[];
  competition: string;
};

export const pathway: PathwayStep[] = [
  {
    n: "01",
    name: "Escuelita",
    tag: "Primeros pasos",
    ages: "Menores de 10 años",
    text: "El primer encuentro con el balón: juego, movimiento y diversión.",
    points: ["Juegos con balón y coordinación", "Motricidad y confianza", "Primer contacto con el trabajo en equipo"],
    competition: "Festivales y encuentros recreativos",
  },
  {
    n: "02",
    name: "Mini",
    tag: "Iniciación",
    code: "U13",
    ages: "Menores de 13 años",
    born: "2014–2015",
    text: "Fundamentos y mini-voleibol en un ambiente seguro y divertido.",
    points: ["Fundamentos: saque, pase y recepción", "Mini-voleibol y juegos", "Valores de equipo desde el inicio"],
    competition: "Festivales y mini-voleibol",
  },
  {
    n: "03",
    name: "Pre-Infantil",
    process: "Infantil",
    tag: "Proceso Infantil · 1 de 2",
    code: "U15",
    ages: "Menores de 15 años",
    born: "2012–2013",
    text: "Técnica por posición y primeros sistemas de juego.",
    points: ["Técnica por posición", "Sistemas de juego básicos", "Encuentros y amistosos"],
    competition: "Amistosos y torneos",
  },
  {
    n: "04",
    name: "Infantil",
    process: "Infantil",
    tag: "Proceso Infantil · 2 de 2",
    code: "U17",
    ages: "Menores de 17 años",
    born: "2010–2011",
    text: "Se consolida la técnica y llega la competencia en torneos.",
    points: ["Consolidación técnica", "Preparación física y táctica", "Torneos y amistosos"],
    competition: "Torneos",
  },
  {
    n: "05",
    name: "Juvenil",
    tag: "Competencia",
    code: "U19",
    ages: "Menores de 19 años",
    born: "2008–2009",
    text: "Rendimiento y competencia de liga con la camiseta de NEXXA RISE.",
    points: ["Preparación física y táctica avanzada", "Competencia en Torneos Nacionales", "Camino a selecciones y nivel universitario"],
    competition: "Torneos Nacionales",
  },
];

/** Future project, shown as "próximamente". */
export const futureTeam = {
  name: "Equipo Mayor",
  code: "Liga Ascenso",
  text: "El siguiente escalón: un equipo de primera categoría para que nuestras atletas sigan compitiendo al más alto nivel.",
};

/** Every category a player can sign up for, in order. */
export const categories = ["Escuelita", "Mini", "Pre-Infantil", "Infantil", "Juvenil"] as const;

export type StaffGroup = DivisionName | "Apoyo";

export const leaders = [
  {
    role: "Dirección técnica",
    name: "Yuliana González",
    text: "Cofundadora de NEXXA RISE. Colocadora con 22 años como jugadora y exseleccionada nacional de Costa Rica. Entrenadora certificada FIVB Nivel II.",
  },
  {
    role: "Coordinación del club",
    name: "María José Castro",
    text: "Cofundadora de NEXXA RISE. Líbero con 15 años de trayectoria deportiva y exseleccionada nacional de Costa Rica. Entrenadora certificada FIVB Nivel II.",
  },
] as const;

export const staff: { group: StaffGroup; role: string; name: string }[] = [
  { group: "Escuelita", role: "Entrenador/a", name: "[Nombre Apellido]" },
  { group: "Mini", role: "Entrenador/a principal", name: "[Nombre Apellido]" },
  { group: "Mini", role: "Asistente", name: "[Nombre Apellido]" },
  { group: "Infantil", role: "Entrenador/a principal", name: "[Nombre Apellido]" },
  { group: "Infantil", role: "Asistente", name: "[Nombre Apellido]" },
  { group: "Juvenil", role: "Entrenador/a principal", name: "[Nombre Apellido]" },
  { group: "Juvenil", role: "Asistente / Estadística", name: "[Nombre Apellido]" },
  { group: "Apoyo", role: "Preparación física", name: "[Nombre Apellido]" },
  { group: "Apoyo", role: "Fisioterapia", name: "[Nombre Apellido]" },
];

export type Fixture = {
  id: string;
  division: DivisionName;
  /** Category inside the process, e.g. "Pre-Infantil". */
  category?: string;
  type: string;
  title: string;
  where: "Local" | "Visitante";
  date: string;
  time: string;
  venue: string;
  past: boolean;
  score?: string;
};

export const fixtures: Fixture[] = [
  { id: "f1", division: "Juvenil", category: "Juvenil", type: "Liga", title: "Nexxa Rise vs [Rival]", where: "Local", date: "[00 Mes]", time: "[Hora]", venue: site.location.venue, past: false },
  { id: "f2", division: "Infantil", category: "Pre-Infantil", type: "Torneo", title: "[Nombre del torneo]", where: "Visitante", date: "[00 Mes]", time: "[Hora]", venue: "[Sede]", past: false },
  { id: "f3", division: "Escuelita", type: "Festival", title: "Festival de la Escuelita", where: "Local", date: "[00 Mes]", time: "[Hora]", venue: site.location.venue, past: false },
  { id: "f4", division: "Juvenil", category: "Juvenil", type: "Liga", title: "[Rival] vs Nexxa Rise", where: "Visitante", date: "[00 Mes]", time: "[Hora]", venue: "[Sede]", past: false },
  { id: "f5", division: "Juvenil", category: "Juvenil", type: "Amistoso", title: "Nexxa Rise vs [Rival]", where: "Local", date: "[00 Mes]", time: "[Hora]", venue: site.location.venue, past: false },
  { id: "r1", division: "Juvenil", category: "Juvenil", type: "Liga", title: "Nexxa Rise vs [Rival]", where: "Local", date: "[00 Mes]", time: "[Hora]", venue: site.location.venue, past: true, score: "[3 – 1]" },
  { id: "r2", division: "Infantil", category: "Infantil", type: "Torneo", title: "[Rival] vs Nexxa Rise", where: "Visitante", date: "[00 Mes]", time: "[Hora]", venue: "[Sede]", past: true, score: "[0 – 0]" },
  { id: "r3", division: "Mini", type: "Festival", title: "Encuentro de iniciación", where: "Local", date: "[00 Mes]", time: "[Hora]", venue: site.location.venue, past: true, score: "[0 – 0]" },
];

export type GalleryAlbum = DivisionName | "Club";

export const gallery: { album: GalleryAlbum; caption: string; featured?: boolean }[] = [
  { album: "Juvenil", caption: "[Foto: remate en la red]", featured: true },
  { album: "Escuelita", caption: "[Foto: primeros pasos]" },
  { album: "Mini", caption: "[Foto: primer saque]" },
  { album: "Infantil", caption: "[Foto: bloqueo doble]" },
  { album: "Juvenil", caption: "[Foto: celebración de punto]" },
  { album: "Club", caption: "[Foto grupal del club]", featured: true },
  { album: "Infantil", caption: "[Foto: recepción]" },
  { album: "Mini", caption: "[Foto: entrenamiento]" },
  { album: "Juvenil", caption: "[Foto: defensa en el piso]" },
  { album: "Club", caption: "[Foto: staff y familias]" },
];

export const facilities = [
  { name: "[Cancha principal]", text: "[Medidas, piso, gradas]", featured: true },
  { name: "[Preparación física]", text: "[Pesas, cardio, movilidad]" },
  { name: "[Vestidores]", text: "[Regaderas, casilleros]" },
  { name: "[Fisioterapia]", text: "[Atención y recuperación]" },
] as const;

export type SponsorLogo = { name: string; logo: string; width: number; height: number; dark?: boolean };

export const sponsors = {
  /** Main sponsors with their logos (files in public/sponsors). `dark`: logo has its own dark background. */
  main: [
    { name: "Centro de Eventos Pedregal", logo: "/sponsors/pedregal-color.png", width: 863, height: 235 },
    { name: "Holcim", logo: "/sponsors/holcim.png", width: 855, height: 252 },
  ] as SponsorLogo[],
  official: [
    "[Logo patrocinador oficial]",
    "[Logo patrocinador oficial]",
    "[Logo patrocinador oficial]",
  ],
  partners: [
    "[Logo colaborador]",
    "[Logo colaborador]",
    "[Logo colaborador]",
    "[Logo colaborador]",
    "[Logo colaborador]",
  ],
} as const;

export const joinSteps = [
  { n: "1", title: "Llena la solicitud", text: "Datos de la jugadora y de su madre, padre o tutor." },
  { n: "2", title: "Ven a la prueba", text: "Te asignamos fecha y sede según su división." },
  { n: "3", title: "Bienvenida", text: "Inscripción, uniforme y primer entrenamiento con el equipo." },
] as const;

export const faq = [
  {
    q: "¿Necesita experiencia previa?",
    a: "No. En Escuelita y Mini empezamos desde cero; en Infantil y Juvenil evaluamos el nivel en la prueba.",
  },
  {
    q: "¿Cómo sé en qué división va?",
    a: "Depende de su edad: Escuelita, menores de 10 años; Mini U13, menores de 13; Pre-Infantil U15, menores de 15; Infantil U17, menores de 17; Juvenil U19, menores de 19. Si tienes dudas, márcalo en el formulario.",
  },
  { q: "¿Cuánto cuesta?", a: "[Cuota de inscripción y mensualidad.]" },
  {
    q: "¿Qué debe llevar a la prueba?",
    a: "[Ropa deportiva, tenis, rodilleras, agua…]",
  },
] as const;
