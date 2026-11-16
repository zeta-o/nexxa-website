# NEXXA RISE — Sitio web

Sitio oficial del club de voleibol femenino **NEXXA RISE** (Belén, Heredia).

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui (Base UI) · Zustand · Zod

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con foto, divisiones, próximo partido, accesos a Staff y Galería, cinta de patrocinadores |
| `/club` | Historia, valores, misión/visión/sede, instalaciones y patrocinadores |
| `/divisiones` | Mini, Pre-Juvenil y Juvenil + tabla de horarios |
| `/staff` | Dirección y cuerpo técnico con filtro por división |
| `/calendario` | Próximos partidos y resultados con filtro por división |
| `/galeria` | Galería filtrable por álbum |
| `/unete` | Formulario de inscripción a pruebas + preguntas frecuentes |

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Editar contenido

Todo el texto del sitio vive en **`src/lib/data.ts`** (divisiones, staff, partidos, patrocinadores, FAQ, contacto).
Lo que está entre `[corchetes]` es contenido pendiente.

- Imágenes: `public/images/` (escudo y foto del hero).
- Colores y tipografías: `src/app/globals.css` (tokens `navy`, `gold`, `cream`…).

> ⚠️ La foto actual del hero (`public/images/hero.jpg`) muestra uniformes y patrocinadores de otro equipo.
> Reemplázala por una foto propia del club antes de publicar.

## Marca (Manual de Identidad Visual v2)

- **Logos oficiales** en `public/brand/` (isotipo, horizontal y vertical en blanco y azul, silueta del lobo).
  Componente `BrandLogo` en `src/components/site/primitives.tsx`.
  Tamaños mínimos digitales: horizontal **75 px** de alto, vertical **200 px**, escudo principal **400 px**
  (por eso el escudo no se usa en tamaños pequeños).
- **Paleta**: `#FFFFFF` `#AF9600` `#00143C` (principal) · `#000000` `#E1B932` `#008CD7` (secundaria) ·
  `#CCCCCC` `#826923` `#001E5A` (acentos). Tokens en `src/app/globals.css`.
- **Tipografías**: Creato Display (Black títulos, Bold subtítulos, Regular texto), en `src/fonts/creato-display/`
  con su licencia SIL OFL 1.1 (`OFL.txt`), cargada con `next/font/local` en `src/app/layout.tsx`.
  Morington (uniformes, encabezados de máx. 2 palabras) **pendiente**: requiere licencia comercial.

## Estado (Zustand)

- `src/stores/use-filters-store.ts` — filtros de calendario, staff y galería.
- `src/stores/use-ui-store.ts` — menú móvil.
- `src/stores/use-inscription-store.ts` — borrador del formulario (se guarda en `sessionStorage`).

## Formulario de inscripción

El envío pasa por una Server Action (`src/app/unete/actions.ts`) que valida con Zod.
**Pendiente:** conectar el envío a un correo (p. ej. Resend) o a una base de datos; hoy solo se registra en los logs del servidor.

## Despliegue en Vercel

1. Importa este repositorio en https://vercel.com/new (framework: Next.js, sin configuración extra).
2. Variable de entorno opcional: `NEXT_PUBLIC_SITE_URL` = dominio final (para metadatos, sitemap y robots).
3. Deploy.
