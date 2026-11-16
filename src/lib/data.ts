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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Complejo+Pedregal+Bel%C3%A9n+Heredia",
  },
  contact: {
    email: "info.nexxarise@gmail.com",
    phone: "8664-9999",
    phoneHref: "tel:+50686649999",
    whatsappHref: "https://wa.me/50686649999",
  },
  handle: "@nexxarise",
  // Handle from the brand manual; confirm each profile URL.
  social: [
    { label: "Instagram", href: "https://www.instagram.com/nexxarise" },
    { label: "Facebook", href: "https://www.facebook.com/nexxarise" },
    { label: "TikTok", href: "https://www.tiktok.com/@nexxarise" },
    { label: "YouTube", href: "https://www.youtube.com/@nexxarise" },
  ],
} as const;

export const navLinks = [
  { label: "Club", href: "/club" },
  { label: "Divisiones", href: "/divisiones" },
  { label: "Staff", href: "/staff" },
  { label: "Calendario", href: "/calendario" },
  { label: "Galería", href: "/galeria" },
] as const;

export const values = [
  { title: "Pasión", text: "Cada balón se pelea hasta el último punto." },
  { title: "Disciplina", text: "Entrenamos fuerte para competir mejor." },
  { title: "Equipo", text: "Nadie juega sola: ganamos y aprendemos juntas." },
  { title: "Respeto", text: "Por rivales, árbitros, entrenadores y compañeras." },
  { title: "Ascenso", text: "Siempre un escalón más arriba: así nació RISE." },
] as const;

/** Formative processes. Infantil and Juvenil are each one process split in two categories. */
export type DivisionName = "Escuelita" | "Mini" | "Infantil" | "Juvenil";

export type Division = {
  n: string;
  name: DivisionName;
  /** Categories inside the process (Pre-Infantil + Infantil, Pre-Juvenil + Juvenil). */
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
    categories: ["Pre-Juvenil", "Juvenil"],
    focus: "Competencia",
    level: 4,
    short: "Un proceso en dos categorías: rendimiento, preparación física y liga.",
    text: "Un mismo proceso de competencia dividido en dos categorías: entrenamiento de rendimiento, preparación física y competencia de liga con la camiseta de Nexxa Rise.",
    points: ["Preparación física y táctica avanzada", "Competencia en [Liga]", "Camino a selecciones y nivel universitario"],
    competition: "[Liga]",
  },
];

/** Future project, shown as "próximamente". */
export const futureTeam = {
  name: "Equipo Mayor",
  text: "El siguiente escalón: un equipo de primera categoría para que nuestras atletas sigan compitiendo al más alto nivel.",
};

/** Every category a player can sign up for, in order. */
export const categories = ["Escuelita", "Mini", "Pre-Infantil", "Infantil", "Pre-Juvenil", "Juvenil"] as const;

export type StaffGroup = DivisionName | "Apoyo";

export const leaders = [
  {
    role: "Dirección técnica",
    name: "[Nombre Apellido]",
    text: "[Trayectoria, certificaciones y filosofía de juego.]",
  },
  {
    role: "Coordinación del club",
    name: "[Nombre Apellido]",
    text: "[Responsabilidades: logística, familias, torneos.]",
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
  /** Category inside the process, e.g. "Pre-Juvenil". */
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
  { id: "f5", division: "Juvenil", category: "Pre-Juvenil", type: "Amistoso", title: "Nexxa Rise vs [Rival]", where: "Local", date: "[00 Mes]", time: "[Hora]", venue: site.location.venue, past: false },
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

export const sponsors = {
  main: "[Logo patrocinador principal]",
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
    a: "Depende de su edad: [rango de edades por categoría: Escuelita, Mini, Pre-Infantil, Infantil, Pre-Juvenil, Juvenil]. Si tienes dudas, márcalo en el formulario.",
  },
  { q: "¿Cuánto cuesta?", a: "[Cuota de inscripción y mensualidad.]" },
  {
    q: "¿Qué debe llevar a la prueba?",
    a: "[Ropa deportiva, tenis, rodilleras, agua…]",
  },
] as const;
