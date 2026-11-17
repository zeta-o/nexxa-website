/**
 * Shared frame for NEXXA RISE emails (React Email): navy header with the
 * white logo, white card, navy footer with contact and social links.
 * Brand fonts don't load in most email clients, so headings use Arial Black.
 */
import { Body, Container, Head, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

import type { Locale } from "@/i18n/config";

import { logoPng, sloganPng } from "./images";
import { site } from "@/lib/data";

export const C = {
  navyDeep: "#00143c",
  navy: "#001e5a",
  sky: "#008cd7",
  gold: "#af9600",
  goldLight: "#e1b932",
  silver: "#cccccc",
  paper: "#f3f4f7",
  line: "#e3e6ee",
  muted: "#5b6680",
};
export const HEAD = "'Arial Black', 'Helvetica Neue', Arial, sans-serif";
export const BODY = "Arial, 'Helvetica Neue', Helvetica, sans-serif";

export const abs = (path: string) => `${site.url.replace(/\/$/, "")}${path}`;

/**
 * Images travel inside the email as inline attachments (cid:), so they show even if the
 * site URL changes and in clients that block remote images. send.ts attaches the files.
 * Brand fonts don't load in email, so the Heydex slogan is an image too.
 */
export const INLINE_IMAGES = {
  logo: { cid: "nexxa-logo", filename: "nexxa-rise.png", base64: logoPng },
  slogan: { cid: "nexxa-slogan", filename: "we-rise-together.png", base64: sloganPng },
} as const;
const img = (key: keyof typeof INLINE_IMAGES) => `cid:${INLINE_IMAGES[key].cid}`;

export function EmailLayout({ lang, preview, children }: { lang: Locale; preview: string; children: React.ReactNode }) {
  return (
    <Html lang={lang}>
      <Head>
        <meta name="color-scheme" content="light only" />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={{ margin: 0, padding: "24px 12px", backgroundColor: C.paper, fontFamily: BODY }}>
        <Container style={{ maxWidth: 600, borderRadius: 12, overflow: "hidden", backgroundColor: "#ffffff" }}>
          <Section style={{ backgroundColor: C.navyDeep, padding: "28px 32px", borderBottom: `4px solid ${C.gold}` }}>
            <Img src={img("logo")} width="220" alt={site.name} style={{ display: "block", width: 220, height: "auto" }} />
          </Section>
          <Section style={{ padding: 32, color: C.navy, fontSize: 16, lineHeight: "1.55" }}>{children}</Section>
          <Section style={{ backgroundColor: C.navyDeep, padding: "24px 32px", color: C.silver, fontSize: 13, lineHeight: "1.6" }}>
            <Img
              src={img("slogan")}
              width="190"
              alt="We Rise Together"
              style={{ display: "block", width: 190, height: "auto", margin: "0 0 12px" }}
            />
            <Text style={{ margin: "0 0 10px", fontSize: 13, color: C.silver }}>
              {lang === "en" ? "Women's volleyball" : "Voleibol femenino"} · {site.location.venue}, {site.location.city}
            </Text>
            <Text style={{ margin: "0 0 10px", fontSize: 13 }}>
              <Link href={`mailto:${site.contact.email}`} style={{ color: "#ffffff" }}>
                {site.contact.email}
              </Link>
              {"  ·  "}
              <Link href={site.contact.whatsappHref} style={{ color: "#ffffff" }}>
                WhatsApp {site.contact.phone}
              </Link>
            </Text>
            <Text style={{ margin: 0, fontSize: 13 }}>
              {site.social.map((s, i) => (
                <span key={s.label}>
                  {i > 0 ? <span style={{ color: C.muted }}>{"  ·  "}</span> : null}
                  <Link href={s.href} style={{ color: C.goldLight, fontWeight: "bold" }}>
                    {s.label}
                  </Link>
                </span>
              ))}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function Eyebrow({ children, color = C.gold }: { children: React.ReactNode; color?: string }) {
  return (
    <Text
      style={{ margin: "0 0 6px", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: "bold", color }}
    >
      {children}
    </Text>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        margin: "0 0 14px",
        fontFamily: HEAD,
        fontSize: 27,
        lineHeight: "1.15",
        textTransform: "uppercase",
        color: C.navyDeep,
      }}
    >
      {children}
    </Text>
  );
}

/** Two-column details table (label · value). */
export function Details({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <table
      role="presentation"
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      style={{ border: `1px solid ${C.line}`, borderRadius: 8, borderCollapse: "separate", margin: "0 0 24px" }}
    >
      <tbody>
        {rows.map(([k, v], i) => {
          const border = i ? `1px solid ${C.line}` : "none";
          return (
            <tr key={k}>
              <td
                style={{
                  padding: "10px 14px",
                  borderTop: border,
                  width: "38%",
                  verticalAlign: "top",
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: C.muted,
                }}
              >
                {k}
              </td>
              <td style={{ padding: "10px 14px", borderTop: border, verticalAlign: "top", fontSize: 15, color: C.navy }}>
                {v}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function GoldButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        backgroundColor: C.gold,
        borderRadius: 6,
        padding: "14px 24px",
        fontSize: 14,
        fontWeight: "bold",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: C.navyDeep,
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}

export function formatDate(iso: string, lang: Locale) {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(lang === "en" ? "en-US" : "es-CR", { day: "numeric", month: "long", year: "numeric" });
}
