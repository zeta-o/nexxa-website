import { z } from "zod";

import type { Locale } from "@/i18n/config";

/** Option values are stable keys (Spanish); show them with the label maps below. */
export const divisionOptions = ["Escuelita", "Mini", "Pre-Infantil", "Infantil", "Juvenil", "No estoy segura"] as const;
export const experienceOptions = ["Nunca", "Escuela / recreativo", "Otro club"] as const;

export const optionLabels: Record<Locale, Record<string, string>> = {
  es: {},
  en: {
    "No estoy segura": "Not sure",
    Nunca: "Never",
    "Escuela / recreativo": "School / recreational",
    "Otro club": "Another club",
  },
};

export const optionLabel = (lang: Locale, value: string) => optionLabels[lang][value] ?? value;

const messages = {
  es: {
    playerName: "Escribe el nombre completo de la jugadora.",
    birthDate: "Indica la fecha de nacimiento.",
    birthDateInvalid: "Fecha no válida.",
    division: "Elige una categoría.",
    experience: "Indica su experiencia.",
    guardianName: "Escribe el nombre del tutor.",
    phone: "Escribe un teléfono válido.",
    phoneChars: "Usa solo números y + ( ) -.",
    email: "Escribe un correo válido.",
    comments: "Máximo 1000 caracteres.",
  },
  en: {
    playerName: "Enter the player's full name.",
    birthDate: "Enter her date of birth.",
    birthDateInvalid: "Invalid date.",
    division: "Choose a category.",
    experience: "Tell us about her experience.",
    guardianName: "Enter the guardian's name.",
    phone: "Enter a valid phone number.",
    phoneChars: "Use only numbers and + ( ) -.",
    email: "Enter a valid email.",
    comments: "1000 characters max.",
  },
} satisfies Record<Locale, Record<string, string>>;

export function makeInscriptionSchema(lang: Locale) {
  const m = messages[lang];
  return z.object({
    playerName: z.string().trim().min(3, m.playerName),
    birthDate: z
      .string()
      .min(1, m.birthDate)
      .refine((v) => !Number.isNaN(Date.parse(v)), m.birthDateInvalid),
    division: z.enum(divisionOptions, { message: m.division }),
    experience: z.enum(experienceOptions, { message: m.experience }),
    guardianName: z.string().trim().min(3, m.guardianName),
    phone: z
      .string()
      .trim()
      .min(8, m.phone)
      .regex(/^[+\d\s()-]+$/, m.phoneChars),
    email: z.email(m.email),
    comments: z.string().trim().max(1000, m.comments).optional().default(""),
  });
}

export const inscriptionSchema = makeInscriptionSchema("es");

export type InscriptionInput = z.input<typeof inscriptionSchema>;
export type Inscription = z.output<typeof inscriptionSchema>;
export type InscriptionField = keyof InscriptionInput;
export type FieldErrors = Partial<Record<InscriptionField, string>>;
