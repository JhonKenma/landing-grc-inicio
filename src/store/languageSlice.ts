import type { StateCreator } from "zustand";
import { LANGS, type Lang } from "@/types";

export type LanguageSliceType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const createLanguageSlice: StateCreator<LanguageSliceType> = (set) => ({
  lang: (() => {
    const stored = localStorage.getItem("lang");
    return LANGS.includes(stored as Lang) ? (stored as Lang) : "en";
  })(),

  setLang: (lang) => {
    if (!LANGS.includes(lang)) return;

    localStorage.setItem("lang", lang);
    set({ lang });
  },
});
