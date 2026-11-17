"use client";

import { createContext, useContext, useMemo } from "react";

import { lp, type Locale } from "./config";
import { getContent } from "./content";

const LocaleContext = createContext<Locale>("es");

/** Provides the current language to Client Components (set in the [lang] layout). */
export function LocaleProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}

/** Language, localized content and a path helper, for Client Components. */
export function useI18n() {
  const lang = useContext(LocaleContext);
  return useMemo(() => ({ lang, c: getContent(lang), href: (path: string) => lp(lang, path) }), [lang]);
}
