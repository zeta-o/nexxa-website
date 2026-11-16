import { z } from "zod";

export const divisionOptions = ["Escuelita", "Mini", "Pre-Infantil", "Infantil", "Pre-Juvenil", "Juvenil", "No estoy segura"] as const;
export const experienceOptions = ["Nunca", "Escuela / recreativo", "Otro club"] as const;

export const inscriptionSchema = z.object({
  playerName: z.string().trim().min(3, "Escribe el nombre completo de la jugadora."),
  birthDate: z
    .string()
    .min(1, "Indica la fecha de nacimiento.")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Fecha no válida."),
  division: z.enum(divisionOptions, { message: "Elige una categoría." }),
  experience: z.enum(experienceOptions, { message: "Indica su experiencia." }),
  guardianName: z.string().trim().min(3, "Escribe el nombre del tutor."),
  phone: z
    .string()
    .trim()
    .min(8, "Escribe un teléfono válido.")
    .regex(/^[+\d\s()-]+$/, "Usa solo números y + ( ) -."),
  email: z.email("Escribe un correo válido."),
  comments: z.string().trim().max(1000, "Máximo 1000 caracteres.").optional().default(""),
});

export type InscriptionInput = z.input<typeof inscriptionSchema>;
export type Inscription = z.output<typeof inscriptionSchema>;
export type InscriptionField = keyof InscriptionInput;
export type FieldErrors = Partial<Record<InscriptionField, string>>;
