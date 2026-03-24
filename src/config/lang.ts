import { LANGS, type Lang } from "@/types";

const envDefaultLang = import.meta.env.VITE_DEFAULT_LANG as string;

export const DEFAULT_LANG: Lang = LANGS.includes(envDefaultLang as Lang)
    ? (envDefaultLang as Lang)
    : "en";
