/** Confirmation to the family, in the language they used on the form. */
import { Link, Section, Text } from "@react-email/components";

import type { Locale } from "@/i18n/config";
import { site } from "@/lib/data";
import { optionLabel, type Inscription } from "@/lib/inscription-schema";

import { abs, C, Details, EmailLayout, Eyebrow, formatDate, GoldButton, HEAD, Title } from "./components/layout";

export type TryoutConfirmationProps = { data: Inscription; lang: Locale };

const copy = {
  es: {
    subject: "Recibimos tu solicitud de prueba",
    eyebrow: "Solicitud recibida",
    title: (name: string) => `¡Gracias, ${name}!`,
    intro: (player: string, cat: string) => (
      <>
        Recibimos la solicitud de prueba de <strong>{player}</strong> para la categoría <strong>{cat}</strong>. Nos alegra
        que quiera ser parte de NEXXA RISE.
      </>
    ),
    nextTitle: "¿Qué sigue?",
    steps: [
      ["Revisamos la solicitud", "Nuestro equipo técnico revisa los datos y la categoría."],
      ["Te contactamos", "En los próximos días te escribimos con la fecha y la sede de la prueba."],
      ["Día de la prueba", "Ven con ropa deportiva, tenis, rodilleras y agua."],
    ],
    summary: "Resumen de tu solicitud",
    player: "Jugadora",
    category: "Categoría",
    birth: "Nacimiento",
    questions: "¿Tienes dudas? Responde este correo o escríbenos por WhatsApp.",
    cta: "Escríbenos por WhatsApp",
    site: "Conoce el club →",
    clubPath: "/club",
  },
  en: {
    subject: "We received your tryout request",
    eyebrow: "Request received",
    title: (name: string) => `Thank you, ${name}!`,
    intro: (player: string, cat: string) => (
      <>
        We received the tryout request for <strong>{player}</strong> in the <strong>{cat}</strong> category. We're so glad
        she wants to be part of NEXXA RISE.
      </>
    ),
    nextTitle: "What's next?",
    steps: [
      ["We review the request", "Our coaching staff reviews the details and the category."],
      ["We contact you", "In the next few days we'll write to you with the tryout date and venue."],
      ["Tryout day", "Bring sportswear, sneakers, knee pads and water."],
    ],
    summary: "Your request",
    player: "Player",
    category: "Category",
    birth: "Date of birth",
    questions: "Questions? Reply to this email or message us on WhatsApp.",
    cta: "Message us on WhatsApp",
    site: "Explore the club →",
    clubPath: "/en/club",
  },
};

export function tryoutConfirmationSubject({ lang }: TryoutConfirmationProps) {
  return copy[lang].subject;
}

export default function TryoutConfirmationEmail({ data, lang }: TryoutConfirmationProps) {
  const t = copy[lang];
  const firstName = data.guardianName.trim().split(/\s+/)[0] ?? data.guardianName;
  const category = optionLabel(lang, data.division);

  return (
    <EmailLayout lang={lang} preview={`${t.eyebrow}: ${data.playerName} · ${category}`}>
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Title>{t.title(firstName)}</Title>
      <Text style={{ margin: "0 0 26px", fontSize: 16 }}>{t.intro(data.playerName, category)}</Text>

      <Section style={{ backgroundColor: C.navyDeep, borderRadius: 10, padding: "22px 22px 8px", margin: "0 0 26px" }}>
        <Text style={{ margin: "0 0 16px", fontFamily: HEAD, fontSize: 18, textTransform: "uppercase", color: "#ffffff" }}>
          {t.nextTitle}
        </Text>
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            {t.steps.map(([title, text], i) => (
              <tr key={title}>
                <td style={{ width: 44, verticalAlign: "top", paddingBottom: 14 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      lineHeight: "32px",
                      borderRadius: 16,
                      backgroundColor: C.gold,
                      color: C.navyDeep,
                      textAlign: "center",
                      fontFamily: HEAD,
                      fontSize: 15,
                    }}
                  >
                    {i + 1}
                  </div>
                </td>
                <td style={{ verticalAlign: "top", padding: "4px 0 14px" }}>
                  <Text style={{ margin: 0, fontWeight: "bold", color: "#ffffff", fontSize: 15 }}>{title}</Text>
                  <Text style={{ margin: "2px 0 0", fontSize: 14, color: C.silver }}>{text}</Text>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Eyebrow color={C.navy}>{t.summary}</Eyebrow>
      <Details
        rows={[
          [t.player, data.playerName],
          [t.category, category],
          [t.birth, formatDate(data.birthDate, lang)],
        ]}
      />

      <Text style={{ margin: "0 0 16px", fontSize: 16 }}>{t.questions}</Text>
      <GoldButton href={site.contact.whatsappHref}>{t.cta}</GoldButton>
      {"   "}
      <Link href={abs(t.clubPath)} style={{ fontSize: 14, fontWeight: "bold", color: C.navy }}>
        {t.site}
      </Link>
    </EmailLayout>
  );
}

TryoutConfirmationEmail.PreviewProps = {
  data: {
    playerName: "Valeria Mora Jiménez",
    birthDate: "2013-05-14",
    division: "Pre-Infantil",
    experience: "Escuela / recreativo",
    guardianName: "Andrea Jiménez",
    phone: "8888-1234",
    email: "andrea@example.com",
    comments: "",
  },
  lang: "es",
} satisfies TryoutConfirmationProps;
