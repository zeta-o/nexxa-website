import { render } from "@react-email/render";
import { Resend } from "resend";

import type { Locale } from "@/i18n/config";
import { site } from "@/lib/data";
import type { Inscription } from "@/lib/inscription-schema";

import TryoutClubEmail, { tryoutClubSubject } from "@/emails/tryout-club";
import TryoutConfirmationEmail, { tryoutConfirmationSubject } from "@/emails/tryout-confirmation";

/**
 * Env vars (Vercel → Settings → Environment Variables):
 * - RESEND_API_KEY  required. Without it nothing is sent (requests are only logged).
 * - EMAIL_FROM      sender, e.g. "NEXXA RISE <pruebas@nexxarise.com>". Must be on a domain verified in
 *                   Resend. Defaults to Resend's test sender, which can only deliver to the Resend account
 *                   owner, so the family confirmation is skipped until a domain is verified.
 * - EMAIL_TO        club inbox for notifications (defaults to the contact email).
 */
const TEST_SENDER = "NEXXA RISE <onboarding@resend.dev>";

export type DeliveryResult = { club: boolean; family: boolean };

export async function sendInscriptionEmails(data: Inscription, lang: Locale): Promise<DeliveryResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[inscripcion] RESEND_API_KEY missing; emails not sent");
    return { club: false, family: false };
  }

  const resend = new Resend(key);
  const from = process.env.EMAIL_FROM || TEST_SENDER;
  const clubInbox = process.env.EMAIL_TO || site.contact.email;
  const canEmailFamily = from !== TEST_SENDER;

  const clubProps = { data, formLang: lang, receivedAt: new Date() };
  const familyProps = { data, lang };
  const clubEl = TryoutClubEmail(clubProps);
  const familyEl = TryoutConfirmationEmail(familyProps);
  // HTML plus a plain-text version (better deliverability, readable in any client).
  const [clubHtml, clubText, familyHtml, familyText] = await Promise.all([
    render(clubEl),
    render(clubEl, { plainText: true }),
    render(familyEl),
    render(familyEl, { plainText: true }),
  ]);

  const [clubRes, familyRes] = await Promise.all([
    resend.emails.send({
      from,
      to: clubInbox,
      replyTo: data.email,
      subject: tryoutClubSubject(clubProps),
      html: clubHtml,
      text: clubText,
      tags: [{ name: "type", value: "tryout_club" }],
    }),
    canEmailFamily
      ? resend.emails.send({
          from,
          to: data.email,
          replyTo: clubInbox,
          subject: tryoutConfirmationSubject(familyProps),
          html: familyHtml,
          text: familyText,
          tags: [{ name: "type", value: "tryout_confirmation" }],
        })
      : Promise.resolve(null),
  ]);

  if (clubRes.error) console.error("[inscripcion] club email failed", clubRes.error);
  if (familyRes?.error) console.error("[inscripcion] confirmation email failed", familyRes.error);
  if (!canEmailFamily) console.info("[inscripcion] EMAIL_FROM not set; family confirmation skipped");

  return { club: !clubRes.error, family: !!familyRes && !familyRes.error };
}
