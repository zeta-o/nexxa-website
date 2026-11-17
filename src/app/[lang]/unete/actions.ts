"use server";

import { isLocale, type Locale } from "@/i18n/config";
import {
  makeInscriptionSchema,
  optionLabel,
  type FieldErrors,
  type InscriptionInput,
} from "@/lib/inscription-schema";

export type SubmitResult =
  | { ok: true; division: string }
  | { ok: false; errors: FieldErrors; message: string };

/**
 * Receives a tryout request. Validation runs here too, so the client can
 * never bypass it.
 *
 * TODO: deliver the request somewhere the club reads it — e.g. send an
 * email with Resend, or store it in a database (Vercel Postgres, Supabase).
 * Until then it is only logged to the server console (visible in Vercel logs).
 */
export async function submitInscription(input: InscriptionInput, langInput: Locale = "es"): Promise<SubmitResult> {
  const lang: Locale = isLocale(langInput) ? langInput : "es";
  const parsed = makeInscriptionSchema(lang).safeParse(input);

  if (!parsed.success) {
    const errors: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof FieldErrors;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors, message: lang === "en" ? "Please check the highlighted fields." : "Revisa los campos marcados." };
  }

  console.info("[inscripcion]", {
    division: parsed.data.division,
    receivedAt: new Date().toISOString(),
  });

  return { ok: true, division: optionLabel(lang, parsed.data.division) };
}
