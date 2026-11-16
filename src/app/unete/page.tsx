import type { Metadata } from "next";

import { JoinForm } from "@/components/join/join-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq, joinSteps, site } from "@/lib/data";
import { Brand } from "@/components/site/brand-name";

export const metadata: Metadata = {
  title: "Únete",
  description: "Pruebas abiertas desde la Escuelita hasta Juvenil. Inscribe a tu hija en NEXXA RISE.",
};

export default function UnetePage() {
  return (
    <>
      <section className="bg-gold text-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 pt-28 pb-20">
          <span className="eyebrow text-sm">Pruebas abiertas</span>
          <h1 className="m-0 font-display text-[clamp(37px,5.3vw,74px)] leading-[0.88] font-black uppercase">
            Únete a
            <br />
            <Brand />.
          </h1>
          <p className="m-0 max-w-[620px] text-lg leading-relaxed">
            De la Escuelita a Juvenil: hay un lugar para cada jugadora que quiera crecer. Llena el formulario y te
            contactamos con la fecha de la próxima prueba.
          </p>
        </div>
      </section>

      <section className="bg-navy-deep">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-12 px-6 pt-22 pb-24">
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-7">
            <h2 className="m-0 font-display text-[29px] leading-[0.95] font-black uppercase">Cómo funciona</h2>
            <ol className="m-0 flex list-none flex-col gap-5 p-0">
              {joinSteps.map((s) => (
                <li key={s.n} className="flex items-start gap-4.5">
                  <span className="flex size-13 flex-none items-center justify-center rounded-full bg-gold font-display text-lg font-black text-navy-deep">
                    {s.n}
                  </span>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="font-display text-lg font-extrabold uppercase">{s.title}</span>
                    <span className="text-[15px] leading-normal text-mist">{s.text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-2 rounded-lg border border-gold/40 p-5">
              <span className="eyebrow text-gold-light">¿Dudas?</span>
              <a href={`mailto:${site.contact.email}`} className="text-[15px] text-white hover:text-gold-light">
                {site.contact.email}
              </a>
              <a href={site.contact.phoneHref} className="text-[15px] text-white hover:text-gold-light">
                Tel. {site.contact.phone}
              </a>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] font-semibold text-gold-light hover:text-white"
              >
                Escríbenos por WhatsApp →
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_520px]">
            <JoinForm />
          </div>
        </div>
      </section>

      <section className="bg-cream text-navy-deep">
        <div className="mx-auto flex max-w-[900px] flex-col gap-7 px-6 py-22">
          <h2 className="m-0 font-display text-[clamp(24px,3.0vw,34px)] leading-[0.95] font-black uppercase">
            Preguntas frecuentes
          </h2>
          <Accordion className="flex flex-col gap-2.5">
            {faq.map((q) => (
              <AccordionItem key={q.q} value={q.q} className="rounded-lg border! border-silver! bg-white px-5.5">
                <AccordionTrigger className="min-h-15 cursor-pointer items-center py-4 text-[17px] font-bold hover:no-underline">
                  {q.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-ink-soft">{q.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
