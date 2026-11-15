import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { FieldErrors, InscriptionInput } from "@/lib/inscription-schema";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

const emptyDraft: InscriptionInput = {
  playerName: "",
  birthDate: "",
  division: "Mini",
  experience: "Nunca",
  guardianName: "",
  phone: "",
  email: "",
  comments: "",
};

type InscriptionState = {
  draft: InscriptionInput;
  errors: FieldErrors;
  status: SubmitStatus;
  message: string | null;
  setField: <K extends keyof InscriptionInput>(key: K, value: InscriptionInput[K]) => void;
  setErrors: (errors: FieldErrors) => void;
  setStatus: (status: SubmitStatus, message?: string | null) => void;
  reset: () => void;
};

/**
 * Inscription form state. The draft is persisted in sessionStorage so a
 * parent who navigates away mid-form doesn't lose what they typed.
 */
export const useInscriptionStore = create<InscriptionState>()(
  persist(
    (set) => ({
      draft: emptyDraft,
      errors: {},
      status: "idle",
      message: null,
      setField: (key, value) =>
        set((s) => ({
          draft: { ...s.draft, [key]: value },
          errors: { ...s.errors, [key]: undefined },
        })),
      setErrors: (errors) => set({ errors }),
      setStatus: (status, message = null) => set({ status, message }),
      reset: () => set({ draft: emptyDraft, errors: {}, status: "idle", message: null }),
    }),
    {
      name: "nexxa-inscripcion",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (s) => ({ draft: s.draft }),
    },
  ),
);
