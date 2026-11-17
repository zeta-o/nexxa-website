"use server";

import { isLocale, type Locale } from "@/i18n/config";
import { sendInscriptionEmails } from "@/lib/email/send";
import {
  makeInscriptionSchema,
  optionLabel,
  type FieldErrors,
  type InscriptionInput,
} from "@/lib/inscription-schema";

export type SubmitResult =
  | { ok: true; division: string; confirmationSent: boolean }
  | { ok: false; errors: FieldErrors; message: string };

/**
 * Receives a tryout request. Validation runs here too, so the client can
 * never bypass it. Then emails the club and sends the family a confirmation
 * (see src/lib/email). If the club email fails, the family sees an error so
 * no request is lost silently.
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

  console.info("[inscripcion]", { division: parsed.data.division, lang, receivedAt: new Date().toISOString() });

  const delivery = await sendInscriptionEmails(parsed.data, lang).catch((err) => {
    console.error("[inscripcion] email error", err);
    return { club: false, family: false };
  });

  if (process.env.RESEND_API_KEY && !delivery.club) {
    return {
      ok: false,
      errors: {},
      message:
        lang === "en"
          ? "We couldn't send your request. Please try again or message us on WhatsApp."
          : "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.",
    };
  }

  return { ok: true, division: optionLabel(lang, parsed.data.division), confirmationSent: delivery.family };
}
