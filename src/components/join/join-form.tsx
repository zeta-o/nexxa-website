"use client";

import { useTransition } from "react";
import Image from "next/image";

import { submitInscription } from "@/app/unete/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  divisionOptions,
  experienceOptions,
  type InscriptionField,
  type InscriptionInput,
} from "@/lib/inscription-schema";
import { cn } from "@/lib/utils";
import { useInscriptionStore } from "@/stores/use-inscription-store";

import crest from "../../../public/images/escudo-nexxa-rise.png";

const fieldClass =
  "h-12 rounded border-navy-line bg-navy px-3.5 text-base text-white placeholder:text-haze/70 focus-visible:border-gold focus-visible:ring-gold/40 md:text-base";
const labelClass = "text-[13px] font-semibold tracking-[0.08em] text-gold-light uppercase";

export function JoinForm() {
  const draft = useInscriptionStore((s) => s.draft);
  const errors = useInscriptionStore((s) => s.errors);
  const status = useInscriptionStore((s) => s.status);
  const message = useInscriptionStore((s) => s.message);
  const setField = useInscriptionStore((s) => s.setField);
  const setErrors = useInscriptionStore((s) => s.setErrors);
  const setStatus = useInscriptionStore((s) => s.setStatus);
  const reset = useInscriptionStore((s) => s.reset);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    startTransition(async () => {
      try {
        const res = await submitInscription(draft);
        if (res.ok) {
          setStatus("success", res.division);
        } else {
          setErrors(res.errors);
          setStatus("error", res.message);
        }
      } catch {
        setStatus("error", "No pudimos enviar la solicitud. Intenta de nuevo.");
      }
    });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border-2 border-gold bg-navy p-10" role="status">
        <Image src={crest} alt="" className="h-auto w-20" sizes="80px" />
        <h2 className="m-0 font-display text-[44px] leading-[0.95] font-black uppercase">
          ¡Bienvenida a Nexxa Rise!
        </h2>
        <p className="m-0 text-base leading-relaxed text-mist">
          Recibimos tu solicitud{message ? ` para ${message}` : ""}. Te escribiremos en los próximos días con la
          fecha y sede de la prueba.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={reset}
          className="h-11 rounded border-2 border-white bg-transparent px-4.5 text-[13px] font-bold tracking-[0.08em] text-white uppercase hover:bg-white hover:text-navy-deep"
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  const field = (name: InscriptionField) => ({
    id: `f-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-error` : undefined,
  });

  const text = (name: Exclude<InscriptionField, "division" | "experience">) => ({
    ...field(name),
    value: (draft[name] as string) ?? "",
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setField(name, e.target.value as InscriptionInput[typeof name]),
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-7 rounded-lg bg-navy-deep p-6 text-white sm:p-9"
      aria-describedby={status === "error" && message ? "form-error" : undefined}
    >
      <h2 className="m-0 font-display text-4xl leading-none font-black uppercase">Solicitud de prueba</h2>

      <fieldset className="m-0 flex flex-col gap-4.5 border-0 p-0">
        <legend className="pb-3 text-sm font-bold">Datos de la jugadora</legend>
        <Field label="Nombre completo" htmlFor="f-playerName" error={errors.playerName} errorId="f-playerName-error">
          <Input {...text("playerName")} autoComplete="off" className={fieldClass} />
        </Field>
        <div className="flex flex-wrap gap-4">
          <Field className="flex-[1_1_200px]" label="Fecha de nacimiento" htmlFor="f-birthDate" error={errors.birthDate} errorId="f-birthDate-error">
            <Input {...text("birthDate")} type="date" className={cn(fieldClass, "[color-scheme:dark]")} />
          </Field>
        </div>

        <div className="flex flex-col gap-3">
          <span id="division-label" className={labelClass}>
            División
          </span>
          <RadioGroup
            aria-labelledby="division-label"
            value={draft.division}
            onValueChange={(v) => setField("division", v as InscriptionInput["division"])}
            className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5"
          >
            {divisionOptions.map((d) => (
              <label
                key={d}
                className={cn(
                  "flex min-h-13 cursor-pointer items-center gap-3 rounded border-2 px-3.5 text-[15px] font-semibold transition-colors",
                  draft.division === d ? "border-gold bg-gold/10" : "border-navy-line hover:border-gold/60",
                )}
              >
                <RadioGroupItem value={d} className="border-haze data-checked:border-gold data-checked:bg-gold" />
                {d}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <span id="experience-label" className={labelClass}>
            ¿Ha jugado voleibol antes?
          </span>
          <RadioGroup
            aria-labelledby="experience-label"
            value={draft.experience}
            onValueChange={(v) => setField("experience", v as InscriptionInput["experience"])}
            className="flex flex-wrap gap-x-6 gap-y-1"
          >
            {experienceOptions.map((o) => (
              <label key={o} className="flex min-h-11 cursor-pointer items-center gap-2.5 text-[15px]">
                <RadioGroupItem value={o} className="border-haze data-checked:border-gold data-checked:bg-gold" />
                {o}
              </label>
            ))}
          </RadioGroup>
        </div>
      </fieldset>

      <fieldset className="m-0 flex flex-col gap-4.5 border-0 border-t border-white/15 p-0 pt-6">
        <legend className="pb-3 text-sm font-bold">Madre, padre o tutor</legend>
        <Field label="Nombre" htmlFor="f-guardianName" error={errors.guardianName} errorId="f-guardianName-error">
          <Input {...text("guardianName")} autoComplete="name" className={fieldClass} />
        </Field>
        <div className="flex flex-wrap gap-4">
          <Field className="flex-[1_1_180px]" label="Teléfono" htmlFor="f-phone" error={errors.phone} errorId="f-phone-error">
            <Input {...text("phone")} type="tel" autoComplete="tel" className={fieldClass} />
          </Field>
          <Field className="flex-[1_1_220px]" label="Correo" htmlFor="f-email" error={errors.email} errorId="f-email-error">
            <Input {...text("email")} type="email" autoComplete="email" className={fieldClass} />
          </Field>
        </div>
        <Field label="Comentarios (opcional)" htmlFor="f-comments" error={errors.comments} errorId="f-comments-error">
          <Textarea {...text("comments")} rows={3} className={cn(fieldClass, "h-auto min-h-24 py-3")} />
        </Field>
      </fieldset>

      {status === "error" && message ? (
        <p id="form-error" role="alert" className="m-0 rounded border border-red-400/60 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {message}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isPending}
        className="h-14 cursor-pointer rounded bg-gold text-[15px] font-bold tracking-[0.08em] text-navy-deep uppercase hover:bg-gold-light"
      >
        {isPending ? "Enviando…" : "Enviar solicitud"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  errorId,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  errorId: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor} className={labelClass}>
        {label}
      </Label>
      {children}
      {error ? (
        <span id={errorId} className="text-sm text-red-200">
          {error}
        </span>
      ) : null}
    </div>
  );
}
