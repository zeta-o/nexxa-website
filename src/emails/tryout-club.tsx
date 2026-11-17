/** Email to the club: a new tryout request arrived. Always in Spanish. */
import { Link, Text } from "@react-email/components";

import type { Locale } from "@/i18n/config";
import type { Inscription } from "@/lib/inscription-schema";

import { C, Details, EmailLayout, Eyebrow, formatDate, GoldButton, Title } from "./components/layout";

export type TryoutClubProps = { data: Inscription; formLang: Locale; receivedAt: Date };

export function tryoutClubSubject({ data }: TryoutClubProps) {
  return `Nueva solicitud de prueba: ${data.playerName} (${data.division})`;
}

export default function TryoutClubEmail({ data, formLang, receivedAt }: TryoutClubProps) {
  const received = receivedAt.toLocaleString("es-CR", {
    timeZone: "America/Costa_Rica",
    dateStyle: "long",
    timeStyle: "short",
  });
  const digits = data.phone.replace(/[^\d]/g, "");
  const whatsapp = `https://wa.me/${digits.length === 8 ? `506${digits}` : digits}`;

  return (
    <EmailLayout lang="es" preview={`${data.playerName} · ${data.division} · ${data.guardianName}`}>
      <Eyebrow>Nueva solicitud de prueba</Eyebrow>
      <Title>{data.playerName}</Title>
      <Text style={{ margin: "0 0 24px", fontSize: 13, color: C.muted }}>
        <span
          style={{
            backgroundColor: C.sky,
            color: "#ffffff",
            fontWeight: "bold",
            padding: "5px 10px",
            borderRadius: 4,
            fontSize: 13,
          }}
        >
          {data.division}
        </span>
        {"   "}Recibida el {received}
        {formLang === "en" ? " · formulario en inglés" : ""}
      </Text>

      <Eyebrow color={C.navy}>Jugadora</Eyebrow>
      <Details
        rows={[
          ["Nombre", data.playerName],
          ["Nacimiento", formatDate(data.birthDate, "es")],
          ["Categoría", data.division],
          ["Experiencia", data.experience],
        ]}
      />

      <Eyebrow color={C.navy}>Madre, padre o tutor</Eyebrow>
      <Details
        rows={[
          ["Nombre", data.guardianName],
          [
            "Teléfono",
            <Link key="tel" href={`tel:${data.phone}`} style={{ color: C.navy }}>
              {data.phone}
            </Link>,
          ],
          [
            "Correo",
            <Link key="mail" href={`mailto:${data.email}`} style={{ color: C.navy }}>
              {data.email}
            </Link>,
          ],
        ]}
      />

      {data.comments ? (
        <>
          <Eyebrow color={C.navy}>Comentarios</Eyebrow>
          <Text
            style={{
              margin: "0 0 24px",
              padding: "14px 16px",
              backgroundColor: C.paper,
              borderLeft: `4px solid ${C.gold}`,
              borderRadius: 4,
              whiteSpace: "pre-wrap",
              fontSize: 15,
            }}
          >
            {data.comments}
          </Text>
        </>
      ) : null}

      <GoldButton href={`mailto:${data.email}`}>Responder por correo</GoldButton>
      {"  "}
      <GoldButton href={whatsapp}>WhatsApp</GoldButton>
      <Text style={{ margin: "16px 0 0", fontSize: 13, color: C.muted }}>
        También puedes contestar este correo: la respuesta le llega directo a {data.guardianName}.
      </Text>
    </EmailLayout>
  );
}

TryoutClubEmail.PreviewProps = {
  data: {
    playerName: "Valeria Mora Jiménez",
    birthDate: "2013-05-14",
    division: "Pre-Infantil",
    experience: "Escuela / recreativo",
    guardianName: "Andrea Jiménez",
    phone: "8888-1234",
    email: "andrea@example.com",
    comments: "Juega en el equipo de la escuela desde el año pasado.",
  },
  formLang: "es",
  receivedAt: new Date("2026-11-17T15:30:00-06:00"),
} satisfies TryoutClubProps;
